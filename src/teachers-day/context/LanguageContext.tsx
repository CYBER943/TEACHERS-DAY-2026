import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'hi' | 'ta' | 'te'; // English, Hindi, Tamil, Telugu

type Translations = Record<string, string>;
type Dictionary = Record<Language, Translations>;

const dictionary: Dictionary = {
  en: {
    hero_title: 'HAPPY TEACHER’S DAY ❤️',
    hero_subtitle: 'To the teachers who guide us, inspire us, and help us become who we are.',
    hero_cta: 'Begin the Celebration →',
    ecard_title: 'Animated E-Card Generator',
    wishmaker_title: 'Personalized Wish Maker',
    quotes_title: 'Quote & Message Library',
    // ... add more as needed
  },
  hi: {
    hero_title: 'शिक्षक दिवस की शुभकामनाएँ ❤️',
    hero_subtitle: 'उन शिक्षकों को जो हमारा मार्गदर्शन करते हैं, हमें प्रेरित करते हैं, और हमें वह बनने में मदद करते हैं जो हम हैं।',
    hero_cta: 'जश्न शुरू करें →',
    ecard_title: 'एनिमेटेड ई-कार्ड जनरेटर',
    wishmaker_title: 'व्यक्तिगत शुभकामना निर्माता',
    quotes_title: 'उद्धरण और संदेश लाइब्रेरी',
  },
  ta: {
    hero_title: 'இனிய ஆசிரியர் தின நல்வாழ்த்துக்கள் ❤️',
    hero_subtitle: 'எங்களை வழிநடத்தி, ஊக்கமளித்து, நாங்கள் நாமாக இருக்க உதவும் ஆசிரியர்களுக்கு.',
    hero_cta: 'கொண்டாட்டத்தைத் தொடங்குங்கள் →',
    ecard_title: 'அனிமேஷன் இ-கார்டு ஜெனரேட்டர்',
    wishmaker_title: 'தனிப்பயனாக்கப்பட்ட வாழ்த்து',
    quotes_title: 'மேற்கோள் மற்றும் செய்தி நூலகம்',
  },
  te: {
    hero_title: 'ఉపాధ్యాయ దినోత్సవ శుభాకాంక్షలు ❤️',
    hero_subtitle: 'మమ్మల్ని నడిపించి, ప్రేరేపించి, మేము ఏమై ఉన్నామో అలా ఎదగడానికి సహాయపడే ఉపాధ్యాయులకు.',
    hero_cta: 'వేడుకను ప్రారంభించండి →',
    ecard_title: 'యానిమేటెడ్ ఇ-కార్డ్ జెనరేటర్',
    wishmaker_title: 'వ్యక్తిగతీకరించిన కోరిక మేకర్',
    quotes_title: 'కోట్స్ & సందేశాల లైబ్రరీ',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return dictionary[language]?.[key] || dictionary['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
