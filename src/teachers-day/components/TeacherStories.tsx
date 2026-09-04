import React from 'react';

export default function TeacherStories() {
  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Inspirational Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map(i => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all">
              <div className="h-48 bg-white/5 flex items-center justify-center opacity-50">
                [ Image Placeholder ]
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">The Teacher Who Changed Everything</h3>
                <p className="opacity-80 mb-6">A heartwarming story of dedication, patience, and the profound impact one person can have on a student's life trajectory.</p>
                <button className="font-bold border-b border-current pb-1 hover:opacity-70 transition-opacity">Read Story →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
