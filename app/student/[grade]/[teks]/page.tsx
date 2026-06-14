import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import grade2 from "@/data/grade2";
import kindergarten from "@/data/kindergarten";
import { Grade } from "@/data/types";
import UnitTabs from "@/components/UnitTabs";

const gradeData: Record<string, Grade> = {
  K: kindergarten,
  "2": grade2,
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
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl">{unit.emoji}</span>
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
