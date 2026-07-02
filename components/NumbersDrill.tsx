"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";

const NUMBERS = [
  { n: 1,  en: "one",         es: "uno" },
  { n: 2,  en: "two",         es: "dos" },
  { n: 3,  en: "three",       es: "tres" },
  { n: 4,  en: "four",        es: "cuatro" },
  { n: 5,  en: "five",        es: "cinco" },
  { n: 6,  en: "six",         es: "seis" },
  { n: 7,  en: "seven",       es: "siete" },
  { n: 8,  en: "eight",       es: "ocho" },
  { n: 9,  en: "nine",        es: "nueve" },
  { n: 10, en: "ten",         es: "diez" },
  { n: 11, en: "eleven",      es: "once" },
  { n: 12, en: "twelve",      es: "doce" },
  { n: 13, en: "thirteen",    es: "trece" },
  { n: 14, en: "fourteen",    es: "catorce" },
  { n: 15, en: "fifteen",     es: "quince" },
  { n: 16, en: "sixteen",     es: "dieciséis" },
  { n: 17, en: "seventeen",   es: "diecisiete" },
  { n: 18, en: "eighteen",    es: "dieciocho" },
  { n: 19, en: "nineteen",    es: "diecinueve" },
  { n: 20, en: "twenty",      es: "veinte" },
  { n: 21, en: "twenty-one",  es: "veintiuno" },
  { n: 22, en: "twenty-two",  es: "veintidós" },
  { n: 23, en: "twenty-three",es: "veintitrés" },
  { n: 24, en: "twenty-four", es: "veinticuatro" },
  { n: 25, en: "twenty-five", es: "veinticinco" },
  { n: 26, en: "twenty-six",  es: "veintiséis" },
  { n: 27, en: "twenty-seven",es: "veintisiete" },
  { n: 28, en: "twenty-eight",es: "veintiocho" },
  { n: 29, en: "twenty-nine", es: "veintinueve" },
  { n: 30, en: "thirty",      es: "treinta" },
  { n: 31, en: "thirty-one",  es: "treinta y uno" },
  { n: 32, en: "thirty-two",  es: "treinta y dos" },
  { n: 33, en: "thirty-three",es: "treinta y tres" },
  { n: 34, en: "thirty-four", es: "treinta y cuatro" },
  { n: 35, en: "thirty-five", es: "treinta y cinco" },
  { n: 36, en: "thirty-six",  es: "treinta y seis" },
  { n: 37, en: "thirty-seven",es: "treinta y siete" },
  { n: 38, en: "thirty-eight",es: "treinta y ocho" },
  { n: 39, en: "thirty-nine", es: "treinta y nueve" },
  { n: 40, en: "forty",       es: "cuarenta" },
  { n: 41, en: "forty-one",   es: "cuarenta y uno" },
  { n: 42, en: "forty-two",   es: "cuarenta y dos" },
  { n: 43, en: "forty-three", es: "cuarenta y tres" },
  { n: 44, en: "forty-four",  es: "cuarenta y cuatro" },
  { n: 45, en: "forty-five",  es: "cuarenta y cinco" },
  { n: 46, en: "forty-six",   es: "cuarenta y seis" },
  { n: 47, en: "forty-seven", es: "cuarenta y siete" },
  { n: 48, en: "forty-eight", es: "cuarenta y ocho" },
  { n: 49, en: "forty-nine",  es: "cuarenta y nueve" },
  { n: 50, en: "fifty",       es: "cincuenta" },
];

function speak(word: string, lang: "en-US" | "es-MX") {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(word);
  utt.lang = lang;
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

export default function NumbersDrill() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<"en" | "es" | null>(null);

  const num = NUMBERS[index];
  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(49, i + 1));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleSpeak(lang: "en" | "es") {
    setActive(lang);
    speak(lang === "en" ? num.en : num.es, lang === "en" ? "en-US" : "es-MX");
    setTimeout(() => setActive(null), 700);
  }

  const progress = ((index + 1) / 50) * 100;

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Progress bar + counter */}
      <div className="w-full">
        <div className="flex justify-between text-xs font-bold text-gray-400 mb-1.5">
          <span>Numbers · Números</span>
          <span>{index + 1} / 50</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 w-full p-8 flex flex-col items-center gap-8">

        {/* Numeral */}
        <div className="text-[7rem] font-black text-gray-800 leading-none select-none">
          {num.n}
        </div>

        {/* English + Spanish tiles */}
        <div className="flex gap-4 w-full">

          {/* English tile */}
          <button
            onClick={() => handleSpeak("en")}
            className={`flex-1 flex flex-col items-center gap-3 py-6 px-4 rounded-2xl border-2 transition-all duration-150 cursor-pointer ${
              active === "en"
                ? "border-blue-400 bg-blue-50 scale-95 shadow-inner"
                : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            <span className="text-2xl">🇺🇸</span>
            <span className="text-3xl font-black text-gray-800 capitalize leading-none text-center">
              {num.en}
            </span>
            <Volume2
              size={18}
              className={active === "en" ? "text-blue-500" : "text-gray-300"}
            />
          </button>

          {/* Spanish tile */}
          <button
            onClick={() => handleSpeak("es")}
            className={`flex-1 flex flex-col items-center gap-3 py-6 px-4 rounded-2xl border-2 transition-all duration-150 cursor-pointer ${
              active === "es"
                ? "border-primary bg-primary-light scale-95 shadow-inner"
                : "border-primary/30 bg-primary-light/40 hover:border-primary hover:bg-primary-light"
            }`}
          >
            <span className="text-2xl">🇲🇽</span>
            <span className="text-3xl font-black text-primary capitalize leading-none text-center">
              {num.es}
            </span>
            <Volume2
              size={18}
              className={active === "es" ? "text-primary" : "text-primary/30"}
            />
          </button>
        </div>

        <p className="text-xs text-gray-400 font-semibold">
          Tap a word to hear it · Toca una palabra para escucharla
        </p>
      </div>

      {/* Left / Right arrows */}
      <div className="flex items-center justify-between w-full gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 disabled:opacity-30 hover:border-primary hover:text-primary transition-all cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Jump-to dots — show 9 dots centred around current index */}
        <div className="flex gap-1.5 justify-center flex-1 flex-wrap">
          {NUMBERS.map((_, i) => {
            const near = Math.abs(i - index) <= 4;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                title={String(i + 1)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === index
                    ? "w-5 h-2.5 bg-primary"
                    : near
                    ? "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"
                    : "w-1.5 h-1.5 bg-gray-200"
                }`}
              />
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={index === 49}
          className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-gray-400 disabled:opacity-30 hover:border-primary hover:text-primary transition-all cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
        >
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
}
