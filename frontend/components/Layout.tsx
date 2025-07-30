'use client';

import { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AtomBackground from './AtomBackground';
import {
  FaMoon,
  FaSun,
  FaBlog,
  FaLinkedin,
  FaChevronLeft,
  FaGithub,
  FaTwitter,
  FaBars,
  FaUser,
  FaRegClock,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
} from 'react-icons/fa';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { label: 'About', href: '/', icon: <FaUser /> },
  { label: 'Timeline', href: '/timeline', icon: <FaRegClock /> },
  { label: 'Projects', href: '/projects', icon: <FaBriefcase /> },
  { label: 'Blogs', href: '/blogs', icon: <FaBlog /> },
  { label: 'Resume', href: '/resume', icon: <FaFileAlt /> },
  { label: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [hasMounted, setHasMounted] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      setTheme('light');
    }
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, hasMounted]);

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 flex">
      <AtomBackground />

      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 transform -translate-y-1/2 transition-all duration-500 z-30
        ${sidebarVisible ? 'left-4 opacity-100' : '-left-64 opacity-0'}`}
      >
        <div className="w-20 bg-white dark:bg-gray-800 rounded-full shadow-md py-6 px-2 flex flex-col items-center gap-6">
          {navItems.map(({ label, href, icon }) => {
            const isActive = pathname === href;
            const textColor = isActive
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-300';
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center text-xs gap-1 transition-colors"
              >
                <span className={`${textColor} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                  {icon}
                </span>
                <span className={`${textColor} hover:text-purple-600 dark:hover:text-purple-400 transition-colors`}>
                  {label}
                </span>
              </Link>
            );
          })}

          {/* Collapse Button */}
          <button
            onClick={() => setSidebarVisible(false)}
            className="mt-2 p-2 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            title="Hide Sidebar"
          >
            <FaChevronLeft size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 relative w-full">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <div className="top-4 flex items-center gap-3">
            <button
              onClick={() => setSidebarVisible(!sidebarVisible)}
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md z-40"
            >
              <FaBars size={18} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-md z-40"
            >
              {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>
          </div>

          {/* Social Icons */}
          <div className="w-full flex justify-center mt-4 z-40">
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-gray-700 dark:text-gray-300"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
