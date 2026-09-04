import React from 'react';

export default function HistoryTimeline() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">History of Teacher's Day</h2>
      <div className="space-y-8">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">September 5 in India</h3>
          <p className="opacity-80">Celebrated since 1962 in honor of Dr. Sarvepalli Radhakrishnan's birthday.</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">Dr. Sarvepalli Radhakrishnan</h3>
          <p className="opacity-80">A philosopher, scholar, and the second President of India, who believed "teachers should be the best minds in the country."</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">World Teachers' Day (October 5)</h3>
          <p className="opacity-80">Established by UNESCO in 1994 to commemorate the signing of the 1966 ILO/UNESCO Recommendation concerning the Status of Teachers.</p>
        </div>
      </div>
    </section>
  );
}
