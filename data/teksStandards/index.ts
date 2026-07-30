import { TeksStrand } from "./grade1";
import grade1Standards from "./grade1";

export type TeksInfoPart = { letter: string; text: string };

export type TeksInfo = {
  code: string;
  strandCode: string;
  strandTitle: string;
  overview: string;
  plainExplanation: string;
  parts: TeksInfoPart[];
  isBundle: boolean;
};

const standardsByGrade: Record<string, TeksStrand[]> = {
  "1": grade1Standards,
};

/**
 * Looks up the official TEKS text for a unit's code, e.g. "1.2B" (a specific
 * lettered sub-standard) or "1.4" (a bundled unit covering a whole strand).
 */
export function getTeksInfo(grade: string, code: string): TeksInfo | null {
  const strands = standardsByGrade[grade];
  if (!strands) return null;

  const match = code.match(/^(\d+\.\d+)([A-Z]?)$/);
  if (!match) return null;
  const [, strandCode, letter] = match;

  const strand = strands.find((s) => s.code === strandCode);
  if (!strand) return null;

  if (letter && strand.subStandards[letter]) {
    return {
      code,
      strandCode: strand.code,
      strandTitle: strand.title,
      overview: strand.overview,
      plainExplanation: strand.plainExplanation,
      parts: [{ letter, text: strand.subStandards[letter] }],
      isBundle: false,
    };
  }

  return {
    code,
    strandCode: strand.code,
    strandTitle: strand.title,
    overview: strand.overview,
    plainExplanation: strand.plainExplanation,
    parts: Object.entries(strand.subStandards).map(([l, text]) => ({ letter: l, text })),
    isBundle: true,
  };
}
