import React from 'react';
import { motion } from 'motion/react';

export default function MemoryTimeline() {
  const memories = [
    { year: '2018', title: 'Science Fair Winner', desc: 'Mr. Davis helped us build the working volcano that won 1st place.' },
    { year: '2021', title: 'Graduation Day', desc: 'The most emotional speech by our principal.' },
    { year: '2024', title: 'Reunion', desc: 'Meeting old teachers and thanking them for shaping our lives.' }
  ];

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Memory Timeline</h2>
      
      <div className="relative border-l-2 border-white/20 ml-4 md:ml-1/2">
        {memories.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 pl-8 relative"
          >
            <div className="absolute w-4 h-4 rounded-full bg-blue-500 -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-sm font-bold text-blue-400 mb-1 block">{m.year}</span>
            <h3 className="text-xl font-bold mb-2">{m.title}</h3>
            <p className="opacity-80">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
