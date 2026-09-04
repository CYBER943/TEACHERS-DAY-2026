import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Polls() {
  const [voted, setVoted] = useState(false);
  const options = [
    { id: 1, text: "Patience & Understanding", votes: 45 },
    { id: 2, text: "Subject Expertise", votes: 20 },
    { id: 3, text: "Ability to Inspire", votes: 65 },
    { id: 4, text: "Sense of Humor", votes: 30 }
  ];

  const total = options.reduce((sum, o) => sum + o.votes, 0) + (voted ? 1 : 0);

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Appreciation Poll</h2>
      
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl">
        <h3 className="text-2xl font-medium mb-8">What is the best quality of a memorable teacher?</h3>
        
        <div className="space-y-4">
          {options.map((opt) => {
            const isVoted = voted === opt.id;
            const currentVotes = opt.votes + (isVoted ? 1 : 0);
            const percent = Math.round((currentVotes / total) * 100) || 0;
            
            return (
              <button 
                key={opt.id}
                onClick={() => !voted && setVoted(opt.id as any)}
                disabled={!!voted}
                className="w-full relative p-4 rounded-xl border border-white/20 text-left overflow-hidden transition-all hover:bg-white/5 disabled:hover:bg-transparent"
              >
                {voted && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    className="absolute inset-y-0 left-0 bg-blue-500/20 -z-10"
                  />
                )}
                <div className="flex justify-between relative z-10">
                  <span className={isVoted ? 'font-bold' : ''}>{opt.text}</span>
                  {voted && <span className="font-medium opacity-80">{percent}%</span>}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  );
}
