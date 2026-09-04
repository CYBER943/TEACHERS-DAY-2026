import React, { useState } from 'react';
import { Sparkles, Copy } from 'lucide-react';
import { motion } from 'motion/react';

export default function AIWishWriter() {
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = () => {
    setGenerating(true);
    setResult('');
    setTimeout(() => {
      setResult("To the most inspiring educator, thank you for igniting a passion for learning within me. Your dedication goes beyond the classroom, shaping not just minds, but futures. Happy Teacher's Day!");
      setGenerating(false);
    }, 1500);
  };

  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            AI Wish Writer
          </h2>
          <p className="text-lg opacity-80">Let AI help you craft the perfect, heartfelt message.</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <input type="text" placeholder="Teacher's Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3" />
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <option className="text-black" value="emotional">Emotional & Heartfelt</option>
              <option className="text-black" value="formal">Formal & Respectful</option>
              <option className="text-black" value="funny">Funny & Lighthearted</option>
            </select>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <option className="text-black" value="mentor">To a Mentor</option>
              <option className="text-black" value="principal">To the Principal</option>
              <option className="text-black" value="coach">To a Coach</option>
            </select>
            <button 
              onClick={handleGenerate}
              disabled={generating}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2"
            >
              {generating ? 'Crafting your message...' : 'Generate with AI'}
            </button>
          </div>
          
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[200px] flex flex-col">
            <span className="text-xs uppercase tracking-wider opacity-50 font-bold mb-4">Generated Wish</span>
            {generating ? (
              <div className="flex-1 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <Sparkles className="w-6 h-6 opacity-50" />
                </motion.div>
              </div>
            ) : result ? (
              <div className="flex-1">
                <p className="font-serif italic text-lg leading-relaxed">"{result}"</p>
                <div className="mt-6 flex justify-end">
                  <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20"><Copy className="w-4 h-4" /></button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center opacity-30 text-sm">
                Your AI-generated message will appear here.
              </div>
            )}
          </div>
        </div>
        <p className="text-center text-xs opacity-40 mt-4">* Prototype experience. Uses predefined contextual templates.</p>
      </div>
    </section>
  );
}
