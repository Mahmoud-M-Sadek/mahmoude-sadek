import React from 'react';
import { Translation, Language } from '../types';
import { Cctv, Lock, Fingerprint, Bell, Server, Globe, Smartphone, Search, BarChart3, ShoppingCart, Wrench, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
  t: Translation;
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ t, lang }) => {
  
  const securityServices = [
    { icon: Cctv, title: lang === 'en' ? 'CCTV Systems' : 'كاميرات المراقبة', desc: lang === 'en' ? 'High-definition surveillance cameras for 24/7 monitoring.' : 'كاميرات مراقبة عالية الدقة للمتابعة المستمرة.' },
    { icon: Lock, title: lang === 'en' ? 'Access Control' : 'أنظمة التحكم في الدخول', desc: lang === 'en' ? 'Secure gate and door access systems.' : 'أنظمة تحكم ذكية للأبواب والبوابات.' },
    { icon: Fingerprint, title: lang === 'en' ? 'Biometrics' : 'أجهزة البصمة', desc: lang === 'en' ? 'Time attendance and biometric identification.' : 'أجهزة الحضور والانصراف ببصمة الإصبع والوجه.' },
    { icon: Bell, title: lang === 'en' ? 'Alarm Systems' : 'أنظمة الإنذار', desc: lang === 'en' ? 'Intrusion and fire detection alarms.' : 'أنظمة إنذار ضد السرقة والحرائق.' },
    { icon: Server, title: lang === 'en' ? 'Networking' : 'الشبكات والسيرفرات', desc: lang === 'en' ? 'Network infrastructure setup and server configuration.' : 'تجهيز البنية التحتية للشبكات والسيرفرات.' },
    { icon: Wrench, title: lang === 'en' ? 'Hardware Supply' : 'توريد هاردوير', desc: lang === 'en' ? 'Supply and installation of IT hardware.' : 'توريد وتركيب أجهزة الكمبيوتر ومستلزماتها.' },
  ];

  const softwareServices = [
    { icon: Globe, title: lang === 'en' ? 'Web Development' : 'تصميم مواقع الويب', desc: lang === 'en' ? 'Custom websites, landing pages, and web apps.' : 'تصميم وتطوير مواقع الويب بجميع أنواعها.' },
    { icon: Smartphone, title: lang === 'en' ? 'Mobile Apps' : 'تطبيقات الموبايل', desc: lang === 'en' ? 'iOS and Android application development.' : 'تطوير تطبيقات الأندرويد والآيفون.' },
    { icon: Search, title: lang === 'en' ? 'SEO Services' : 'تحسين محركات البحث', desc: lang === 'en' ? 'Rank higher on Google with our SEO strategies.' : 'تصدر نتائج البحث في جوجل وزيادة الزوار.' },
    { icon: Code2, title: lang === 'en' ? 'CRM Systems' : 'أنظمة CRM', desc: lang === 'en' ? 'Customer Relationship Management solutions.' : 'نظم إدارة علاقات العملاء مخصصة للشركات.' },
    { icon: BarChart3, title: lang === 'en' ? 'Dashboards' : 'لوحات التحكم', desc: lang === 'en' ? 'Data visualization and admin panels.' : 'لوحات تحكم تفاعلية لعرض البيانات.' },
    { icon: ShoppingCart, title: lang === 'en' ? 'E-Commerce' : 'التجارة الإلكترونية', desc: lang === 'en' ? 'Full online store setup and payment integration.' : 'متاجر إلكترونية متكاملة مع الدفع الإلكتروني.' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Security Section */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary-600 mb-8 flex items-center gap-3"
          >
             <div className="h-8 w-1 bg-primary-600 rounded-full"></div>
             {t.services.securityTitle}
          </motion.h3>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {securityServices.map((service, index) => (
              <motion.div variants={item} key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Software Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-blue-500 mb-8 flex items-center gap-3"
          >
             <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
             {t.services.softwareTitle}
          </motion.h3>
          <motion.div 
             variants={container}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {softwareServices.map((service, index) => (
              <motion.div variants={item} key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;