"use client";

import Link from "next/link";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function NavBar() {
  const { language, mode } = useLanguage();
  const [open, setOpen] = useState(false);

  const langLabel = language === "es" ? "🇲🇽 ES" : language === "ur" ? "🇵🇰 UR" : null;

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-black text-xl text-primary flex items-center gap-1.5" onClick={() => setOpen(false)}>
          <Leaf size={20} className="text-primary" />
          OurMathWorld
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-gray-500">
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

        {/* Hamburger — mobile only */}
        <div className="md:hidden flex items-center gap-3">
          {langLabel && (
            <span className="bg-primary-light text-primary px-2 py-0.5 rounded-full text-xs font-bold">
              {langLabel}
            </span>
          )}
          <button
            className="flex flex-col gap-1.5 p-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 flex flex-col gap-1">
          {mode === "student" && (
            <Link
              href="/student"
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl font-bold text-sm text-gray-600 hover:text-primary hover:bg-primary-light transition-colors"
            >
              Grades
            </Link>
          )}
          {mode === "teacher" && (
            <Link
              href="/teacher"
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl font-bold text-sm text-gray-600 hover:text-primary hover:bg-primary-light transition-colors"
            >
              Standards
            </Link>
          )}
          <Link
            href="/community"
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl font-bold text-sm text-gray-600 hover:text-primary hover:bg-primary-light transition-colors"
          >
            For Teachers
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="mx-4 mt-2 bg-primary text-white font-bold px-4 py-2.5 rounded-full text-sm text-center hover:bg-primary-dark transition-colors"
          >
            Change Language
          </Link>
        </div>
      )}
    </nav>
  );
}
