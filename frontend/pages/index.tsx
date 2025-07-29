'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import {
  FcClock,
  FcBriefcase,
  FcContacts,
  FcFile,
  FcCalendar,
  FcAbout,
} from 'react-icons/fc';

import BackgroundIcons from '@/components/BackgroundTechIcons';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { icon: <FcAbout size={20} />, label: 'About Me', href: '/AboutMe' },
    { icon: <FcClock  size={20} />, label: 'Timeline', href: '/timeline' },
    { icon: <FcBriefcase size={20}/>, label: 'Projects', href: '/projects' },
    { icon: <FcFile size={20}/>, label: 'Resume', href: '/resume' },
    { icon: <FcContacts size={20}/>, label: 'Contact', href: '/contact' },
    { icon: <FcCalendar size={20}/>, label: 'Schedule', href: '/schedule' },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className="bg-gray-100 border-r border-gray-300 p-4 transition-all duration-300 z-30 shadow-md"
        style={{ width: isSidebarOpen ? '180px' : '60px' }}
      >
        <button
          className="mb-10 text-black hover:text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={28} />
        </button>

        <nav className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-4 text-xs hover:text-blue-600 transition-colors duration-200"
            >
              {item.icon}
              <span
                className={`transition-opacity duration-200 ease-in-out ${
                  isSidebarOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <div className="relative flex-1 overflow-auto p-6 sm:p-10 md:p-16 xl:p-20">
        {/* Blog Section (Right Fixed) */}
        <section className="hidden lg:block fixed top-10 right-6 w-72 xl:w-80 z-10">
          <div className="flex flex-col gap-3 animate-scroll-vertical max-h-80 overflow-hidden">
            {[1, 2, 3].map((id) => (
              <div 
                key={id} 
                className="bg-gray-50 p-3 rounded-lg shadow-sm border"
              >
                <h4 className="text-base font-medium text-blue-700">
                  Blog Post Title {id}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  This is a short snippet from the blog post number {id}...{' '}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    Read more
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* Main Content */}
        <main className="max-w-7xl mx-auto">
          <section className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
            {/* Avatar with Circle */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64">
              {/* Decorative Circle */}
              <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse" />
              {/* Actual Avatar */}
              <Image
                src="/images/Avatar_2.png"
                alt="Harshvardhan Singh Rathore"
                layout="fill"
                className="rounded-full object-cover relative z-10"
              />
            </div>
            {/* Summary */}
            <div className="text-left max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-800 mb-6">
                Harshvardhan Singh Rathore
              </h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                I’m Harshvardhan, a dedicated Data Engineer passionate about building
                scalable data systems and working with cloud infrastructure. I specialize
                in Python, SQL, and modern ETL tools to turn raw data into valuable
                insights.
              </motion.p>
            </div>
          </section>
        </main>


        {/* Projects Section */}
        <section className="absolute bottom-0 left-0 w-full bg-white px-4 sm:px-8 py-4 border-t">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Projects</h3>
          <div className="overflow-x-auto whitespace-nowrap space-x-4 flex animate-scroll-horizontal">
            {[1, 2, 3, 4, 5].map((id) => (
              <div
                key={id}
                className="inline-block bg-white rounded-lg shadow-md w-40 sm:w-44 md:w-48 min-w-[10rem] flex-shrink-0"
              >
                <img
                  src={`/images/project-${id}.jpg`}
                  alt={`Project ${id}`}
                  className="w-full h-20 sm:h-24 object-cover rounded-t-lg"
                />
                <div className="p-2">
                   <h4 className="text-sm sm:text-base font-medium text-gray-800">
                      Project {id}
                    </h4>
                  </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>

  );
}
