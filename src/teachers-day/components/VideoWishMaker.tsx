import React from 'react';
import { Play } from 'lucide-react';

export default function VideoWishMaker() {
  return (
    <section className="py-24 px-4 bg-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Video Wish Maker</h2>
        <p className="text-lg opacity-80 mb-12">Combine photos, text, and music into a video.</p>
        
        <div className="bg-black rounded-3xl overflow-hidden aspect-video relative flex items-center justify-center border border-white/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40" />
          <div className="text-center relative z-10">
            <button className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all backdrop-blur-md">
              <Play className="w-8 h-8 ml-1" />
            </button>
            <p className="text-sm opacity-60">* Frontend Prototype UI - No actual video rendering occurs</p>
          </div>
          
          {/* Mock Timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 border-t border-white/20 flex items-center px-4 gap-2">
            <div className="w-16 h-10 bg-white/20 rounded"></div>
            <div className="w-24 h-10 bg-white/20 rounded"></div>
            <div className="w-12 h-10 bg-white/20 rounded"></div>
            <div className="w-32 h-10 bg-blue-500/50 rounded ml-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
