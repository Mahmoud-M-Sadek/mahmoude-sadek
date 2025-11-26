import React from 'react';
import { Translation, Language } from '../types';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactProps {
  t: Translation;
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Information System Security
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-slate-800 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{lang === 'en' ? 'Phone' : 'الهاتف'}</h4>
                    <a href="tel:01030417663" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-600 transition-colors" dir="ltr">
                      01030417663
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-slate-800 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{lang === 'en' ? 'Location' : 'العنوان'}</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {t.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-slate-800 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{lang === 'en' ? 'Email' : 'البريد الإلكتروني'}</h4>
                    <a href="mailto:info@informationsystemsecurity.com" className="text-lg font-bold text-slate-900 dark:text-white hover:text-primary-600 transition-colors">
                      info@informationsystemsecurity.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-200 dark:bg-slate-700 h-64 rounded-2xl overflow-hidden relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.330873693427!2d31.378469!3d31.040948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAyJzI3LjQiTiAzMcKwMjInNDIuNSJF!5e0!3m2!1sen!2seg!4v1634567890123!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mansoura Map"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.contact.name}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.contact.email}
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {t.contact.message}
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all resize-none dark:text-white"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors shadow-lg shadow-primary-600/30"
              >
                {t.contact.send}
                {lang === 'ar' ? <Send className="rotate-180" size={18} /> : <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;