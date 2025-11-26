import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Globe } from 'lucide-react';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
              <ShieldCheck size={24} />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">
                Information System
              </h1>
              <span className="text-sm text-primary-600 font-semibold tracking-wider">SECURITY</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase text-sm font-bold">{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
                onClick={toggleLang}
                className="p-2 text-slate-600 dark:text-slate-300"
              >
                <span className="font-bold">{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-slate-800 hover:text-primary-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;