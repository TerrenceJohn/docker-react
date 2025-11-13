import React from "react";
import "../styles/Project.css";

export default function Projects() {
  const projects = [
    {
      title: "FitnessFrontier",
      description:
        "A fitness e-commerce website built using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Aura Tech",
      description: "A tech solutions website with clean, responsive UI.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Library Management System",
      description: "A Library Management System created with JAVA.",
      tech: ["Java", "MySQL"],
    },
    {
      title: "Learning Management System",
      description: "A Learning Management System utilizing JAVA.",
      tech: ["Java", "MySQL"],
    },
    {
      title: "POS System",
      description: "A Point of Sale System for inventory and sales management.",
      tech: ["Java", "MySQL"],
    },
    {
      title: "La Turon",
      description: "A modern web application showcasing Filipino delicacies.",
      tech: ["React", "CSS"],
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="header-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
