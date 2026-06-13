"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "es" | "ur";
export type Mode = "student" | "teacher" | null;

type LanguageContextType = {
  language: Language | null;
  mode: Mode;
  setLanguage: (lang: Language) => void;
  setMode: (mode: Mode) => void;
  t: (en: string, translated: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [mode, setModeState] = useState<Mode>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("omw_language") as Language | null;
    const savedMode = localStorage.getItem("omw_mode") as Mode | null;
    if (savedLang) setLanguageState(savedLang);
    if (savedMode) setModeState(savedMode);
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("omw_language", lang);
  }

  function setMode(m: Mode) {
    setModeState(m);
    if (m) localStorage.setItem("omw_mode", m);
  }

  function t(en: string, translated: string) {
    return language ? translated : en;
  }

  return (
    <LanguageContext.Provider value={{ language, mode, setLanguage, setMode, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
