"use client";

import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";

const grades = [
  { grade: "K", label: "Kindergarten", emoji: "🌻", color: "#F59E0B" },
  { grade: "1", label: "Grade 1", emoji: "🌱", color: "#22C55E" },
  { grade: "2", label: "Grade 2", emoji: "🌿", color: "#059669" },
  { grade: "3", label: "Grade 3", emoji: "🌊", color: "#0EA5E9" },
  { grade: "4", label: "Grade 4", emoji: "🌍", color: "#0891B2" },
  { grade: "5", label: "Grade 5", emoji: "☀️", color: "#047857" },
];

export default function StudentPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2">Pick Your Grade</h1>
        <p className="text-gray-500 font-semibold mb-10">Which grade are you in?</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {grades.map((g) => (
            <button
              key={g.grade}
              onClick={() => router.push(`/student/${g.grade}`)}
              className="rounded-3xl p-8 text-center shadow-md hover:scale-105 transition-transform cursor-pointer text-white font-black"
              style={{ backgroundColor: g.color }}
            >
              <div className="text-5xl mb-3">{g.emoji}</div>
              <div className="text-xl">{g.label}</div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
