import React, { useState, useEffect } from 'react';
import TeachersDayApp from './teachers-day/TeachersDayApp';

export default function App() {
  const [isTeachersDay, setIsTeachersDay] = useState(false);
  const [forceShow, setForceShow] = useState(false); // For development testing

  useEffect(() => {
    const checkDate = () => {
      const now = new Date();
      // Teacher's Day: September 5, 2026
      // Month is 0-indexed, so 8 is September
      const isSept5 = now.getFullYear() === 2026 && now.getMonth() === 8 && now.getDate() === 5;
      setIsTeachersDay(isSept5);
    };

    checkDate();
    const interval = setInterval(checkDate, 1000 * 60); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (isTeachersDay || forceShow) {
    return <TeachersDayApp onClose={() => setForceShow(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Original Website</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is the original content of the website. It remains unchanged outside of special events.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">Services</h3>
            <p className="text-blue-700 text-sm">We offer a variety of services for our customers year-round.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="font-semibold text-green-900 mb-2">About Us</h3>
            <p className="text-green-700 text-sm">Learn more about our mission and vision.</p>
          </div>
        </div>
        
        {/* Development Helper: Remove in production or keep hidden */}
        <button 
          onClick={() => setForceShow(true)}
          className="mt-12 text-xs text-gray-400 hover:text-gray-600 underline"
        >
          [Dev Override: Preview Teacher's Day 2026 Event]
        </button>
      </div>
    </div>
  );
}
