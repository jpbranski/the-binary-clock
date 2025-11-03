'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c6a44c] bg-transparent hover:bg-[#c6a44c] hover:bg-opacity-10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun className={`w-4 h-4 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100 text-[#c6a44c]' : 'opacity-40'}`} />
      <div className="relative w-10 h-5 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-[#c6a44c] rounded-full transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
      <Moon className={`w-4 h-4 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100 text-[#c6a44c]' : 'opacity-40'}`} />
    </button>
  );
}
