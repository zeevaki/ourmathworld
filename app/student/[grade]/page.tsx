"use client";

import { use, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import grade2 from "@/data/grade2";
import grade1 from "@/data/grade1";
import grade3 from "@/data/grade3";
import grade4 from "@/data/grade4";
import grade5 from "@/data/grade5";
import kindergarten from "@/data/kindergarten";
import { Grade } from "@/data/types";
import { useLanguage } from "@/components/LanguageContext";
import NumbersDrill from "@/components/NumbersDrill";

const gradeData: Record<string, Grade> = {
  K: kindergarten,
  "1": grade1,
  "2": grade2,
  "3": grade3,
  "4": grade4,
  "5": grade5,
};

export default function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = use(params);
  const { language } = useLanguage();
  const data = gradeData[grade];
  const showNumbers = language === "es" && ["K", "1", "2", "3"].includes(grade);
  const [tab, setTab] = useState<"units" | "numbers">("units");

  function getTitle(unit: Grade["units"][0]) {
    if (language === "es") return unit.title.es;
    if (language === "ur") return unit.title.ur;
    return unit.title.en;
  }

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <NavBar />
        <main className="flex-1 flex items-center justify-center flex-col gap-4">
          <div className="text-6xl">🚧</div>
          <h1 className="text-3xl font-black text-gray-700">Coming Soon!</h1>
          <p className="text-gray-500">Grade {grade} content is being built. Check back soon!</p>
          <Link href="/student" className="mt-4 bg-primary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary-dark transition-colors">
            ← Back to Grades
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <Link href="/student" className="text-primary font-bold hover:underline mb-6 inline-block">
          ← All Grades
        </Link>
        <h1 className="text-4xl font-black text-gray-800 mb-2">
          {data.label}
        </h1>
        <p className="text-gray-500 font-semibold mb-6">Pick a topic to learn</p>

        {/* Numbers tab — Spanish only, K–3 */}
        {showNumbers && (
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100">
            <button
              onClick={() => setTab("units")}
              className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                tab === "units" ? "bg-primary text-white shadow-md" : "text-gray-400 hover:text-primary"
              }`}
            >
              📚 Topics
            </button>
            <button
              onClick={() => setTab("numbers")}
              className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                tab === "numbers" ? "bg-primary text-white shadow-md" : "text-gray-400 hover:text-primary"
              }`}
            >
              🔢 Numbers 1–50
            </button>
          </div>
        )}

        {showNumbers && tab === "numbers" && <NumbersDrill />}

        {tab === "units" && (
          <div className="flex flex-col gap-4">
            {data.units.map((unit) => (
              <Link
                key={unit.teks}
                href={`/student/${grade}/${unit.teks}`}
                className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all flex items-center gap-5"
              >
                <div className="flex-1">
                  <div className="font-black text-gray-800 text-lg">{unit.title.en}</div>
                  <div
                    className="text-primary text-sm font-semibold"
                    dir={language === "ur" ? "rtl" : "ltr"}
                  >
                    {getTitle(unit)}
                  </div>
                </div>
                <div className="text-right text-xs text-gray-400 font-mono">
                  <div>{unit.teks}</div>
                  <div>{unit.cambridge}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
