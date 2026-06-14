"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function NavBar() {
  const { language, mode } = useLanguage();

  const langLabel = language === "es" ? "🇲🇽 ES" : language === "ur" ? "🇵🇰 UR" : null;

  return (
    <nav className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm">
      <Link href="/" className="flex items-center gap-2 font-black text-xl text-primary">
        OurMathWorld
      </Link>
      <div className="flex items-center gap-4 text-sm font-semibold text-gray-500">
        {langLabel && (
          <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-xs">
            {langLabel}
          </span>
        )}
        {mode === "student" && (
          <Link href="/student" className="hover:text-primary transition-colors">
            Grades
          </Link>
        )}
        {mode === "teacher" && (
          <Link href="/teacher" className="hover:text-primary transition-colors">
            Standards
          </Link>
        )}
        <Link href="/community" className="hover:text-primary transition-colors">
          For Teachers
        </Link>
        <Link
          href="/"
          className="bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary-dark transition-colors"
        >
          Change Language
        </Link>
      </div>
    </nav>
  );
}
