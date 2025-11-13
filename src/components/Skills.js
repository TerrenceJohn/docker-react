import React from "react";
import "../styles/Skills.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Docker", "Java"];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Technical Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}