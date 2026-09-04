import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic text entrance
      gsap.fromTo('.teacher-day-2026-animate-text', 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          stagger: 0.3, 
          ease: 'power4.out',
          delay: 0.2
        }
      );

      // Background ambient glow animations
      gsap.to('.teacher-day-2026-glow-1', {
        y: -40,
        rotation: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.teacher-day-2026-glow-2', {
        y: 40,
        rotation: -10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Floating particles
      const particles = gsap.utils.toArray('.teacher-day-2026-particle');
      particles.forEach((particle: any) => {
        gsap.fromTo(particle, 
          {
            y: '110vh',
            x: () => gsap.utils.random(-100, 100),
            rotation: () => gsap.utils.random(-180, 180),
            opacity: 0
          },
          {
            y: '-10vh',
            x: () => gsap.utils.random(-200, 200),
            rotation: () => gsap.utils.random(180, 360),
            opacity: () => gsap.utils.random(0.3, 0.8),
            duration: () => gsap.utils.random(10, 25),
            repeat: -1,
            ease: 'none',
            delay: () => gsap.utils.random(0, 10)
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const icons = ['✨', '📚', '🌹', '✏️', '🌟', '🎓', 'chalk'];

  return (
    <section ref={containerRef} className="teacher-day-2026-hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Ambient background glows */}
      <div className="teacher-day-2026-bg-glows absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="teacher-day-2026-glow-1 absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-[120px]" />
        <div className="teacher-day-2026-glow-2 absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="teacher-day-2026-content relative z-10 text-center max-w-4xl px-4">
        <h1 className="teacher-day-2026-animate-text text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 drop-shadow-lg">
          HAPPY TEACHER’S DAY ❤️
        </h1>

        <p className="teacher-day-2026-animate-text text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-serif">
          To the teachers who guide us, inspire us, and help us become who we are.
        </p>

        <button className="teacher-day-2026-animate-text teacher-day-2026-cta-btn px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:bg-white/20 hover:scale-105 text-lg font-bold tracking-wide transition-all duration-300">
          Enter Celebration →
        </button>
      </div>

      {/* Floating Particles/Icons */}
      <div className="teacher-day-2026-particles-container absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(25)].map((_, i) => {
          const icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <div
              key={i}
              className="teacher-day-2026-particle absolute text-2xl md:text-3xl"
              style={{
                left: `${Math.random() * 100}vw`,
              }}
            >
              {icon === 'chalk' ? (
                <div className="w-2 h-6 bg-white/70 rounded-sm rotate-45 blur-[1px]" />
              ) : icon}
            </div>
          );
        })}
      </div>
    </section>
  );
}
