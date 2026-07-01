import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import {
  Hash, Scale, PlusCircle, Circle,
  Plus, Grid3X3, BarChart2,
  Sprout, TreePine, Leaf,
  X, Divide, Slash, Frame,
  Layers, Equal, Dot, Move,
  Box, ListOrdered, Crosshair,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import grade2 from "@/data/grade2";
import grade1 from "@/data/grade1";
import grade3 from "@/data/grade3";
import grade4 from "@/data/grade4";
import grade5 from "@/data/grade5";
import kindergarten from "@/data/kindergarten";
import { Grade } from "@/data/types";
import UnitTabs from "@/components/UnitTabs";

const teksIconMap: Record<string, LucideIcon> = {
  // Kindergarten
  "K.2C": Hash,
  "K.2H": Scale,
  "K.3A": PlusCircle,
  "K.6A": Circle,
  // Grade 1
  "1.3B": Plus,
  "1.3C": Grid3X3,
  "1.2G": Scale,
  "1.8A": BarChart2,
  // Grade 2
  "2.4A": Sprout,
  "2.7A": TreePine,
  "2.8A": Leaf,
  // Grade 3
  "3.4F": X,
  "3.4K": Divide,
  "3.3A": Slash,
  "3.6C": Frame,
  // Grade 4
  "4.4D": Layers,
  "4.3E": Equal,
  "4.2E": Dot,
  "4.5D": Move,
  // Grade 5
  "5.3E": Hash,
  "5.6A": Box,
  "5.4E": ListOrdered,
  "5.8A": Crosshair,
};

const gradeData: Record<string, Grade> = {
  K: kindergarten,
  "1": grade1,
  "2": grade2,
  "3": grade3,
  "4": grade4,
  "5": grade5,
};

export default async function UnitPage({
  params,
}: {
  params: Promise<{ grade: string; teks: string }>;
}) {
  const { grade, teks } = await params;
  const data = gradeData[grade];
  const unit = data?.units.find((u) => u.teks === teks);

  if (!unit) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-8 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-primary-light rounded-2xl p-4 flex-shrink-0 flex items-center justify-center">
            {(() => { const Icon = teksIconMap[unit.teks]; return Icon ? <Icon size={36} className="text-primary" /> : <span className="text-4xl">{unit.emoji}</span>; })()}
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-800">{unit.title.en}</h1>
            <p className="text-gray-400 text-sm font-semibold">
              {unit.teks} · {unit.cambridge}
            </p>
          </div>
        </div>
        <UnitTabs unit={unit} />
      </main>
    </div>
  );
}
