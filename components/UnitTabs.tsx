"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen, GraduationCap, PencilLine, ClipboardCheck, BookMarked, Zap,
  Target, ChevronLeft, ChevronRight, Star, ThumbsUp, Dumbbell, Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const vocabSymbolMap: Record<string, string> = {
  // ── Kindergarten ──────────────────────────────────────────────
  count: "123", number: "9", "how-many": "?", zero: "0",
  more: ">", less: "<", fair: "=",
  join: "+", separate: "−", "in-all": "Σ", left: "←",
  corner: "∟",
  // ── Grade 1 ────────────────────────────────────────────────────
  altogether: "+", "ten-frame": "10", addend: "+", missing: "?",
  decompose: "−", "greater-than": ">", "less-than": "<",
  "equal-to": "=", compare: "⇔",
  data: "📊", tally: "IIII", graph: "▊", most: "↑", least: "↓",
  // ── Grade 2 ────────────────────────────────────────────────────
  add: "+", subtract: "−", sum: "Σ", difference: "△", equals: "=",
  even: "2,4", odd: "1,3", pairs: "∥", equal: "=",
  circle: "○", square: "□", triangle: "△", rectangle: "▭", sides: "|||",
  hundred: "100", equation: "=", strategy: "💡",
  group: "{}", "in-each": "÷", "skip-count": "…", total: "Σ",
  "place-value": "PV", digit: "#", "expanded-form": "+", "standard-form": "123",
  fraction: "½", half: "½", fourth: "¼", eighth: "⅛", whole: "○",
  "number-sentence": "?=", unknown: "?", operation: "±", solve: "✓",
  sphere: "●", cone: "△", cylinder: "◎", prism: "□", face: "□",
  polygon: "⬡", vertex: "•", side: "—", quadrilateral: "▭",
  estimate: "≈", length: "↔", inch: "in", centimeter: "cm", benchmark: "|",
  "hour-hand": "h", "minute-hand": "m", "a.m.": "AM", "p.m.": "PM",
  "elapsed-time": "⏱",
  "bar-graph": "▊", pictograph: "📊", key: "K", scale: "↕",
  // ── Grade 3 ────────────────────────────────────────────────────
  multiply: "×", factor: "×", product: "=",
  array: "▦", "equal-groups": "○○",
  divide: "÷", dividend: "÷", divisor: "|", quotient: "=", "fair-share": "÷",
  numerator: "↑", denominator: "↓", equivalent: "=",
  area: "A=", "square-unit": "□²", width: "w", formula: "f=",
  // ── Grade 4 ────────────────────────────────────────────────────
  "partial-product": "×", regroup: "↑",
  "like-denominators": "=", simplify: "↓",
  decimal: ".", tenths: ".1", hundredths: ".01", "compare-decimals": "<>",
  perimeter: "P", "perimeter-formula": "P=", "area-formula": "A=", dimension: "×",
  // ── Grade 5 ────────────────────────────────────────────────────
  "decimal-product": ".×", round: "≈", reasonable: "✓",
  volume: "V=", "cubic-unit": "³", "length-width-height": "×",
  "rectangular-prism": "□",
  expression: "()", parentheses: "()", "order-of-ops": "÷×", evaluate: "=",
  "coordinate-plane": "xy", "x-axis": "x→", "y-axis": "y↑",
  "ordered-pair": "(,)", origin: "(0,0)",
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

  const promptText = lang === "es" ? problem.prompt.es : lang === "ur" ? problem.prompt.ur : null;
  const unitText = lang === "es" ? problem.answerUnit.es : lang === "ur" ? problem.answerUnit.ur : problem.answerUnit.en;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-gray-400">Problem {current + 1} of {problems.length}</span>
        <span className="text-sm font-bold text-primary">🌍 {score} / {problems.length} solved</span>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {problem.image ? (
          <img src={`/images/${problem.image}`} alt="" className="w-full object-cover max-h-56" />
        ) : (
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 text-center">
            <div className="text-5xl mb-2">{problem.emoji}</div>
            <p className="text-xs font-semibold text-emerald-700 italic">{problem.scene}</p>
          </div>
        )}

        <div className="p-6">
          <p className="text-gray-800 font-bold text-base leading-relaxed mb-1">{problem.prompt.en}</p>
          {promptText && (
            <p className="text-primary font-semibold text-sm mb-4" style={{ direction: lang === "ur" ? "rtl" : "ltr" }}>
              {promptText}
            </p>
          )}

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
            const sym = vocabSymbolMap[word.id] ?? word.emoji;
            const symSize = sym.length <= 1 ? "text-3xl" : sym.length <= 2 ? "text-2xl" : sym.length <= 4 ? "text-base" : "text-xs";
            return (
            <div key={word.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="bg-primary-light rounded-xl flex-shrink-0 flex items-center justify-center w-14 h-14">
                <span className={`text-primary font-black ${symSize} leading-none text-center`}>{sym}</span>
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
          {unit.lessonImage && (
            <img
              src={`/images/${unit.lessonImage}`}
              alt=""
              className="w-full rounded-2xl object-cover max-h-64 shadow-sm"
            />
          )}
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

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const score = questions.filter((q) => answers[q.id] === q.correctIndex).length;

  // Current question state (used in exercise mode)
  const currentQ = questions[current];
  const chosen = answers[currentQ?.id];
  const isAnswered = chosen !== undefined;
  const isCorrect = isAnswered && chosen === currentQ?.correctIndex;

  // ── Exercise mode: one question at a time with arrow navigation ───
  if (!isQuiz) {
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
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {currentQ.image && (
            <img
              src={`/images/${currentQ.image}`}
              alt=""
              className="w-full object-cover max-h-52"
            />
          )}
          <div className="p-5">
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
        </div>

        {/* Arrow navigation + progress dots */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrent(c => c - 1)}
            disabled={current === 0}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 disabled:opacity-30 hover:border-primary hover:text-primary transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex-1 flex justify-center gap-1.5 flex-wrap">
            {questions.map((item, i) => {
              const done = answers[item.id] !== undefined;
              const correct = done && answers[item.id] === item.correctIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-6 bg-primary" :
                    correct       ? "w-2.5 bg-emerald-400" :
                    done          ? "w-2.5 bg-red-300" :
                                    "w-2.5 bg-gray-200"
                  }`}
                />
              );
            })}
          </div>

          <button
            onClick={() => setCurrent(c => c + 1)}
            disabled={current === questions.length - 1}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 disabled:opacity-30 hover:border-primary hover:text-primary transition-all cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Complete — appears once all questions are answered */}
        {allAnswered && (
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
          <div key={q.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {q.image && (
              <img src={`/images/${q.image}`} alt="" className="w-full object-cover max-h-52" />
            )}
            <div className="p-5">
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
