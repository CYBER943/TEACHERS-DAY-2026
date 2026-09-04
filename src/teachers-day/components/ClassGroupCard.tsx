import React, { useState } from 'react';
import { Users } from 'lucide-react';

export default function ClassGroupCard() {
  const [messages, setMessages] = useState<{name: string, msg: string}[]>([
    { name: 'Alice', msg: 'Best teacher ever!' },
    { name: 'Bob', msg: 'Thank you for your patience.' }
  ]);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const add = () => {
    if (name && msg) {
      setMessages([...messages, { name, msg }]);
      setName('');
      setMsg('');
    }
  };

  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Users className="w-8 h-8" /> Class Group Card
          </h2>
          <p className="opacity-80">Contribute to a shared digital card for your teacher.</p>
        </div>
        
        <div className="bg-white/10 p-8 rounded-3xl border border-white/20 mb-8 flex gap-4">
          <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="w-1/3 bg-white/5 border border-white/20 rounded-xl px-4 py-3" />
          <input type="text" placeholder="Short message..." value={msg} onChange={e=>setMsg(e.target.value)} className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-3" />
          <button onClick={add} className="px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">Add</button>
        </div>

        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center min-h-[400px] flex flex-col items-center justify-center">
          <h3 className="text-4xl font-serif font-bold mb-12">To Our Wonderful Teacher</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {messages.map((m, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl text-left min-w-[200px]">
                <p className="italic mb-2 text-lg">"{m.msg}"</p>
                <p className="font-bold opacity-70">— {m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
