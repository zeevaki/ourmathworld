"use client";

import NavBar from "@/components/NavBar";
import Link from "next/link";
import { ArrowLeft, ArrowUp, ArrowDown, HelpCircle, Scale, Printer, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TriText = { en: string; es: string; ur: string };

type VocabCard = {
  icon: LucideIcon;
  term: TriText;
  meaning: TriText;
  frame: TriText;
};

const VOCAB: VocabCard[] = [
  {
    icon: ArrowUp,
    term: { en: "more than", es: "más que", ur: "زیادہ" },
    meaning: {
      en: "One amount is bigger. Something gets added to reach it.",
      es: "Una cantidad es más grande. Se le suma algo para llegar a ella.",
      ur: "ایک مقدار بڑی ہے۔ اس تک پہنچنے کے لیے کچھ جمع کیا جاتا ہے۔",
    },
    frame: { en: "___ has ___ more than ___.", es: "___ tiene ___ más que ___.", ur: "___ کے پاس ___ سے ___ زیادہ ہے۔" },
  },
  {
    icon: ArrowDown,
    term: { en: "less than / fewer than", es: "menos que", ur: "کم" },
    meaning: {
      en: "One amount is smaller. Something is taken away to reach it.",
      es: "Una cantidad es más pequeña. Se le resta algo para llegar a ella.",
      ur: "ایک مقدار چھوٹی ہے۔ اس تک پہنچنے کے لیے کچھ کم کیا جاتا ہے۔",
    },
    frame: { en: "___ has ___ fewer than ___.", es: "___ tiene ___ menos que ___.", ur: "___ کے پاس ___ سے ___ کم ہے۔" },
  },
  {
    icon: HelpCircle,
    term: { en: "how many more...than?", es: "¿cuántos más...que?", ur: "کتنے زیادہ...سے؟" },
    meaning: {
      en: "This is a question about the difference. It always means subtract.",
      es: "Esta es una pregunta sobre la diferencia. Siempre significa restar.",
      ur: "یہ فرق کے بارے میں سوال ہے۔ اس کا مطلب ہمیشہ تفریق ہوتا ہے۔",
    },
    frame: { en: "How many more does ___ have than ___?", es: "¿Cuántos más tiene ___ que ___?", ur: "___ کے پاس ___ سے کتنے زیادہ ہیں؟" },
  },
  {
    icon: Scale,
    term: { en: "as many as / equal to", es: "tantos como / igual a", ur: "برابر" },
    meaning: {
      en: "The two amounts are exactly the same. Nothing is added or taken away.",
      es: "Las dos cantidades son exactamente iguales. No se suma ni se resta nada.",
      ur: "دونوں مقداریں بالکل ایک جیسی ہیں۔ کچھ بھی جمع یا کم نہیں کیا جاتا۔",
    },
    frame: { en: "___ has as many ___ as ___.", es: "___ tiene tantos ___ como ___.", ur: "___ کے پاس اتنے ہی ___ ہیں جتنے ___ کے پاس۔" },
  },
];

function Tri({ text, className = "" }: { text: TriText; className?: string }) {
  return (
    <div className={className}>
      <p className="font-black text-gray-800">{text.en}</p>
      <p className="text-sm text-gray-500 italic">{text.es}</p>
      <p className="text-sm text-gray-500" dir="rtl">{text.ur}</p>
    </div>
  );
}

/**
 * A comparison bar model: a longer bar (same-as segment + extra/difference
 * segment) stacked above a shorter bar of the same "same-as" length.
 * `unknown` marks which value is unlabeled (a "?") in the diagram — this is
 * what makes the same visual work for both "find the difference" problems
 * AND "find the shorter unknown" reversed problems.
 */
function BarModelDiagram({
  labelLong,
  labelShort,
  shortValue,
  diffValue,
  unknown,
}: {
  labelLong: string;
  labelShort: string;
  shortValue: number;
  diffValue: number;
  unknown: "long" | "short" | "diff";
}) {
  const unit = 26;
  const longValue = shortValue + diffValue;
  const barHeight = 34;
  const gap = 14;
  const leftLabelWidth = 90;
  const width = leftLabelWidth + longValue * unit + 20;
  const height = barHeight * 2 + gap + 70;

  const shortText = unknown === "short" ? "?" : String(shortValue);
  const diffText = unknown === "diff" ? "?" : String(diffValue);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label={`Bar model comparing ${labelLong} and ${labelShort}`}
    >
      <text x={0} y={20} className="fill-gray-700" style={{ fontWeight: 800, fontSize: 15 }}>
        {labelLong}
      </text>
      <rect x={leftLabelWidth} y={2} width={shortValue * unit} height={barHeight} rx={6} fill="#065F46" />
      <rect x={leftLabelWidth + shortValue * unit + 2} y={2} width={diffValue * unit - 2} height={barHeight} rx={6} fill="#D97706" />
      <text x={leftLabelWidth + (shortValue * unit) / 2} y={2 + barHeight / 2 + 5} textAnchor="middle" style={{ fill: "#ffffff", fontWeight: 800, fontSize: 14 }}>
        {shortText}
      </text>
      <text x={leftLabelWidth + shortValue * unit + (diffValue * unit) / 2} y={2 + barHeight / 2 + 5} textAnchor="middle" style={{ fill: "#ffffff", fontWeight: 800, fontSize: 14 }}>
        {diffText}
      </text>

      <text x={0} y={2 + barHeight + gap + 18} className="fill-gray-700" style={{ fontWeight: 800, fontSize: 15 }}>
        {labelShort}
      </text>
      <rect x={leftLabelWidth} y={barHeight + gap} width={shortValue * unit} height={barHeight} rx={6} fill="#065F46" />
      <text x={leftLabelWidth + (shortValue * unit) / 2} y={barHeight + gap + barHeight / 2 + 5} textAnchor="middle" style={{ fill: "#ffffff", fontWeight: 800, fontSize: 14 }}>
        {shortText}
      </text>

      <g transform={`translate(0, ${barHeight * 2 + gap + 8})`}>
        <path
          d={`M ${leftLabelWidth + shortValue * unit} 0 L ${leftLabelWidth + shortValue * unit} 8 L ${leftLabelWidth + longValue * unit} 8 L ${leftLabelWidth + longValue * unit} 0`}
          fill="none"
          stroke="#D97706"
          strokeWidth={2}
        />
        <text x={leftLabelWidth + shortValue * unit + (diffValue * unit) / 2} y={26} textAnchor="middle" style={{ fill: "#D97706", fontWeight: 800, fontSize: 14 }}>
          difference = {diffText}
        </text>
      </g>
    </svg>
  );
}

export default function ComparisonPosterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="print:hidden">
        <NavBar />
      </div>

      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full print:py-0 print:px-0 print:max-w-none">
        <div className="flex items-center justify-between mb-6 print:hidden">
          <Link
            href="/community/esl-strategies"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-400 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> ESL Strategies
          </Link>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <Printer size={16} /> Print poster
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-1">
            Comparing Words in Word Problems
          </h1>
          <p className="text-gray-500 font-semibold">Comparando Palabras en Problemas · موازنے کے الفاظ</p>
        </div>

        {/* Example 1: straightforward comparison */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 print:shadow-none print:border-gray-300 break-inside-avoid">
          <p className="text-center font-bold text-gray-700 mb-1">
            Sam has 12 pencils. Mia has 7 pencils.
          </p>
          <p className="text-center text-gray-500 text-sm mb-4">
            How many more pencils does Sam have than Mia?
          </p>
          <BarModelDiagram labelLong="Sam" labelShort="Mia" shortValue={7} diffValue={5} unknown="diff" />
          <p className="text-center font-black text-primary mt-4 text-lg">12 − 7 = 5</p>
          <p className="text-center text-gray-500 text-sm">Sam has 5 more pencils than Mia.</p>
        </div>

        {/* Watch-out callout: the reversed case */}
        <div className="bg-amber-50 rounded-2xl p-5 border-2 border-accent mb-6 break-inside-avoid">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={20} className="text-accent" />
            <p className="font-black text-gray-800">Watch out — &quot;longer than&quot; doesn&apos;t always mean add!</p>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            If A is <span className="font-bold">longer</span> than B, then B is <span className="font-bold">shorter</span> than A — the same picture works for both. What changes is what&apos;s <span className="italic">already known</span> and what&apos;s the mystery number.
          </p>
          <p className="text-xs text-gray-500 italic">Si A es más largo que B, entonces B es más corto que A. · اگر A، B سے لمبا ہے تو B، A سے چھوٹا ہے۔</p>
        </div>

        {/* Example 2: the reversed case */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8 print:shadow-none print:border-gray-300 break-inside-avoid">
          <p className="text-center font-bold text-gray-700 mb-1">
            Pencil A is 10 cm. Pencil A is 3 cm longer than Pencil B.
          </p>
          <p className="text-center text-gray-500 text-sm mb-4">
            How long is Pencil B?
          </p>
          <BarModelDiagram labelLong="Pencil A" labelShort="Pencil B" shortValue={7} diffValue={3} unknown="short" />
          <p className="text-center font-black text-primary mt-4 text-lg">10 − 3 = 7</p>
          <p className="text-center text-gray-500 text-sm">
            Even though the problem says &quot;longer,&quot; we subtract — because we already know the long one, and we&apos;re solving for the short one.
          </p>
        </div>

        {/* Vocabulary cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {VOCAB.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.term.en}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 print:shadow-none print:border-gray-300 break-inside-avoid"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-primary-light rounded-xl flex-shrink-0 flex items-center justify-center w-10 h-10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <Tri text={v.term} />
                </div>
                <p className="text-gray-600 text-sm mb-3">{v.meaning.en}</p>
                <div className="bg-accent-light rounded-xl px-3 py-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent mb-1">Sentence frame</p>
                  <p className="text-sm font-semibold text-gray-700">{v.frame.en}</p>
                  <p className="text-xs text-gray-500 italic">{v.frame.es}</p>
                  <p className="text-xs text-gray-500" dir="rtl">{v.frame.ur}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer callout for the classroom */}
        <div className="bg-primary-light rounded-2xl p-6 text-center print:hidden">
          <p className="text-gray-600 font-semibold">
            Print this as a classroom poster, or keep it open next to the Apply tab while students work through word problems.
          </p>
        </div>
      </main>
    </div>
  );
}
