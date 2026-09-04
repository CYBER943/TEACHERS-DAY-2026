import React from 'react';
import { useTheme, Theme } from '../context/ThemeContext';
import { X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

export default function ThemeCustomizer({ onClose }: Props) {
  const { theme, setTheme } = useTheme();

  const themes: { id: Theme; name: string; color: string }[] = [
    { id: 'elegant-gold', name: 'Elegant Gold', color: 'bg-slate-900' },
    { id: 'classroom', name: 'Classroom', color: 'bg-amber-100' },
    { id: 'chalkboard', name: 'Chalkboard', color: 'bg-green-900' },
    { id: 'flowers', name: 'Flowers', color: 'bg-rose-100' },
    { id: 'modern-minimal', name: 'Modern Minimal', color: 'bg-gray-100' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative text-gray-900">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold mb-6">Choose Theme</h3>
        <div className="grid grid-cols-2 gap-4">
          {themes.map(t => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); onClose(); }}
              className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${theme === t.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
            >
              <div className={`w-6 h-6 rounded-full border shadow-sm ${t.color}`} />
              <span className="font-medium">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
