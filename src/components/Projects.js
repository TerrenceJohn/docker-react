import React from "react";
import "./styles/Projects.css";

export default function Projects() {
  const projects = [
    { title: "FitnessFrontier", desc: "A fitness e-commerce website built using HTML, CSS, and JavaScript." },
    { title: "AuraTech", desc: "A tech solutions website with clean, responsive UI." },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
