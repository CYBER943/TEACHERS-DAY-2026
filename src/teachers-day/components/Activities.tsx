import React from 'react';

export default function Activities() {
  const activities = [
    { title: "Host a Special Assembly", cat: "School" },
    { title: "Classroom Decorations", cat: "Creative" },
    { title: "Write Thank You Notes", cat: "Personal" },
    { title: "Role Reversal Day", cat: "Fun" }
  ];

  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Celebration Ideas</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {activities.map((act, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/20 bg-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
              <span className="font-medium text-lg">{act.title}</span>
              <span className="text-xs px-3 py-1 rounded-full border border-white/30">{act.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
