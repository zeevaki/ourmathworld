"use client";

import { useEffect, useRef, useState } from "react";
import {
  // Tab icons
  BookOpen, GraduationCap, PencilLine, ClipboardCheck, BookMarked, Zap,
  // UI elements
  Timer, Star, ThumbsUp, Dumbbell, ChevronRight,
  // Kindergarten vocab
  Hash, CircleHelp, TrendingUp, TrendingDown, PlusCircle, Scissors, ArrowLeft, CornerRightDown, CircleOff,
  // Grade 1 vocab
  Grid3X3, SearchX, ChevronLeft, BarChart2, LineChart,
  // Grade 2 vocab
  Plus, Minus, Sigma, ArrowLeftRight, Equal,
  Columns2, LayoutList, Users, Scale,
  Circle, Square, Triangle, RectangleHorizontal, Ruler,
  Hexagon, Clock, Sun, Moon,
  // Grade 3 vocab
  X, Layers, Package, Divide, Slash, Percent, Share2, ArrowUp, ArrowDown, LayoutGrid, Frame, CircleDot,
  // Grade 4 vocab
  Calculator, RefreshCw, Target, Minimize2, Milestone, Dot, ChevronsRight, Move, MoveHorizontal,
  // Grade 5 vocab
  Box, Code2, Code, ListOrdered, Crosshair, ArrowRight, MapPin, AlignJustify, CheckCircle, RotateCw, Move3d,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const vocabIconMap: Record<string, LucideIcon> = {
  // ── Kindergarten ──────────────────────────────────────────────
  // K.2C — Counting
  count:      Hash,
  number:     Hash,
  "how-many": CircleHelp,
  zero:       CircleOff,
  // K.2H — More / Less / Equal
  more:       TrendingUp,
  less:       TrendingDown,
  fair:       Scale,
  // K.3A — Join / Separate
  join:       PlusCircle,
  separate:   Scissors,
  "in-all":   Sigma,
  left:       ArrowLeft,
  // K.6A — 2D Shapes
  corner:     CornerRightDown,

  // ── Grade 1 ────────────────────────────────────────────────────
  // 1.3B — Add & Subtract
  altogether: Sigma,
  // 1.3C — Ten Frames
  "ten-frame":  Grid3X3,
  addend:       Plus,
  missing:      SearchX,
  decompose:    Scissors,
  // 1.2G — Compare Numbers
  "greater-than": ChevronRight,
  "less-than":    ChevronLeft,
  "equal-to":     Equal,
  compare:        Scale,
  // 1.8A — Data
  data:  BarChart2,
  tally: Hash,
  graph: LineChart,
  most:  TrendingUp,
  least: TrendingDown,

  // ── Grade 2 ────────────────────────────────────────────────────
  // 2.4A — Adding & Subtracting
  add:        Plus,
  subtract:   Minus,
  sum:        Sigma,
  difference: ArrowLeftRight,
  equals:     Equal,
  // 2.7A — Even & Odd
  even:      Columns2,
  odd:       LayoutList,
  pairs:     Users,
  equal:     Scale,
  // 2.8A — 2D Shapes
  circle:    Circle,
  square:    Square,
  triangle:  Triangle,
  rectangle: RectangleHorizontal,
  sides:     Ruler,

  // ── Grade 3 ────────────────────────────────────────────────────
  // 3.4F — Multiplication
  multiply:       X,
  factor:         Layers,
  product:        Package,
  array:          Grid3X3,
  "equal-groups": LayoutGrid,
  // 3.4K — Division
  divide:       Divide,
  dividend:     CircleDot,
  divisor:      Slash,
  quotient:     Percent,
  "fair-share": Share2,
  // 3.3A — Fractions
  fraction:    Slash,
  numerator:   ArrowUp,
  denominator: ArrowDown,
  whole:       Circle,
  equivalent:  Equal,
  // 3.6C — Area
  area:          Frame,
  "square-unit": LayoutGrid,
  length:        MoveHorizontal,
  width:         MoveHorizontal,
  formula:       Calculator,

  // ── Grade 2 new units ──────────────────────────────────────────
  // 2.4C — Word Problems
  hundred:   Hash,
  equation:  Equal,
  strategy:  Target,
  // 2.6A — Equal Groups
  group:       Users,
  "in-each":   ChevronRight,
  "skip-count": ChevronsRight,
  total:       Sigma,
  // 2.2B — Place Value to 1,200
  digit:          Hash,
  "expanded-form": Columns2,
  "standard-form": Hash,
  // 2.3B — Fractions
  half:    Slash,
  fourth:  Divide,
  eighth:  Grid3X3,
  // 2.4D — Number Sentences
  "number-sentence": Equal,
  unknown:   CircleHelp,
  operation: Plus,
  solve:     CheckCircle,
  // 2.8B — 3D Solids
  sphere:   Circle,
  cone:     Triangle,
  cylinder: Columns2,
  prism:    Box,
  face:     Square,
  // 2.8C — Classify Polygons
  polygon:       Hexagon,
  vertex:        Dot,
  side:          Ruler,
  quadrilateral: Square,
  // 2.9E — Estimating Length
  inch:        Ruler,
  centimeter:  Ruler,
  // 2.9G — Telling Time
  "hour-hand":   Clock,
  "minute-hand": Clock,
  "a.m.":        Sun,
  "p.m.":        Moon,
  "elapsed-time": Timer,
  // 2.10C — Bar Graphs & Pictographs
  "bar-graph":  BarChart2,
  pictograph:   LayoutGrid,
  key:          Target,
  scale:        Scale,

  // ── Grade 4 ────────────────────────────────────────────────────
  // 4.4D — Multi-digit Multiplication
  "partial-product": Layers,
  regroup:           RefreshCw,
  estimate:          Target,
  // 4.3E — Fractions
  "like-denominators": Equal,
  simplify:            Minimize2,
  benchmark:           Milestone,
  // 4.2E — Decimals
  decimal:            Dot,
  tenths:             ChevronRight,
  hundredths:         ChevronsRight,
  "compare-decimals": Scale,
  // 4.5D — Perimeter & Area
  perimeter:           Frame,
  "perimeter-formula": Calculator,
  "area-formula":      Calculator,
  dimension:           Move,

  // ── Grade 5 ────────────────────────────────────────────────────
  // 5.3E — Decimal Multiplication
  "decimal-product": Hash,
  "place-value":     AlignJustify,
  round:             RotateCw,
  reasonable:        CheckCircle,
  // 5.6A — Volume
  volume:                Box,
  "cubic-unit":          Box,
  "length-width-height": Move3d,
  "rectangular-prism":   Box,
  // 5.4E — Order of Operations
  expression:     Code2,
  parentheses:    Code,
  "order-of-ops": ListOrdered,
  evaluate:       Calculator,
  // 5.8A — Coordinate Plane
  "coordinate-plane": Crosshair,
  "x-axis":           ArrowRight,
  "y-axis":           ArrowUp,
  "ordered-pair":     MapPin,
  origin:             Target,
};
import { TeksUnit, ExerciseQuestion, Fluency, WordProblem } from "@/data/types";
import { useLanguage } from "./LanguageContext";

type Tab = "vocab" | "lesson" | "exercises" | "apply" | "quiz" | "story" | "fluency";

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "vocab",     label: "Vocabulary",  icon: BookOpen       },
  { id: "lesson",    label: "Lesson",       icon: GraduationCap  },
  { id: "exercises", label: "Exercises",    icon: PencilLine     },
  { id: "apply",     label: "Apply",        icon: Target         },
  { id: "quiz",      label: "Exit Ticket",  icon: ClipboardCheck },
  { id: "story",     label: "Story",        icon: BookMarked     },
  { id: "fluency",   label: "Fluency",      icon: Zap            },
];

function WordProblemDrill({ problems, lang }: { problems: WordProblem[]; lang: string | null }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [current, setCurrent] = useState(0);

  const problem = problems[current];
  const userAnswer = answers[problem.id] ?? "";
  const isChecked = checked[problem.id] ?? false;
  const isCorrect = isChecked && parseInt(userAnswer) === problem.answer;
  const score = problems.filter(p => checked[p.id] && parseInt(answers[p.id] ?? "") === p.answer).length;

  function handleCheck() {
    setChecked(prev => ({ ...prev, [problem.id]: true }));
  }

  function handleNext() {
    if (current < problems.length - 1) setCurrent(current + 1);
  }

  const promptText = lang === "es" ? problem.prompt.es : lang === "ur" ? problem.prompt.ur : problem.prompt.en;
  const unitText = lang === "es" ? problem.answerUnit.es : lang === "ur" ? problem.answerUnit.ur : problem.answerUnit.en;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-gray-400">Problem {current + 1} of {problems.length}</span>
        <span className="text-sm font-bold text-primary">🌍 {score} / {problems.length} solved</span>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 text-center">
          <div className="text-5xl mb-2">{problem.emoji}</div>
          <p className="text-xs font-semibold text-emerald-700 italic">{problem.scene}</p>
        </div>

        <div className="p-6">
          <p className="text-gray-800 font-bold text-base leading-relaxed mb-5">{promptText}</p>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-gray-500 font-semibold text-sm">Answer:</span>
            <input
              type="number"
              value={userAnswer}
              onChange={e => setAnswers(prev => ({ ...prev, [problem.id]: e.target.value }))}
              disabled={isChecked}
              onKeyDown={e => { if (e.key === "Enter" && !isChecked && userAnswer) handleCheck(); }}
              className="w-24 border-2 border-gray-200 rounded-xl px-3 py-2 text-center font-bold text-lg focus:border-primary focus:outline-none disabled:bg-gray-50"
              placeholder="?"
            />
            <span className="text-gray-400 text-sm">{unitText}</span>
          </div>

          {isChecked && (
            <div className={`mt-4 p-3 rounded-xl text-center font-bold text-sm ${isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
              {isCorrect
                ? "🌟 Correct! Great work helping the planet!"
                : `Not quite — the answer is ${problem.answer} ${problem.answerUnit.en}. Keep going! 💚`}
            </div>
          )}

          <div className="flex gap-3 mt-5">
            {!isChecked ? (
              <button
                onClick={handleCheck}
                disabled={!userAnswer}
                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            ) : current < problems.length - 1 ? (
              <button onClick={handleNext} className="flex-1 bg-primary text-white font-bold py-3 rounded-xl cursor-pointer">
                Next Problem →
              </button>
            ) : (
              <div className="flex-1 bg-primary-light text-primary font-bold py-3 rounded-xl text-center text-sm">
                🌍 Amazing! You solved all {problems.length} word problems!
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {problems.map((p, i) => {
          const done = checked[p.id];
          const correct = done && parseInt(answers[p.id] ?? "") === p.answer;
          return (
            <button
              key={p.id}
              onClick={() => setCurrent(i)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all cursor-pointer ${
                i === current ? "bg-primary text-white scale-110" :
                correct ? "bg-emerald-100 text-emerald-700" :
                done ? "bg-red-100 text-red-500" :
                "bg-gray-100 text-gray-400"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function getLang(text: { en: string; es: string; ur: string }, lang: string | null) {
  if (lang === "es") return text.es;
  if (lang === "ur") return text.ur;
  return text.en;
}

export default function UnitTabs({ unit }: { unit: TeksUnit }) {
  const [activeTab, setActiveTab] = useState<Tab>("vocab");
  const { language } = useLanguage();

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1.5 mb-8 bg-white rounded-2xl p-2 shadow-sm overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[72px] py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex flex-col items-center gap-1 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-400 hover:text-primary"
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Vocabulary */}
      {activeTab === "vocab" && (
        <div className="flex flex-col gap-4">
          {unit.vocabulary.map((word) => {
            const VocabIcon = vocabIconMap[word.id];
            return (
            <div key={word.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="bg-primary-light rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
                {VocabIcon
                  ? <VocabIcon size={28} className="text-primary" />
                  : <span className="text-3xl">{word.emoji}</span>
                }
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xl font-black text-gray-800">{word.word.en}</span>
                  <span className="text-primary font-bold text-lg">
                    {getLang(word.word, language)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{word.definition.en}</p>
                <p className="font-semibold text-sm mt-1" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                  {getLang(word.definition, language)}
                </p>
              </div>
            </div>
            );
          })}
          <button
            onClick={() => setActiveTab("lesson")}
            className="mt-4 w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <GraduationCap size={20} /> Next: Lesson
          </button>
        </div>
      )}

      {/* Lesson */}
      {activeTab === "lesson" && (
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-black text-gray-700 mb-3 flex items-center gap-2">🇺🇸 English</h3>
            <p className="text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: unit.lesson.en.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
            />
          </div>
          <div className="bg-primary-light rounded-2xl p-6 shadow-sm">
            <h3 className="font-black text-primary mb-3 flex items-center gap-2">
              {language === "ur" ? "🇵🇰 اردو" : "🇲🇽 Español"}
            </h3>
            <p
              className="text-gray-700 leading-relaxed text-lg font-semibold"
              style={{ direction: language === "ur" ? "rtl" : "ltr" }}
              dangerouslySetInnerHTML={{
                __html: getLang(unit.lesson, language).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </div>
          <button
            onClick={() => setActiveTab("exercises")}
            className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer"
          >
            Next: Exercises ✏️
          </button>
        </div>
      )}

      {/* Exercises */}
      {activeTab === "exercises" && (
        <QuestionSet
          questions={unit.exercises}
          language={language}
          onComplete={() => setActiveTab(unit.wordProblems?.length ? "apply" : "quiz")}
          completeLabel={unit.wordProblems?.length ? "Ready to apply your skills?" : "Ready for the Exit Ticket?"}
          isQuiz={false}
        />
      )}

      {/* Apply — Word Problems */}
      {activeTab === "apply" && (
        <div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <p className="font-black text-emerald-800 text-sm">Time to apply your skills!</p>
              <p className="text-emerald-700 text-xs mt-0.5">You practiced the basics — now use math to help the planet. Read each story carefully and solve!</p>
            </div>
          </div>
          {unit.wordProblems && unit.wordProblems.length > 0 ? (
            <WordProblemDrill problems={unit.wordProblems} lang={language} />
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
              <Target size={40} className="text-primary mx-auto mb-3" />
              <p className="text-gray-500 font-semibold">Word problems coming soon for this topic!</p>
            </div>
          )}
        </div>
      )}

      {/* Quiz */}
      {activeTab === "quiz" && (
        <div className="flex flex-col gap-6">
          <QuestionSet
            questions={unit.quiz}
            language={language}
            onComplete={() => {}}
            completeLabel=""
            isQuiz={true}
          />
          {unit.story && (
            <button
              onClick={() => setActiveTab("story")}
              className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer"
            >
              <BookMarked size={18} className="inline mr-1" /> Next: Story
            </button>
          )}
        </div>
      )}

      {/* Story */}
      {activeTab === "story" && (
        <div className="flex flex-col gap-6">
          {!unit.story ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
              <BookMarked size={40} className="text-primary mx-auto mb-3" />
              <p className="text-gray-500 font-semibold">Story coming soon for this topic!</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-black text-gray-800 text-center">
                {unit.story.title.en}
                <span className="block text-primary text-lg mt-1" dir={language === "ur" ? "rtl" : "ltr"}>
                  {getLang(unit.story.title, language)}
                </span>
              </h3>
              {unit.story.pages.map((page, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-5xl text-center mb-4">{page.emoji}</div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-3">{page.text.en}</p>
                  <p
                    className="text-primary leading-relaxed text-lg font-semibold pt-3 border-t border-gray-100"
                    style={{ direction: language === "ur" ? "rtl" : "ltr" }}
                  >
                    {getLang(page.text, language)}
                  </p>
                </div>
              ))}
              {unit.fluency && (
                <button
                  onClick={() => setActiveTab("fluency")}
                  className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer"
                >
                  <Zap size={18} className="inline mr-1" /> Next: Fluency
                </button>
              )}
            </>
          )}
        </div>
      )}

      {/* Fluency */}
      {activeTab === "fluency" && (
        <div className="flex flex-col gap-6">
          {!unit.fluency ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
              <Zap size={40} className="text-primary mx-auto mb-3" />
              <p className="text-gray-500 font-semibold">Fluency practice coming soon for this topic!</p>
            </div>
          ) : (
            <FluencyDrill fluency={unit.fluency} language={language} />
          )}
        </div>
      )}
    </div>
  );
}

function RecyclingAnimation({ onContinue }: { onContinue: () => void }) {
  useEffect(() => {
    const t = setTimeout(onContinue, 4500);
    return () => clearTimeout(t);
  }, [onContinue]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#f4faf6] rounded-3xl py-10 px-6 text-center border border-green-100">
      <style>{`
        .recycle-bottle { transform-origin: 50px 30px; animation: dropBottle 3.5s cubic-bezier(0.55,0.055,0.675,0.19) infinite; }
        .recycle-bin-group { transform-origin: 50px 85px; animation: bounceBin 3.5s cubic-bezier(0.175,0.885,0.32,1.275) infinite; }
        .magic-sparkle { transform-origin: 50px 55px; opacity: 0; animation: sparkleBurst 3.5s ease-out infinite; }
        .sparkle-left { animation-delay: 0s; }
        .sparkle-right { animation-delay: 0.05s; }
        @keyframes dropBottle {
          0%        { transform: translateY(-50px) rotate(-15deg); opacity: 0; }
          5%        { opacity: 1; }
          22%       { transform: translateY(22px) rotate(5deg); opacity: 1; }
          23%, 100% { transform: translateY(25px) rotate(5deg); opacity: 0; }
        }
        @keyframes bounceBin {
          0%, 20%   { transform: scale(1); }
          22%       { transform: scale(1.15, 0.8); }
          28%       { transform: scale(0.9, 1.12); }
          35%       { transform: scale(1.05, 0.95); }
          42%, 100% { transform: scale(1); }
        }
        @keyframes sparkleBurst {
          0%, 21% { opacity: 0; transform: scale(0.3) translate(0, 0); }
          25%     { opacity: 1; }
          40%     { opacity: 0; transform: scale(1.1) translate(var(--tx), var(--ty)); }
          100%    { opacity: 0; }
        }
      `}</style>

      <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="recycle-bottle">
          <rect x="47" y="12" width="6" height="4" rx="1" fill="#64b5f6"/>
          <path d="M46 16 H54 L55 22 H45 Z" fill="#bbdefb"/>
          <path d="M44 22 C44 22 42 25 42 28 L43 45 C43 47 45 49 47 49 H53 C55 49 57 47 57 45 L58 28 C58 25 56 22 56 22 Z" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5"/>
          <rect x="43.5" y="30" width="13" height="8" fill="#4fc3f7" rx="1"/>
        </g>
        <path className="magic-sparkle sparkle-left"
          style={{ "--tx": "-20px", "--ty": "-15px" } as React.CSSProperties}
          d="M25 45 L26.5 48.5 L30 48.5 L27 50.5 L28.5 54 L25 52 L21.5 54 L23 50.5 L20 48.5 L23.5 48.5 Z"
          fill="#ffd54f"/>
        <path className="magic-sparkle sparkle-right"
          style={{ "--tx": "20px", "--ty": "-18px" } as React.CSSProperties}
          d="M75 42 L76.5 45.5 L80 45.5 L77 47.5 L78.5 51 L75 49 L71.5 51 L73 47.5 L70 45.5 L73.5 45.5 Z"
          fill="#ffd54f"/>
        <g className="recycle-bin-group">
          <path d="M33 56 L37 86 C37 88 39 90 41 90 H59 C61 90 63 88 63 86 L67 56 Z" fill="#4caf50"/>
          <rect x="30" y="52" width="40" height="6" rx="3" fill="#388e3c"/>
          <g transform="translate(43, 64) scale(0.7)" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2 L18 14 H2 Z"/>
            <path d="M5 9 L15 9"/>
          </g>
        </g>
      </svg>

      <p className="mt-4 text-emerald-700 font-black text-xl">Keep it green! ♻️</p>
      <p className="text-emerald-600 text-sm mt-1 mb-6">You&apos;re doing great — keep going!</p>
      <button
        onClick={onContinue}
        className="bg-primary text-white font-bold px-8 py-3 rounded-2xl cursor-pointer text-base"
      >
        Continue →
      </button>
    </div>
  );
}

function QuestionSet({
  questions,
  language,
  onComplete,
  completeLabel,
  isQuiz,
}: {
  questions: ExerciseQuestion[];
  language: string | null;
  onComplete: () => void;
  completeLabel: string;
  isQuiz: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const score = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  // Current question state (used in exercise mode)
  const currentQ = questions[current];
  const chosen = answers[currentQ?.id];
  const isAnswered = chosen !== undefined;
  const isCorrect = isAnswered && chosen === currentQ?.correctIndex;

  // ── Exercise mode: one question at a time ──────────────────────────
  if (!isQuiz) {
    if (showAnimation) {
      return (
        <RecyclingAnimation
          onContinue={() => { setShowAnimation(false); setCurrent(2); }}
        />
      );
    }

    return (
      <div className="flex flex-col gap-5">
        {/* Progress header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-gray-400">
            Question {current + 1} of {questions.length}
          </span>
          <span className="text-sm font-bold text-primary">✅ {score} correct</span>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="font-black text-gray-800 text-lg mb-1">
            {current + 1}. {currentQ.prompt.en}
          </p>
          {language && (
            <p className="text-primary font-semibold text-sm mb-4"
              style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
              {getLang(currentQ.prompt, language)}
            </p>
          )}
          <div className="flex flex-col gap-2">
            {currentQ.choices.map((choice, idx) => {
              let bg = "bg-gray-50 border-gray-200 text-gray-700";
              if (isAnswered) {
                if (idx === currentQ.correctIndex) bg = "bg-success/10 border-success text-success font-bold";
                else if (idx === chosen) bg = "bg-danger/10 border-danger text-danger";
              } else if (idx === chosen) {
                bg = "bg-primary-light border-primary text-primary font-bold";
              }
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (isAnswered) return;
                    setAnswers(prev => ({ ...prev, [currentQ.id]: idx }));
                  }}
                  className={`text-left px-4 py-3 rounded-xl border-2 font-semibold transition-all cursor-pointer ${bg}`}
                >
                  {choice.en}
                  {language && choice.en !== getLang(choice, language) && (
                    <span className="ml-2 text-sm opacity-70">· {getLang(choice, language)}</span>
                  )}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className={`mt-4 p-3 rounded-xl text-center font-bold text-sm ${isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
              {isCorrect ? "🌟 Correct! Great job!" : "The correct answer is highlighted above. 💚 Keep going!"}
            </div>
          )}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 flex-wrap">
          {questions.map((item, i) => {
            const done = answers[item.id] !== undefined;
            const correct = done && answers[item.id] === item.correctIndex;
            return (
              <div key={item.id} className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" :
                correct       ? "w-2.5 bg-emerald-400" :
                done          ? "w-2.5 bg-red-300" :
                                "w-2.5 bg-gray-200"
              }`} />
            );
          })}
        </div>

        {/* Advance to next question */}
        {isAnswered && current < questions.length - 1 && (
          <button
            onClick={() => {
              if (current === 1) {
                setShowAnimation(true);
              } else {
                setCurrent(c => c + 1);
              }
            }}
            className="w-full bg-primary text-white font-bold py-4 rounded-2xl cursor-pointer text-lg"
          >
            Next Question →
          </button>
        )}

        {/* Complete all exercises */}
        {isAnswered && current === questions.length - 1 && (
          <button
            onClick={onComplete}
            className="w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer"
          >
            {completeLabel}
          </button>
        )}
      </div>
    );
  }

  // ── Quiz mode: all questions visible, submit at end ────────────────
  return (
    <div className="flex flex-col gap-6">
      {questions.map((q, qi) => {
        const qChosen = answers[q.id];
        const showResult = submitted;
        return (
          <div key={q.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <p className="font-black text-gray-800 text-lg mb-1">
              {qi + 1}. {q.prompt.en}
            </p>
            {language && (
              <p className="text-primary font-semibold text-sm mb-4"
                style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
                {getLang(q.prompt, language)}
              </p>
            )}
            <div className="flex flex-col gap-2">
              {q.choices.map((choice, idx) => {
                let bg = "bg-gray-50 border-gray-200 text-gray-700";
                if (showResult) {
                  if (idx === q.correctIndex) bg = "bg-success/10 border-success text-success font-bold";
                  else if (idx === qChosen) bg = "bg-danger/10 border-danger text-danger";
                } else if (idx === qChosen) {
                  bg = "bg-primary-light border-primary text-primary font-bold";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (submitted) return;
                      setAnswers(prev => ({ ...prev, [q.id]: idx }));
                    }}
                    className={`text-left px-4 py-3 rounded-xl border-2 font-semibold transition-all cursor-pointer ${bg}`}
                  >
                    {choice.en}
                    {language && choice.en !== getLang(choice, language) && (
                      <span className="ml-2 text-sm opacity-70">· {getLang(choice, language)}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {!submitted && allAnswered && (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full bg-accent text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-colors text-lg cursor-pointer flex items-center justify-center gap-2"
        >
          <ClipboardCheck size={20} /> Submit Exit Ticket
        </button>
      )}

      {submitted && (
        <div className="bg-primary-light rounded-2xl p-6 text-center">
          <div className="flex justify-center mb-2">
            {score === questions.length
              ? <Star size={44} className="text-accent fill-accent" />
              : score >= questions.length / 2
              ? <ThumbsUp size={44} className="text-primary" />
              : <Dumbbell size={44} className="text-primary" />}
          </div>
          <p className="text-2xl font-black text-primary">
            {score} / {questions.length} correct
          </p>
          <p className="text-gray-500 mt-1">
            {score === questions.length ? "Perfect score!" : "Keep practicing!"}
          </p>
        </div>
      )}
    </div>
  );
}

type FluencyStatus = "idle" | "running" | "done";

function FluencyDrill({ fluency, language }: { fluency: Fluency; language: string | null }) {
  const [status, setStatus] = useState<FluencyStatus>("idle");
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(fluency.timeLimitSeconds);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status !== "running") return;
    if (timeLeft <= 0) {
      setStatus("done");
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [status, timeLeft]);

  useEffect(() => {
    if (status === "running") inputRef.current?.focus();
  }, [status, index]);

  function start() {
    setStatus("running");
    setIndex(0);
    setCorrectCount(0);
    setInput("");
    setTimeLeft(fluency.timeLimitSeconds);
  }

  function submit() {
    if (input.trim() === "") return;
    if (Number(input) === fluency.problems[index].answer) {
      setCorrectCount((c) => c + 1);
    }
    setInput("");
    if (index + 1 >= fluency.problems.length) {
      setStatus("done");
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (status === "idle") {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
        <Zap size={44} className="text-primary mx-auto mb-4" />
        <p className="text-gray-700 font-semibold text-lg mb-1">{fluency.instructions.en}</p>
        {language && (
          <p className="text-primary font-semibold mb-6" style={{ direction: language === "ur" ? "rtl" : "ltr" }}>
            {getLang(fluency.instructions, language)}
          </p>
        )}
        <button
          onClick={start}
          className="bg-accent text-white font-bold py-4 px-10 rounded-2xl hover:opacity-90 transition-colors text-lg cursor-pointer flex items-center gap-2 mx-auto"
        >
          <Timer size={20} /> Start — {fluency.timeLimitSeconds}s
        </button>
      </div>
    );
  }

  if (status === "running") {
    const problem = fluency.problems[index];
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6 text-sm font-bold">
          <span className="text-gray-400">
            {index + 1} / {fluency.problems.length}
          </span>
          <span className={`flex items-center gap-1 ${timeLeft <= 10 ? "text-danger" : "text-primary"}`}>
            <Timer size={14} /> {timeLeft}s
          </span>
        </div>
        <p className="text-5xl font-black text-gray-800 mb-6">{problem.prompt} = ?</p>
        <input
          ref={inputRef}
          type="number"
          inputMode="numeric"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className="w-32 text-center text-3xl font-black border-2 border-primary rounded-xl py-3 mb-4"
        />
        <button
          onClick={submit}
          className="block w-full bg-primary text-white font-bold py-3 rounded-2xl hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Submit
        </button>
      </div>
    );
  }

  return (
    <div className="bg-primary-light rounded-2xl p-8 text-center">
      <div className="flex justify-center mb-2">
        {correctCount === fluency.problems.length
          ? <Star size={44} className="text-accent fill-accent" />
          : correctCount >= fluency.problems.length / 2
          ? <ThumbsUp size={44} className="text-primary" />
          : <Dumbbell size={44} className="text-primary" />}
      </div>
      <p className="text-2xl font-black text-primary">{correctCount} correct</p>
      <p className="text-gray-500 mt-1">in {fluency.timeLimitSeconds - timeLeft} seconds</p>
      <button
        onClick={start}
        className="mt-6 bg-primary text-white font-bold py-3 px-8 rounded-2xl hover:bg-primary-dark transition-colors cursor-pointer flex items-center gap-2 mx-auto"
      >
        <Zap size={16} /> Try Again
      </button>
    </div>
  );
}
