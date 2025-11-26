import { LucideIcon } from "lucide-react";

export type Language = 'en' | 'ar';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  title: string;
  url: string;
  image: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
    securityTitle: string;
    softwareTitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    visit: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    address: string;
    phone: string;
  };
  footer: {
    rights: string;
    desc: string;
  };
}