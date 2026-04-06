'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const defaultLanguage: Language = 'uz';
const defaultContextValue: LanguageContextType = {
  language: defaultLanguage,
  setLanguage: () => {},
  t: translations[defaultLanguage],
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && saved in translations) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (lang in translations) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const contextValue: LanguageContextType = {
    language: mounted ? language : defaultLanguage,
    setLanguage,
    t: translations[mounted ? language : defaultLanguage],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
