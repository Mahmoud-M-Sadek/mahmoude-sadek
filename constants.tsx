import { Translation, PortfolioItem } from './types';

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Albob Express Delivery",
    url: "https://www.albobexpressdelivery.com/",
    image: "https://picsum.photos/800/600?random=1",
    category: "Web Development"
  },
  {
    title: "Endex Express Delivery",
    url: "https://www.endexexpressdelivery.com/",
    image: "https://picsum.photos/800/600?random=2",
    category: "Logistics System"
  },
  {
    title: "Future Bright Housing",
    url: "https://futurebrighthousing.com/",
    image: "https://picsum.photos/800/600?random=3",
    category: "Real Estate"
  },
  {
    title: "Seet CL",
    url: "https://Seet-cl.com",
    image: "https://picsum.photos/800/600?random=4",
    category: "E-Commerce"
  },
  {
    title: "Seet E",
    url: "https://Seet-e.com",
    image: "https://picsum.photos/800/600?random=5",
    category: "Business Solution"
  },
  {
    title: "Panda Fast Food",
    url: "https://Pandafastfood.com",
    image: "https://picsum.photos/800/600?random=6",
    category: "Food & Beverage"
  }
];

export const content: Record<'en' | 'ar', Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Advanced Security Systems & IT Solutions",
      subtitle: "Securing your assets with top-tier hardware and elevating your business with cutting-edge software solutions in Egypt.",
      cta: "Explore Our Services",
      contact: "Call Now: 01030417663"
    },
    about: {
      title: "Who We Are",
      description: "Information System Security is a leading provider in Mansoura, Egypt, bridging the gap between physical security and digital transformation. We specialize in robust security systems and bespoke software development.",
      missionTitle: "Our Mission",
      missionDesc: "To provide integrated security and technical solutions that empower businesses to operate safely and efficiently.",
      visionTitle: "Our Vision",
      visionDesc: "To be the top choice for Security Systems and IT Solutions in Egypt through innovation and reliability."
    },
    services: {
      title: "Our Expertise",
      subtitle: "Comprehensive solutions ranging from CCTV installation to custom Mobile Apps and CRM systems.",
      securityTitle: "Security Systems",
      softwareTitle: "Software & IT Solutions"
    },
    portfolio: {
      title: "Our Projects",
      subtitle: "A showcase of our successful web design, development, and system integration projects.",
      visit: "Visit Website"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to upgrade your security or build your next digital product?",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Message",
      address: "Mansoura, Egypt",
      phone: "01030417663"
    },
    footer: {
      rights: "All Rights Reserved. Information System Security.",
      desc: "Your partner in Security Systems, Web Design, and Mobile App Development."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "اتصل بنا",
    },
    hero: {
      title: "أنظمة أمن المعلومات وحلول البرمجيات المتكاملة",
      subtitle: "نؤمن ممتلكاتك بأحدث الأنظمة الأمنية ونطور أعمالك بأفضل حلول البرمجة والتسويق في مصر.",
      cta: "استكشف خدماتنا",
      contact: "اتصل الآن: 01030417663"
    },
    about: {
      title: "عن الشركة",
      description: "شركة Information System Security مقرها المنصورة، مصر. نحن متخصصون في تقديم حلول متكاملة تجمع بين أنظمة الأمن والحماية والحلول البرمجية المبتكرة.",
      missionTitle: "رسالتنا",
      missionDesc: "توفير بيئة عمل آمنة ومتطورة تقنياً لعملائنا من خلال أحدث أجهزة المراقبة وحلول البرمجيات الذكية.",
      visionTitle: "رؤيتنا",
      visionDesc: "أن نكون الشركة الرائدة في مجال الأنظمة الأمنية وتطوير البرمجيات في مصر."
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول شاملة تبدأ من تركيب كاميرات المراقبة وحتى تصميم المواقع وتطبيقات الموبايل.",
      securityTitle: "أنظمة الأمن والحماية",
      softwareTitle: "حلول البرمجة وتكنولوجيا المعلومات"
    },
    portfolio: {
      title: "سابقة الأعمال",
      subtitle: "نماذج من مشاريعنا الناجحة في تصميم المواقع والأنظمة.",
      visit: "زيارة الموقع"
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "هل أنت مستعد لتأمين منشأتك أو بدء مشروعك الرقمي؟",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال الرسالة",
      address: "المنصورة – مصر",
      phone: "01030417663"
    },
    footer: {
      rights: "جميع الحقوق محفوظة. شركة Information System Security.",
      desc: "شريكك النجاح في الأنظمة الأمنية، تصميم المواقع، وتطبيقات الموبايل."
    }
  }
};