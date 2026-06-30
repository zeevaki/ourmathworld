"use client";

import { useState } from "react";
import { TeksUnit, ExerciseQuestion } from "@/data/types";
import { useLanguage } from "./LanguageContext";

type Tab = "vocab" | "lesson" | "exercises" | "quiz" | "story";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "vocab", label: "Vocabulary", emoji: "📖" },
  { id: "lesson", label: "Lesson", emoji: "🎓" },
  { id: "exercises", label: "Exercises", emoji: "✏️" },
  { id: "quiz", label: "Exit Ticket", emoji: "🎯" },
  { id: "story", label: "Story", emoji: "📚" },
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
      <div className="flex gap-2 mb-8 bg-white rounded-2xl p-2 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "text-gray-400 hover:text-primary"
            }`}
          >
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* Vocabulary */}
      {activeTab === "vocab" && (
        <div className="flex flex-col gap-4">
          {unit.vocabulary.map((word) => (
            <div key={word.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
              <span className="text-4xl">{word.emoji}</span>
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
          ))}
          <button
            onClick={() => setActiveTab("lesson")}
            className="mt-4 w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer"
          >
            Next: Lesson 🎓
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
          completeLabel="Ready for the Quiz? 🎯"
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
              Next: Story 📚
            </button>
          )}
        </div>
      )}

      {/* Story */}
      {activeTab === "story" && (
        <div className="flex flex-col gap-6">
          {!unit.story ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
              <div className="text-5xl mb-3">📚</div>
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
            </>
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
          className="w-full bg-accent text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-colors text-lg cursor-pointer"
        >
          Submit Quiz 🎯
        </button>
      )}

      {isQuiz && submitted && (
        <div className="bg-primary-light rounded-2xl p-6 text-center">
          <div className="text-5xl mb-2">{score === questions.length ? "🌟" : score >= questions.length / 2 ? "👍" : "💪"}</div>
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
