"use client";

import { use } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import grade2 from "@/data/grade2";
import grade1 from "@/data/grade1";
import grade3 from "@/data/grade3";
import grade4 from "@/data/grade4";
import kindergarten from "@/data/kindergarten";
import { Grade } from "@/data/types";
import { useLanguage } from "@/components/LanguageContext";

const gradeData: Record<string, Grade> = {
  K: kindergarten,
  "1": grade1,
  "2": grade2,
  "3": grade3,
  "4": grade4,
};

export default function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = use(params);
  const { language } = useLanguage();
  const data = gradeData[grade];

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
          {data.emoji} {data.label}
        </h1>
        <p className="text-gray-500 font-semibold mb-10">Pick a topic to learn</p>

        <div className="flex flex-col gap-4">
          {data.units.map((unit) => (
            <Link
              key={unit.teks}
              href={`/student/${grade}/${unit.teks}`}
              className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all flex items-center gap-5"
            >
              <span className="text-4xl">{unit.emoji}</span>
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
      </main>
    </div>
  );
}
