import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'elegant-gold' | 'classroom' | 'chalkboard' | 'flowers' | 'modern-minimal' | 'cartoon';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('elegant-gold');

  useEffect(() => {
    // Optional: apply classes to body or a wrapper based on theme
    document.body.className = `teacher-day-2026-theme-${theme}`;
    return () => {
      document.body.className = '';
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
