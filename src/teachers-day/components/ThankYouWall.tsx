import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Note { id: string; tName: string; sName: string; msg: string; color: string; }

export default function ThankYouWall() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [form, setForm] = useState({ tName: '', sName: '', msg: '' });

  useEffect(() => {
    const saved = localStorage.getItem('teacherDayNotes2026');
    if (saved) {
      try { setNotes(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  const addNote = () => {
    if (!form.msg || !form.tName) return;
    const colors = ['bg-rose-100 text-rose-900', 'bg-amber-100 text-amber-900', 'bg-blue-100 text-blue-900', 'bg-green-100 text-green-900'];
    const newNote = { 
      id: Date.now().toString(), ...form, 
      color: colors[Math.floor(Math.random() * colors.length)] 
    };
    const updated = [newNote, ...notes];
    setNotes(updated);
    localStorage.setItem('teacherDayNotes2026', JSON.stringify(updated));
    setForm({ tName: '', sName: '', msg: '' });
  };

  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Virtual Thank-You Wall</h2>
        
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-16 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Leave a Note</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="To (Teacher)" value={form.tName} onChange={e => setForm({...form, tName: e.target.value})} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2" />
              <input type="text" placeholder="From (Student)" value={form.sName} onChange={e => setForm({...form, sName: e.target.value})} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2" />
            </div>
            <textarea placeholder="Your thank you message..." value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2" rows={3}></textarea>
            <button onClick={addNote} className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">Pin to Wall</button>
          </div>
        </div>

        <div className="columns-1 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {notes.map((note) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              key={note.id} 
              className={`p-6 rounded-xl shadow-lg break-inside-avoid ${note.color} relative overflow-hidden`}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-sm border border-red-500/20 opacity-80" />
              <h4 className="font-bold text-lg mt-2 mb-1">To: {note.tName}</h4>
              <p className="font-serif italic mb-4">"{note.msg}"</p>
              <p className="text-sm font-medium opacity-70 text-right">— {note.sName || 'Anonymous'}</p>
            </motion.div>
          ))}
          {notes.length === 0 && (
            <div className="col-span-full text-center opacity-50 py-12">The wall is empty. Be the first to add a note!</div>
          )}
        </div>
      </div>
    </section>
  );
}
