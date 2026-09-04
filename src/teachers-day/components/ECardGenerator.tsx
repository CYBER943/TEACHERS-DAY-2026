import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function ECardGenerator() {
  const { t } = useLanguage();
  const [teacherName, setTeacherName] = useState('');
  const [message, setMessage] = useState('');
  const [template, setTemplate] = useState('elegant-gold');

  const templates = ['elegant-gold', 'classroom', 'chalkboard', 'flowers', 'modern-minimal'];

  return (
    <section className="py-24 px-4 relative max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('ecard_title')}</h2>
        <p className="text-lg opacity-80">Create and share a beautiful animated card.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Editor */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">Teacher's Name</label>
              <input 
                type="text" 
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/30"
                placeholder="e.g. Mrs. Smith"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">Your Message</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/30 resize-none"
                placeholder="Thank you for everything..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-90">Select Template</label>
              <div className="grid grid-cols-2 gap-3">
                {templates.map(tpl => (
                  <button
                    key={tpl}
                    onClick={() => setTemplate(tpl)}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium capitalize transition-all ${template === tpl ? 'bg-white/20 border-white/50 shadow-inner' : 'bg-transparent border-white/10 hover:bg-white/10'}`}
                  >
                    {tpl.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Generate & Share
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
          <motion.div 
            key={template}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`absolute inset-0 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center
              ${template === 'elegant-gold' ? 'bg-slate-900 text-amber-200 border-2 border-amber-500/30' : ''}
              ${template === 'classroom' ? 'bg-amber-100 text-stone-800' : ''}
              ${template === 'chalkboard' ? 'bg-green-900 text-white font-mono' : ''}
              ${template === 'flowers' ? 'bg-rose-50 text-rose-900' : ''}
              ${template === 'modern-minimal' ? 'bg-white text-gray-900' : ''}
            `}
          >
            {/* Decorations based on template */}
            {template === 'flowers' && <div className="absolute top-4 left-4 text-4xl">🌸</div>}
            {template === 'flowers' && <div className="absolute bottom-4 right-4 text-4xl">🌷</div>}
            
            <h3 className={`text-3xl font-bold mb-6 ${template === 'elegant-gold' ? 'font-serif' : ''}`}>
              Dear {teacherName || 'Teacher'},
            </h3>
            
            <p className={`text-lg whitespace-pre-wrap leading-relaxed ${template === 'chalkboard' ? 'opacity-90' : 'opacity-80'}`}>
              {message || "Your beautiful message will appear here. Choose a template and write something nice!"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
