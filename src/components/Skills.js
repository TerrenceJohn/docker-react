import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Docker", "Java"];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((s, i) => (
          <span key={i} className="skill-item">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
