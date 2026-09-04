import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Share2 } from 'lucide-react';

export default function WishMaker() {
  const [tone, setTone] = useState('Emotional');
  
  const generateWish = () => {
    // Mock generation for UI purposes
    return `Dear Teacher, your guidance has been the light in my educational journey. Thank you for always believing in me and pushing me to do my best. Happy Teacher's Day!`;
  };

  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Personalized Wish Maker</h2>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <input type="text" placeholder="Teacher's Name" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3" />
            <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/20 rounded-xl px-4 py-3" />
          </div>
          
          <div className="mb-8 flex flex-wrap gap-3">
            {['Emotional', 'Funny', 'Formal', 'Short'].map(t => (
              <button 
                key={t}
                onClick={() => setTone(t)}
                className={`px-6 py-2 rounded-full border transition-all ${tone === t ? 'bg-blue-500 text-white border-blue-500' : 'border-white/20 hover:bg-white/10'}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 font-serif text-xl italic leading-relaxed min-h-[150px]">
            "{generateWish()}"
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={() => navigator.clipboard.writeText(generateWish())} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><Copy className="w-4 h-4" /></button>
              <button onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: "Happy Teacher's Day", text: generateWish() }).catch(() => {});
                } else {
                  alert('Sharing not supported on this browser');
                }
              }} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
