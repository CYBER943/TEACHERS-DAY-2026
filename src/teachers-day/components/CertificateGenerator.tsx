import React, { useState } from 'react';

export default function CertificateGenerator() {
  const [name, setName] = useState('');
  
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Certificate of Appreciation</h2>
      
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <label className="block text-sm font-medium mb-2 opacity-90">Teacher's Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 focus:outline-none mb-6"
            placeholder="e.g. Mrs. Smith"
          />
          <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
            Download Certificate
          </button>
        </div>
        
        <div className="aspect-[1.4/1] bg-amber-50 text-stone-900 rounded-lg p-12 border-8 border-amber-900/20 shadow-2xl relative text-center flex flex-col justify-center">
          <div className="absolute inset-2 border-2 border-amber-900/30 border-dashed" />
          <h3 className="text-4xl font-serif font-bold text-amber-900 mb-2">CERTIFICATE</h3>
          <p className="text-sm font-bold tracking-widest text-amber-700 mb-8">OF OUTSTANDING TEACHING</p>
          
          <p className="italic text-sm mb-4">This is proudly presented to</p>
          <p className="text-3xl font-serif border-b border-stone-400 pb-2 mb-4 px-8 inline-block min-w-[250px]">
            {name || 'Teacher Name'}
          </p>
          <p className="text-xs max-w-sm mx-auto">For inspiring, guiding, and making a lasting difference in the lives of your students.</p>
        </div>
      </div>
    </section>
  );
}
