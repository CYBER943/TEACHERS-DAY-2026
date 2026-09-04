import React from 'react';

export default function FamousQuotes() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Famous Educator Quotes</h2>
      <div className="p-12 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl relative">
        <span className="absolute top-4 left-8 text-6xl opacity-20 font-serif">"</span>
        <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed relative z-10">
          "Teaching is a very noble profession that shapes the character, caliber, and future of an individual."
        </p>
        <p className="text-lg font-bold opacity-90">— Dr. A.P.J. Abdul Kalam</p>
      </div>
    </section>
  );
}
