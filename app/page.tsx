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
        backgroundImage: "url('/kashmir.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.22)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1
            className="text-6xl font-black mb-0"
            style={{ color: "#ffffff", textShadow: "0 2px 16px rgba(4,120,87,0.7), 0 1px 4px rgba(0,0,0,0.4)" }}
          >
            OurMathWorld
          </h1>
        </div>

        <p className="text-center font-bold text-base mb-5" style={{ color: "#ffffff", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
          Choose your language pair to get started
        </p>

        <div className="w-full max-w-lg grid grid-cols-2 gap-5">

          {/* Spanish card */}
          <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-5 shadow-md text-center border border-white/40 hover:bg-white/75 transition-all">
            <h2 className="text-lg font-black mb-1" style={{ color: "#4ade80" }}>
              English + Spanish
            </h2>
            <p className="text-white/80 text-xs mb-4 font-semibold">Inglés + Español</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => choose("es", "student")}
                className="w-full bg-primary/80 text-white font-bold py-2 rounded-xl hover:bg-primary transition-colors text-sm cursor-pointer"
              >
                I&apos;m a Student
              </button>
              <button
                onClick={() => choose("es", "teacher")}
                className="w-full bg-white/50 border border-primary/60 font-bold py-2 rounded-xl hover:bg-white/70 transition-colors text-sm cursor-pointer"
                style={{ color: "#059669" }}
              >
                I&apos;m a Teacher
              </button>
            </div>
          </div>

          {/* Urdu card */}
          <div className="bg-white/65 backdrop-blur-sm rounded-2xl p-5 shadow-md text-center border border-white/40 hover:bg-white/75 transition-all">
            <h2 className="text-lg font-black mb-1" style={{ color: "#7dd3fc" }}>
              English + Urdu
            </h2>
            <p className="text-white/80 text-xs mb-4 font-semibold" dir="rtl">انگریزی + اردو</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => choose("ur", "student")}
                className="w-full bg-accent/80 text-white font-bold py-2 rounded-xl hover:bg-accent transition-colors text-sm cursor-pointer"
              >
                I&apos;m a Student
              </button>
              <button
                onClick={() => choose("ur", "teacher")}
                className="w-full bg-white/50 border border-accent/60 font-bold py-2 rounded-xl hover:bg-white/70 transition-colors text-sm cursor-pointer"
                style={{ color: "#0EA5E9" }}
              >
                I&apos;m a Teacher
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs mt-6 font-semibold" style={{ color: "rgba(255,255,255,0.8)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
          Your choice is saved — you won&apos;t need to pick again next time.
        </p>
      </div>
    </main>
  );
}
