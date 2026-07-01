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
import { TeksUnit, ExerciseQuestion, Fluency } from "@/data/types";
import { useLanguage } from "./LanguageContext";

type Tab = "vocab" | "lesson" | "exercises" | "quiz" | "story" | "fluency";

const tabs: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "vocab",     label: "Vocabulary",  icon: BookOpen       },
  { id: "lesson",    label: "Lesson",       icon: GraduationCap  },
  { id: "exercises", label: "Exercises",    icon: PencilLine     },
  { id: "quiz",      label: "Exit Ticket",  icon: ClipboardCheck },
  { id: "story",     label: "Story",        icon: BookMarked     },
  { id: "fluency",   label: "Fluency",      icon: Zap            },
];

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
          onComplete={() => setActiveTab("quiz")}
          completeLabel="Ready for the Exit Ticket?"
          isQuiz={false}
        />
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
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  function answer(qId: string, idx: number) {
    if (isQuiz && submitted) return;
    if (!isQuiz && answers[qId] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qId]: idx }));
  }

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const score = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  return (
    <div className="flex flex-col gap-6">
      {questions.map((q, qi) => {
        const chosen = answers[q.id];
        const showResult = !isQuiz ? chosen !== undefined : submitted;

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
                  else if (idx === chosen) bg = "bg-danger/10 border-danger text-danger";
                } else if (idx === chosen) {
                  bg = "bg-primary-light border-primary text-primary font-bold";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => answer(q.id, idx)}
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

      {isQuiz && !submitted && allAnswered && (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full bg-accent text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-colors text-lg cursor-pointer flex items-center justify-center gap-2"
        >
          <ClipboardCheck size={20} /> Submit Exit Ticket
        </button>
      )}

      {isQuiz && submitted && (
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

      {!isQuiz && allAnswered && completeLabel && (
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
