import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import SectionWrapper from '@/components/SectionWrapper';
import Layout from '@/components/Layout';
import Button from '@/components/Button';

export default function Home() {
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <Layout>
      {/* Avatar Circle */}
      <div className="top-6 text-center relative">
        <div className="relative w-40 h-40 mx-auto mb-[-25px] z-20">
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden relative">
            <div className="relative w-40 h-40 rounded-full overflow-hidden -top-0">
              <Image
                src="/images/profile-pic.png"
                alt="Harshvardhan Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-extrabold mb-4">Harshvardhan Singh Rathore</h1>
          <h2 className="text-2xl font-medium">Data Engineer | Cloud | AI Enthusiast</h2>
          {/* 🧠 Summary */}
          <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Passionate Data Engineer with a background in Computer Science and Management Engineering.
            I specialize in building scalable data pipelines, cloud-native architectures, and AI-powered analytics
            to drive business decisions. Currently expanding my expertise through Le Wagon's AI Bootcamp.
          </p>
          <div className="flex justify-center mt-14">
            <Link href="/timeline">
              <Button>
                View Timeline →
              </Button>
            </Link>
        </div>
        </div>  
      </div>

      {/* 🚀 Featured Projects Section */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
            Featured Projects
          </h2>
          <p className="text-textSecondary text-center max-w-2xl mx-auto mb-6">
            Tools and technologies I’ve worked with across Data Engineering, Analytics, and Science — along with domains I’ve built impact in.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Image with hover zoom */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={`/images/project/project-${i}.png`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  Project Title {i}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  A short summary of what this project does and its impact. Built with modern technologies and best practices.
                </p>
                <Link
                  href={`/projects/project-${i}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View more →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <Link href="/projects">
              <Button>
                View All Projects →
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper>
        {/* Title and Intro */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-accent mb-4">Skills & Experience</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Tools and technologies I’ve worked with across Data Engineering, Analytics, and Science — along with domains I’ve built impact in.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mb-20">
          {[
            '/icons/python.svg',
            '/icons/sql.svg',
            '/icons/postgresql.svg',
            '/icons/aws.svg',
            '/icons/gcp.svg',
            '/icons/powerbi.svg',
            '/icons/tableau.svg',
            '/icons/docker.svg',
            '/icons/fastapi.svg',
            '/icons/pandas.svg',
            '/icons/sklearn.svg',
            '/icons/nextjs.svg',
          ].map((src, idx) => (
            <div
              key={idx}
              className="w-16 h-16 flex items-center justify-center rounded-xl shadow-md bg-white/70 dark:bg-white/10 backdrop-blur-sm transition-transform hover:scale-110 hover:shadow-lg"
            >
              <img src={src} alt="tech" className="h-10 w-10 object-contain" />
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="flex justify-center mt-14 mb-10">
          <Link href="/resume">
            <Button>View My Resume</Button>
          </Link>
        </div>


        {/* Experience Section */}
        <div className="flex flex-col items-center gap-10 mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Data Engineering',
                description: 'Built scalable ETL pipelines, automated workflows, and migrated infrastructure to cloud platforms.',
                icon: '/icons/etl.svg',
              },
              {
                title: 'Data Analytics',
                description: 'Created dashboards, ran KPI tracking, and improved reporting workflows using Power BI and Tableau.',
                icon: '/icons/analytics.svg',
              },
              {
                title: 'Data Science',
                description: 'Worked on predictive modeling, classification tasks, and advanced ML pipelines using Python.',
                icon: '/icons/ai.svg',
              },
            ].map((exp, idx) => (
              <div key={idx} className="text-center max-w-xs mx-auto">
                <img src={exp.icon} alt={exp.title} className="h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-accent mb-2">{exp.title}</h3>
                <p className="text-textSecondary text-sm">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Second row with 2 cards, center-aligned */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
            {[
              {
                title: 'Business Analytics',
                description: 'Collaborated with business teams to drive strategic decisions through data storytelling.',
                icon: '/icons/strategy.svg',
              },
              {
                title: 'Mentorship & Training',
                description: 'Mentored peers and juniors in Python, SQL, and Data Science at work and bootcamp.',
                icon: '/icons/mentor.svg',
              },
            ].map((exp, idx) => (
              <div key={idx} className="text-center max-w-xs mx-auto">
                <img src={exp.icon} alt={exp.title} className="h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-accent mb-2">{exp.title}</h3>
                <p className="text-textSecondary text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Contact Button */}
        <div className="flex justify-center mt-14">
          <Link href="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>

      </SectionWrapper>

    </Layout>
  );
}
