"use client";

import { useRouter } from "next/navigation";
import { useLanguage, Language } from "@/components/LanguageContext";

export default function LandingPage() {
  const { setLanguage, setMode } = useLanguage();
  const router = useRouter();

  function choose(lang: Language, mode: "student" | "teacher") {
    setLanguage(lang);
    setMode(mode);
    router.push(mode === "student" ? "/student" : "/teacher");
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay so cards and text stay readable */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.45)" }} />

      {/* Content sits above the overlay */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-primary drop-shadow-sm mb-0">OurMathWorld</h1>
        </div>

        {/* Language + Mode selection */}
        <p className="text-center text-gray-700 font-bold text-lg mb-6 drop-shadow-sm">
          Choose your language pair to get started
        </p>

        <div className="w-full max-w-2xl grid grid-cols-2 gap-6">
          {/* Spanish card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center border-2 border-transparent hover:border-primary transition-all">
            <div className="text-5xl mb-4">🌿</div>
            <h2 className="text-2xl font-black text-primary mb-1">English + Spanish</h2>
            <p className="text-gray-400 text-sm mb-6">Inglés + Español</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => choose("es", "student")}
                className="w-full bg-primary text-white font-bold py-3 rounded-2xl hover:bg-primary-dark transition-colors text-lg cursor-pointer"
              >
                I&apos;m a Student
              </button>
              <button
                onClick={() => choose("es", "teacher")}
                className="w-full bg-white border-2 border-primary text-primary font-bold py-3 rounded-2xl hover:bg-primary-light transition-colors cursor-pointer"
              >
                I&apos;m a Teacher
              </button>
            </div>
          </div>

          {/* Urdu card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center border-2 border-transparent hover:border-accent transition-all">
            <div className="text-5xl mb-4">🌊</div>
            <h2 className="text-2xl font-black text-accent mb-1">English + Urdu</h2>
            <p className="text-gray-400 text-sm mb-6 font-semibold" dir="rtl">انگریزی + اردو</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => choose("ur", "student")}
                className="w-full bg-accent text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-colors text-lg cursor-pointer"
              >
                I&apos;m a Student
              </button>
              <button
                onClick={() => choose("ur", "teacher")}
                className="w-full bg-white border-2 border-accent text-accent font-bold py-3 rounded-2xl hover:bg-accent-light transition-colors cursor-pointer"
              >
                I&apos;m a Teacher
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-8 font-semibold drop-shadow-sm">
          Your choice is saved — you won&apos;t need to pick again next time.
        </p>
      </div>
    </main>
  );
}
