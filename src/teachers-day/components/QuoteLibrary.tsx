import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function QuoteLibrary() {
  const [filter, setFilter] = useState('All');
  const quotes = [
    { text: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual.", author: "A. P. J. Abdul Kalam", type: "Inspirational" },
    { text: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.", author: "Brad Henry", type: "Formal" },
    { text: "I survived another year of your classes. That deserves an award! Happy Teacher's Day!", author: "Student", type: "Funny" }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Quote & Message Library</h2>
      
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['All', 'Inspirational', 'Formal', 'Funny', 'Short'].map(f => (
          <button 
            key={f} onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full border transition-all ${filter === f ? 'bg-white text-black border-white' : 'border-white/30 hover:bg-white/10'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group hover:bg-white/10 transition-all"
          >
            <span className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-white/10">{q.type}</span>
            <p className="text-lg font-serif italic mb-6">"{q.text}"</p>
            <p className="text-sm opacity-60">— {q.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
