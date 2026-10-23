"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { dictionaries, type Dictionary, type Lang } from "@/content/site";

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();
let memoryLang: Lang = "en";

function readLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "no") return stored;
  } catch {
    // Storage can be blocked (private mode, disabled site data); fall back to memory.
  }
  return memoryLang;
}

function writeLang(lang: Lang) {
  memoryLang = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Ignore: the choice still applies for this visit.
  }
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  window.addEventListener("storage", notify);
  return () => {
    listeners.delete(notify);
    window.removeEventListener("storage", notify);
  };
}

type LanguageContextValue = { lang: Lang; t: Dictionary; setLang: (lang: Lang) => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "en" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang === "no" ? "nb" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang: writeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
