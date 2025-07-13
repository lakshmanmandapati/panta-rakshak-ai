import { useState } from 'react';
import { translations, type Language } from '../translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // If translation is not found, try to find it in English as fallback
    if (value === undefined) {
      let fallbackValue: any = translations.en;
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k];
      }
      return fallbackValue !== undefined ? fallbackValue : key;
    }
    
    return value;
  };

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Force a small delay to ensure state updates properly
    setTimeout(() => {
      // Trigger a custom event to notify components of language change
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
    }, 0);
  };

  return {
    t,
    currentLanguage,
    changeLanguage
  };
};

export type { Language };