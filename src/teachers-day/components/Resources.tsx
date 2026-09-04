import React from 'react';
import { Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    { title: 'Classroom Poster', format: 'PDF' },
    { title: 'Social Media Banner', format: 'PNG' },
    { title: 'Presentation Template', format: 'PPTX' },
    { title: 'Printable Greeting Card', format: 'PDF' }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Downloadable Resources</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {resources.map((r, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
              <span className="font-bold">{r.format}</span>
            </div>
            <h3 className="font-bold mb-4">{r.title}</h3>
            <button className="flex items-center justify-center gap-2 w-full py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
