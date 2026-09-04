import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import { X, Globe, Palette } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ECardGenerator from './components/ECardGenerator';
import WishMaker from './components/WishMaker';
import QuoteLibrary from './components/QuoteLibrary';
import ThankYouWall from './components/ThankYouWall';
import Polls from './components/Polls';
import GiftSender from './components/GiftSender';
import MemoryTimeline from './components/MemoryTimeline';
import AIWishWriter from './components/AIWishWriter';
import HistoryTimeline from './components/HistoryTimeline';
import TeacherStories from './components/TeacherStories';
import FamousQuotes from './components/FamousQuotes';
import Activities from './components/Activities';
import PhotoCardCreator from './components/PhotoCardCreator';
import VideoWishMaker from './components/VideoWishMaker';
import CertificateGenerator from './components/CertificateGenerator';
import ClassGroupCard from './components/ClassGroupCard';
import Resources from './components/Resources';
import FinalCelebration from './components/FinalCelebration';
import ThemeCustomizer from './components/ThemeCustomizer';

interface EventShellProps {
  onClose?: () => void;
}

export default function EventShell({ onClose }: EventShellProps) {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showThemeSettings, setShowThemeSettings] = useState(false);

  // Map themes to CSS classes for the main wrapper
  const themeClasses: Record<string, string> = {
    'elegant-gold': 'bg-slate-900 text-slate-100 font-serif',
    'classroom': 'bg-amber-50 text-stone-800 font-sans',
    'chalkboard': 'bg-green-900 text-gray-100 font-mono',
    'flowers': 'bg-rose-50 text-rose-900 font-serif',
    'modern-minimal': 'bg-white text-gray-900 font-sans',
    'cartoon': 'bg-sky-100 text-blue-900 font-comic', // Just using classes, might need actual fonts
  };

  return (
    <div className={`teacher-day-2026-wrapper min-h-screen w-full relative transition-colors duration-700 overflow-x-hidden ${themeClasses[theme] || themeClasses['elegant-gold']}`}>
      
      {/* Floating Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <div className="relative group">
          <button className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all border border-white/10 shadow-lg">
            <Globe className="w-5 h-5" />
          </button>
          <div className="absolute right-0 top-full mt-2 bg-white text-gray-900 rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {(['en', 'hi', 'ta', 'te'] as const).map(lang => (
              <button 
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === lang ? 'font-bold bg-blue-50' : ''}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setShowThemeSettings(true)}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all border border-white/10 shadow-lg"
        >
          <Palette className="w-5 h-5" />
        </button>
        
        {onClose && (
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all border border-white/10 shadow-lg"
            title="Close Event"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {showThemeSettings && (
        <ThemeCustomizer onClose={() => setShowThemeSettings(false)} />
      )}

      {/* Main Content Sections */}
      <HeroSection />
      <ECardGenerator />
      <WishMaker />
      <QuoteLibrary />
      <ThankYouWall />
      <Polls />
      <GiftSender />
      <MemoryTimeline />
      <AIWishWriter />
      <HistoryTimeline />
      <TeacherStories />
      <FamousQuotes />
      <Activities />
      <PhotoCardCreator />
      <VideoWishMaker />
      <CertificateGenerator />
      <ClassGroupCard />
      <Resources />
      <FinalCelebration />
      
    </div>
  );
}
