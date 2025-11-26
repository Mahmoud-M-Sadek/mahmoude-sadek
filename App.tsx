import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { content } from './constants';

function App() {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    // Update HTML dir and lang attributes for accessibility and correct RTL rendering
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Set appropriate font based on language
    if (lang === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang]);

  const t = content[lang];

  return (
    <HashRouter>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar lang={lang} setLang={setLang} t={t} />
        <main>
          <Hero t={t} lang={lang} />
          <About t={t} />
          <Services t={t} lang={lang} />
          <Portfolio t={t} />
          <Contact t={t} lang={lang} />
        </main>
        <Footer t={t} />
      </div>
    </HashRouter>
  );
}

export default App;