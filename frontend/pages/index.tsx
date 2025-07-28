'use client';
import { useEffect, useState } from "react";
import BlueprintAvatar from '../components/BlueprintAvatar';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-8 space-y-10">
      {/* 3D Hero Section */}
      <section className="h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-xl">
        <div className="w-full h-full">
          <BlueprintAvatar />
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <ul className="space-y-2">
          {projects.map(project => (
            <li key={project.id} className="bg-gray-800 p-4 rounded-lg">
              <strong className="text-blue-400">{project.title}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
