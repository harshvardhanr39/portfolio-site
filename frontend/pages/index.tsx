'use client';
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
