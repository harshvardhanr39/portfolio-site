'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import Layout from '@/components/Layout';
import SectionWrapper from '@/components/SectionWrapper';

const timelineData = [
  {
    year: '2021',
    title: 'Graduated 🎓',
    details: [
      'Completed B.E. in Computer Science',
      'Built final year project with facial recognition',
      'Started internship at XYZ Firm'
    ]
  },
  {
    year: '2022',
    title: 'Started Career 💼',
    details: [
      'Joined Dassault Systèmes',
      'Worked on ETL pipelines',
      'Introduced cloud architecture with GCP/AWS'
    ]
  },
  {
    year: '2023',
    title: 'Upskilling 📚',
    details: [
      'Began Master in Management Engineering',
      'Started Le Wagon Bootcamp (AI track)',
      'Became Python & SQL mentor for juniors'
    ]
  }
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInView = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Layout>
      
    </Layout>
  );
}
