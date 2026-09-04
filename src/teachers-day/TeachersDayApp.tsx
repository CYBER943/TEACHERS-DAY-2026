import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import EventShell from './EventShell';

interface TeachersDayAppProps {
  onClose?: () => void;
}

export default function TeachersDayApp({ onClose }: TeachersDayAppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <EventShell onClose={onClose} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
