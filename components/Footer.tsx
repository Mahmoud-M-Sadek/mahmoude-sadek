import React from 'react';
import { Translation } from '../types';
import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold leading-tight">
                    Information System
                  </h1>
                  <span className="text-sm text-primary-400 font-semibold tracking-wider">SECURITY</span>
                </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
             <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
             <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
             </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;