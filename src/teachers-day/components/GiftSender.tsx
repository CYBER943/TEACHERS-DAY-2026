import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function GiftSender() {
  const [selectedGift, setSelectedGift] = useState('');
  const [sent, setSent] = useState(false);

  const gifts = [
    { id: 'flower', icon: '🌹', name: 'Rose' },
    { id: 'bouquet', icon: '💐', name: 'Bouquet' },
    { id: 'book', icon: '📚', name: 'Book' },
    { id: 'apple', icon: '🍎', name: 'Apple' },
    { id: 'star', icon: '⭐', name: 'Star' }
  ];

  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Send a Virtual Gift</h2>
        <p className="text-lg opacity-80 mb-12">A small token of appreciation.</p>
        
        {!sent ? (
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {gifts.map(g => (
                <button 
                  key={g.id}
                  onClick={() => setSelectedGift(g.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${selectedGift === g.id ? 'bg-white/20 border-white shadow-lg scale-110' : 'border-white/10 hover:bg-white/10'}`}
                >
                  <span className="text-5xl">{g.icon}</span>
                  <span className="text-sm font-medium">{g.name}</span>
                </button>
              ))}
            </div>
            
            <input type="text" placeholder="Add a short note..." className="w-full max-w-sm mx-auto block bg-white/5 border border-white/20 rounded-xl px-4 py-3 mb-6" />
            
            <button 
              onClick={() => selectedGift && setSent(true)}
              disabled={!selectedGift}
              className="px-8 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 disabled:opacity-50 transition-all"
            >
              Send Gift
            </button>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-12 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 inline-block"
          >
            <div className="text-6xl mb-4">{gifts.find(g => g.id === selectedGift)?.icon}</div>
            <h3 className="text-2xl font-bold mb-2">Gift Sent!</h3>
            <p className="opacity-80 mb-6">Your teacher will receive this virtual token of appreciation.</p>
            <button onClick={() => setSent(false)} className="px-6 py-2 border border-white/30 rounded-xl hover:bg-white/10">Send Another</button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
