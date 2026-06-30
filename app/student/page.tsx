"use client";

import { useRouter } from "next/navigation";
import { Flower2, Sprout, Leaf, Waves, TreePine, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import NavBar from "@/components/NavBar";

const grades: { grade: string; label: string; icon: LucideIcon; color: string }[] = [
  { grade: "K", label: "Kindergarten", icon: Flower2,  color: "#D97706" },
  { grade: "1", label: "Grade 1",      icon: Sprout,   color: "#059669" },
  { grade: "2", label: "Grade 2",      icon: Leaf,     color: "#065F46" },
  { grade: "3", label: "Grade 3",      icon: Waves,    color: "#0D9488" },
  { grade: "4", label: "Grade 4",      icon: TreePine, color: "#166534" },
  { grade: "5", label: "Grade 5",      icon: Sun,      color: "#047857" },
];

export default function StudentPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2 flex items-center gap-2">
          <Leaf size={32} className="text-primary" /> Pick Your Grade
        </h1>
        <p className="text-gray-500 font-semibold mb-10">Which grade are you in?</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {grades.map((g) => {
            const Icon = g.icon;
            return (
              <button
                key={g.grade}
                onClick={() => router.push(`/student/${g.grade}`)}
                className="rounded-3xl p-8 text-center shadow-md hover:scale-105 transition-transform cursor-pointer text-white font-black"
                style={{ backgroundColor: g.color }}
              >
                <Icon size={48} className="mx-auto mb-3" />
                <div className="text-xl">{g.label}</div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
