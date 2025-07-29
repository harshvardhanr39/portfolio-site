'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionWrapper({
  children,
  delay = 0,
  className = '',
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={`my-20 bg-white dark:bg-gray-800 py-6 rounded-2xl shadow-lg mx-auto w-[1000px] ${className}`}
    >
      <div className="px-0">
        {children}
      </div>
    </motion.section>
  );
}
