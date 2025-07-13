import React from 'react';
import { useTranslation, Language } from '../hooks/useTranslation';
import Logo from './Logo';

const Header: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'te' as Language, name: 'తెలుగు' },
    { code: 'hi' as Language, name: 'हिन्दी' }
  ];

  return (
    <header className="w-full bg-gradient-to-r from-green-50 to-green-25 border-b border-green-100 px-4 py-6">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <Logo />
        <select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value as Language)}
          className="bg-white border border-green-300 rounded-lg px-3 py-2 text-sm text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400 shadow-sm"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;