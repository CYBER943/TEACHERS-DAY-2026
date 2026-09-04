import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export default function PhotoCardCreator() {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setPhoto(url);
    }
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Photo Card Creator</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
          <p className="mb-6 opacity-80">Upload a memorable photo with your teacher to create a custom greeting card.</p>
          <label className="block w-full py-12 border-2 border-dashed border-white/30 rounded-2xl text-center cursor-pointer hover:bg-white/5 transition-colors">
            <Camera className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <span className="opacity-80">Click to upload photo</span>
            <input type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
          </label>
        </div>
        <div className="aspect-[3/4] bg-white/10 rounded-3xl border border-white/20 overflow-hidden relative flex flex-col items-center justify-center p-6 text-center">
          {photo ? (
            <>
              <img src={photo} alt="Uploaded" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
              <div className="relative z-10 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold mb-2">Happy Teacher's Day</h3>
                <p className="text-sm">Thank you for all the memories!</p>
              </div>
            </>
          ) : (
            <p className="opacity-40">Preview will appear here</p>
          )}
        </div>
      </div>
    </section>
  );
}
