import React from 'react';
import { motion } from 'motion/react';

export default function FinalCelebration() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-black/40">
      <div className="absolute inset-0 pointer-events-none">
        {/* Mock Confetti/Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: '-10vh', x: Math.random() * window.innerWidth }}
            animate={{ opacity: [0, 1, 0], y: '110vh' }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 10 }}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: ['#fcd34d', '#f87171', '#60a5fa', '#34d399'][Math.floor(Math.random() * 4)] }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif font-bold mb-6"
        >
          To Every Teacher Who Made a Difference...
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl md:text-5xl font-bold text-red-400"
        >
          Thank You. ❤️
        </motion.p>
      </div>
    </section>
  );
}
