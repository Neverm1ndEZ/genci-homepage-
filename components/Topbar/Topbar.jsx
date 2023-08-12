'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const Topbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      <label className="flex items-center space-x-2">
        <span className="text-gray-400 dark:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1A85FF"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </span>
        <div className="relative inline-block w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-700">
          <input
            type="checkbox"
            className="absolute w-5 h-5 rounded-full bg-white dark:bg-gray-400 focus:outline-none appearance-none cursor-pointer transition-transform duration-300 ease-in-out transform translate-x-0 dark:translate-x-5"
            checked={currentTheme === 'dark'}
            onChange={() => {
              if (currentTheme === 'dark') {
                setTheme('light');
              } else {
                setTheme('dark');
              }
            }}
          />
        </div>
        <span className="text-gray-400 dark:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1A85FF"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </span>
      </label>
    );
  };

  return (
    <div className="flex items-center justify-around mx-auto fixed w-full z-10 top-0 h-20 pr-80 pl-20 bg-slate-300 dark:bg-gray-800 rounded-xl">
      <div className="max-w-3xl">
        <div className="relative flex w-full h-12 my-10 focus-within:shadow-lg bg-[#fff] dark:bg-[#0D0D0D] overflow-hidden rounded-full">
          <div className="flex items-center mx-3 h-full w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-screen outline-none mx-5 text-sm bg-[#fff] dark:bg-[#0D0D0D] pr-2"
            type="text"
            id="search"
            placeholder="Search Courses, Documents, Activities..."
          />
        </div>
      </div>
      {renderThemeChanger()}
    </div>
  );
};

export default Topbar;
