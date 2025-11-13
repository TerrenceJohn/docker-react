import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Git",
    "Docker",
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Technical Skills</h1>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
