'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaDownload,
  FaEnvelope,
  FaUser,
  FaCertificate,
  FaHeart
} from 'react-icons/fa';

interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  skills: Record<string, string[]>;
  experience: { title: string; company: string; period: string; points: string[] }[];
  education: { degree: string; institution: string; period: string }[];
  certifications: string[];
  interests: string[];
}

export default function ResumePage() {
  const [resume, setResume] = useState<ResumeData | null>(null);

  useEffect(() => {
    fetch('/data/resumeData.json')
      .then((res) => res.json())
      .then((data) => setResume(data));
  }, []);

  if (!resume) return <div className="p-10 text-lg">Loading...</div>;

  return (
    <Layout>
      {/* Download Button Top Left */}
      <div className="max-w-6xl mx-auto px-1 pt-6 flex justify-end">
        <a
          href="/files/CV_Harshvardhan Singh Rathore_DE.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent text-white hover:bg-accent/80 transition text-sm"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>


      <SectionWrapper>
        <main className="max-w-4xl mx-auto text-textPrimary relative">
          {/* Floating Avatar */}
          <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-36 h-36 rounded-full relative overflow-hidden bg-white dark:bg-gray-800">
              <Image
                src="/images/profile-pic.png"
                alt="Harshvardhan Avatar"
                width={266}
                height={266}
                className="object-cover"
              />
            </div>
          </div>

          {/* Header Info */}
          <div className="pt-24 text-center space-y-2">
            <h1 className="text-3xl font-bold">{resume.name}</h1>
            <p className="text-lg text-accent">{resume.title}</p>
            <p className="text-sm">
              {resume.location} • {resume.phone} •{' '}
              <a href={`mailto:${resume.email}`} className="text-blue-500 underline">
                {resume.email}
              </a>
            </p>
            <a href={resume.linkedin} target="_blank" className="text-sm text-blue-500 underline">
              LinkedIn
            </a>
          </div>

          {/* Resume Sections */}
          <div className="space-y-10 mt-10">
            {/* Summary */}
            <SectionCard icon={<FaUser />} title="Summary">
              <p className="text-textSecondary">{resume.summary}</p>
            </SectionCard>

            {/* Skills */}
            <SectionCard icon={<FaTools />} title="Skills">
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(resume.skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm mb-2 text-accent">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-muted rounded-full text-textSecondary border border-borderSecondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Experience */}
            <SectionCard icon={<FaBriefcase />} title="Experience">
              {resume.experience.map((exp, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-lg font-semibold text-accent">{exp.title}</h3>
                  <p className="text-sm text-textSecondary font-medium">{exp.company} • {exp.period}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-textSecondary">
                    {exp.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </SectionCard>

            {/* Education */}
            <SectionCard icon={<FaGraduationCap />} title="Education">
              <ul className="space-y-3 text-sm text-textSecondary">
                {resume.education.map((edu, i) => (
                  <li key={i}>
                    <strong>{edu.degree}</strong> – {edu.institution}{' '}
                    <span className="block italic">{edu.period}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Certifications */}
            <SectionCard icon={<FaCertificate />} title="Certifications">
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-textSecondary">
                {resume.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">●</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Interests */}
            <SectionCard icon={<FaHeart />} title="Interests">
              <div className="flex flex-wrap gap-3">
                {resume.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-muted border border-borderSecondary text-textSecondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Footer CTA */}
          <div className="flex justify-center pt-10">
            <Link
              href="/contact"
              className="text-accent underline text-sm flex items-center gap-2 hover:text-accent/80"
            >
              <FaEnvelope />
              Contact Me →
            </Link>
          </div>
        </main>
      </SectionWrapper>
    </Layout>
  );
}

function SectionCard({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted p-5 rounded-xl shadow-sm border border-borderSecondary relative z-10">
      {title && (
        <div className="flex items-center gap-3 mb-4">
          <div className="text-accent">{icon}</div>
          <h2 className="text-2xl font-semibold text-accent">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
}
