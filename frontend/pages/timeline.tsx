'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const timelineData = [
  {
    year: '2021',
    title: 'Graduated 🎓',
    details: [
      'Completed Bachelor of Engineering in Computer Science with distinction.',
      'Built a facial recognition–based attendance system as my final project.',
      'Started internship at XYZ Firm, contributing to backend automation.'
    ],
    video: '/videos/timeline/2021.mp4'
  },
  {
    year: '2022',
    title: 'Started Career 💼',
    details: [
      'Joined Dassault Systèmes as a Business Process Expert.',
      'Worked extensively on ETL pipelines and automated reporting systems.',
      'Integrated and deployed cloud architecture using GCP and AWS services.'
    ],
    video: '/videos/timeline/2022.mp4'
  },
  {
    year: '2023',
    title: 'Upskilling 📚',
    details: [
      'Started Master in Management Engineering to gain business insight.',
      'Enrolled in Le Wagon’s AI Bootcamp to solidify my skills in Data Science.',
      'Began mentoring juniors in Python and SQL.'
    ],
    video: '/videos/timeline/2021.mp4'
  },
  {
    year: '2024',
    title: 'Started Career 💼',
    details: [
      'Joined Dassault Systèmes as a Business Process Expert.',
      'Worked extensively on ETL pipelines and automated reporting systems.',
      'Integrated and deployed cloud architecture using GCP and AWS services.'
    ],
    video: '/videos/timeline/2022.mp4'
  },
  {
    year: '2025',
    title: 'Upskilling 📚',
    details: [
      'Started Master in Management Engineering to gain business insight.',
      'Enrolled in Le Wagon’s AI Bootcamp to solidify my skills in Data Science.',
      'Began mentoring juniors in Python and SQL.'
    ],
    video: '/videos/timeline/2021.mp4'
  }
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInView = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Layout>
      <video
        key={timelineData[currentIndex].year}
        src={timelineData[currentIndex].video}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover opacity-10 z-0 pointer-events-none transition-opacity duration-700"
      />

      <div className="relative z-10">
        {timelineData.map((milestone, index) => (
          <motion.section
            key={milestone.year}
            className="min-h-[100vh] flex items-center justify-center pt-20 px-6 md:px-20"
            initial={{ opacity: 0, x: 200, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -200, y: -200, scale: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onViewportEnter={() => handleInView(index)}
          >
            <div className="w-full max-w-4xl text-center space-y-6">
              <h2 className="text-5xl font-bold text-accent">{milestone.year}</h2>
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">{milestone.title}</h3>
              <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
                {milestone.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>
    </Layout>
  );
}
