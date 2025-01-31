"use client"
import { useEffect, createContext, useState, useContext } from 'react';
import { en } from '@/translations/en';
import { sk } from '@/translations/sk';

type Translations = typeof sk;

const LanguageContext = createContext<{
  language: string;
  t: Translations;
  toggleLanguage: () => void;
}>({
  language: 'sk',
  t: sk,
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('sk');
  const [translations, setTranslations] = useState<Translations>(sk);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
      setTranslations(savedLang === 'sk' ? sk : en);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'sk' ? 'en' : 'sk';
    setLanguage(newLang);
    setTranslations(newLang === 'sk' ? sk : en);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, t: translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default function NavSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={toggleLanguage}
        className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 transition-colors"
        title={language === 'sk' ? 'Switch to English' : 'Prepnúť do slovenčiny'}
      >
        {language === 'sk' ? '🇬🇧' : '🇸🇰'}
      </button>
    </div>
  );
}
