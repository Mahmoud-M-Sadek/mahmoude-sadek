import React from 'react';
import { Translation } from '../types';
import { Phone, ArrowRight, Shield } from 'lucide-react';

interface HeroProps {
  t: Translation;
  lang: 'en' | 'ar';
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';

  return (
    <section id="home" className="relative bg-secondary-900 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
          alt="Security Systems and Technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-400 mb-6">
            <Shield size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">
              {lang === 'en' ? 'Trusted Security Partner' : 'شريكك الأمني الموثوق'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:01030417663" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary-600/30"
            >
              <Phone size={20} />
              <span>{t.hero.contact}</span>
            </a>
            
            <a 
              href="#services" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-semibold backdrop-blur-sm transition-all"
            >
              <span>{t.hero.cta}</span>
              {isRtl ? <ArrowRight className="rotate-180" size={20} /> : <ArrowRight size={20} />}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;