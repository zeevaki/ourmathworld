import NavBar from "@/components/NavBar";
import Link from "next/link";
import grade2 from "@/data/grade2";

export default function TeacherPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2">🍎 Teacher View</h1>
        <p className="text-gray-500 font-semibold mb-10">Browse by TEKS or Cambridge standard</p>

        <h2 className="text-xl font-black text-gray-700 mb-4">Grade 2</h2>
        <div className="flex flex-col gap-3">
          {grade2.units.map((unit) => (
            <Link
              key={unit.teks}
              href={`/student/2/${unit.teks}`}
              className="bg-white rounded-2xl px-6 py-5 shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all flex items-center gap-5"
            >
              <span className="text-3xl">{unit.emoji}</span>
              <div className="flex-1">
                <div className="font-black text-gray-800">{unit.title.en}</div>
                <div className="text-gray-400 text-sm">
                  {unit.vocabulary.length} words · {unit.exercises.length} exercises · {unit.quiz.length} quiz questions
                </div>
              </div>
              <div className="text-right text-xs text-gray-400 font-mono">
                <div className="font-bold text-primary">{unit.teks}</div>
                <div>{unit.cambridge}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-primary-light rounded-2xl p-6 text-center">
          <p className="text-gray-500 font-semibold">More grades coming soon. Want to help shape the content?</p>
          <Link href="/community" className="mt-3 inline-block bg-primary text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary-dark transition-colors">
            Share Feedback →
          </Link>
        </div>
      </main>
    </div>
  );
}
