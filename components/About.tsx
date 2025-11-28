import React from 'react';
import { Translation } from '../types';
import { Target, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutProps {
  t: Translation;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              animate={{ rotate: [3, 6, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-primary-600 rounded-2xl opacity-10"
            ></motion.div>
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1632" 
              alt="About Information System Security" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.about.missionTitle}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t.about.missionDesc}
                </p>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.about.visionTitle}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t.about.visionDesc}
                </p>
              </div>
            </div>
            
             <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                    <Award className="text-primary-600" size={18} />
                    <span>Top Quality Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                    <Award className="text-primary-600" size={18} />
                    <span>Expert Developers</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;