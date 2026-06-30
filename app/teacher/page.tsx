"use client";

import { useState } from "react";
import { Flower2, Sprout, Leaf, Waves, TreePine, Sun, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import grade2 from "@/data/grade2";
import grade1 from "@/data/grade1";
import grade3 from "@/data/grade3";
import grade4 from "@/data/grade4";
import grade5 from "@/data/grade5";
import kindergarten from "@/data/kindergarten";
import { Grade } from "@/data/types";

const grades: { id: string; label: string; icon: LucideIcon; color: string; data: Grade }[] = [
  { id: "K", label: "Kindergarten", icon: Flower2,  color: "#D97706", data: kindergarten },
  { id: "1", label: "Grade 1",      icon: Sprout,   color: "#059669", data: grade1 },
  { id: "2", label: "Grade 2",      icon: Leaf,     color: "#065F46", data: grade2 },
  { id: "3", label: "Grade 3",      icon: Waves,    color: "#0D9488", data: grade3 },
  { id: "4", label: "Grade 4",      icon: TreePine, color: "#166534", data: grade4 },
  { id: "5", label: "Grade 5",      icon: Sun,      color: "#047857", data: grade5 },
];

export default function TeacherPage() {
  const [activeGrade, setActiveGrade] = useState("2");
  const current = grades.find((g) => g.id === activeGrade)!;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2 flex items-center gap-2">
          <BookOpen size={32} className="text-primary" /> Teacher View
        </h1>
        <p className="text-gray-500 font-semibold mb-6">Browse by TEKS or Cambridge standard</p>

        {/* Grade tabs */}
        <div className="flex gap-2 mb-10 bg-white rounded-2xl p-2 shadow-sm overflow-x-auto">
          {grades.map((g) => {
            const Icon = g.icon;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGrade(g.id)}
                className={`flex-1 min-w-[80px] py-3 rounded-xl font-bold text-sm transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  activeGrade === g.id ? "text-white shadow-md" : "text-gray-400 hover:text-gray-600"
                }`}
                style={activeGrade === g.id ? { backgroundColor: g.color } : undefined}
              >
                <Icon size={20} />
                <span>{g.label.replace("Grade ", "G")}</span>
              </button>
            );
          })}
        </div>

        <h2 className="text-xl font-black text-gray-700 mb-4 flex items-center gap-2">
          {(() => { const Icon = current.icon; return <Icon size={22} className="text-primary" />; })()}
          {current.label}
        </h2>
        <div className="flex flex-col gap-3">
          {current.data.units.map((unit) => (
            <Link
              key={unit.teks}
              href={`/student/${current.id}/${unit.teks}`}
              className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all flex items-center gap-5"
            >
              <div className="flex-1">
                <div className="font-black text-gray-800">{unit.title.en}</div>
                <div className="text-gray-400 text-sm">
                  {unit.vocabulary.length} words · {unit.exercises.length} exercises · {unit.quiz.length} exit ticket questions
                  {unit.story ? " · story" : ""}
                </div>
              </div>
              <div className="text-right text-xs text-gray-400 font-mono">
                <div className="font-bold text-primary">{unit.teks}</div>
                <div>{unit.cambridge}</div>
              </div>
            </Link>
          ))}
          {current.data.units.length === 0 && (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100">
              <div className="text-4xl mb-3">🚧</div>
              <p className="text-gray-500 font-semibold">{current.label} content is being built. Check back soon!</p>
            </div>
          )}
        </div>

        <div className="mt-10 bg-primary-light rounded-2xl p-6 text-center">
          <p className="text-gray-500 font-semibold">More TEKS units coming soon. Want to help shape the content?</p>
          <Link href="/community" className="mt-3 inline-block bg-primary text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary-dark transition-colors">
            Share Feedback →
          </Link>
        </div>
      </main>
    </div>
  );
}
