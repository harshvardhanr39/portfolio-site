// timeline.tsx
'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timelineData = [
  {
    year: '2021',
    title: 'Graduated 🎓',
    details: [
      'Completed B.E. in Computer Science',
      'Built final year project with facial recognition',
      'Started internship at XYZ Firm'
    ],
    video: '/videos/tech-glow.mp4'
  },
  {
    year: '2022',
    title: 'Started Career 💼',
    details: [
      'Joined Dassault Systèmes',
      'Worked on ETL pipelines',
      'Introduced cloud architecture with GCP/AWS'
    ],
    video: '/videos/data-circuit.mp4'
  },
  {
    year: '2023',
    title: 'Upskilling 📚',
    details: [
      'Began Master in Management Engineering',
      'Started Le Wagon Bootcamp (AI track)',
      'Became Python & SQL mentor for juniors'
    ],
    video: '/videos/code-matrix.mp4'
  }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInView = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <main
      className="relative min-h-screen bg-background text-textPrimary overflow-hidden"
      ref={containerRef}
    >
      {/* Background Video */}
      <video
        key={timelineData[currentIndex].year}
        src={timelineData[currentIndex].video}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Timeline Content */}
      <div className="relative z-10 py-20 px-6 max-w-4xl mx-auto space-y-32">
        {timelineData.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="space-y-4 border-l-4 border-accent pl-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => handleInView(index)}
          >
            <h2 className="text-3xl text-accent font-bold">{milestone.year}</h2>
            <h3 className="text-xl font-semibold">{milestone.title}</h3>
            <ul className="list-disc list-inside text-textSecondary space-y-1">
              {milestone.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
