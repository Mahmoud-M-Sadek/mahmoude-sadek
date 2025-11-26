import React from 'react';
import { Translation, PortfolioItem } from '../types';
import { ExternalLink } from 'lucide-react';
import { portfolioItems } from '../constants';

interface PortfolioProps {
  t: Translation;
}

const Portfolio: React.FC<PortfolioProps> = ({ t }) => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.portfolio.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <span>{t.portfolio.visit}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {item.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;