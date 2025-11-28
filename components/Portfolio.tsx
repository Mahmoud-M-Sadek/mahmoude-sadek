import React from 'react';
import { Translation, PortfolioItem } from '../types';
import { ExternalLink } from 'lucide-react';
import { portfolioItems } from '../constants';
import { motion } from 'framer-motion';

interface PortfolioProps {
  t: Translation;
}

const Portfolio: React.FC<PortfolioProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.portfolio.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t.portfolio.subtitle}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((portfolioItem, index) => (
            <motion.div 
              variants={item} 
              key={index} 
              whileHover="hover"
              className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video w-full overflow-hidden">
                <motion.img 
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.4 }}
                  src={portfolioItem.image} 
                  alt={portfolioItem.title} 
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.a 
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 20, opacity: 0 }}
                    href={portfolioItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold"
                  >
                    <span>{t.portfolio.visit}</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {portfolioItem.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-1">
                  {portfolioItem.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;