import React from "react";
import "../styles/Project.css";

export default function Projects() {
  const projects = [
    { title: "FitnessFrontier", desc: "A fitness e-commerce website built using HTML, CSS, and JavaScript." },
    { title: "AuraTech", desc: "A tech solutions website with clean, responsive UI." },
    { title: "Library Management System", desc: "A Library Management System created with JAVA." },
    { title: "Learning Management System", desc: "A Learning Management System utilizing JAVA" },
    { title: "POS System", desc: "A Point of Sale System for inventory and sales management." },
    { title: "La Turon", desc: "A business plan for a healthy Filipino snack product." },
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
