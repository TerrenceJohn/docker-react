import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Terrence John Manlapaz</h1>
      <h2>Aspiring Full Stack Developer</h2>
      <p>
        I’m passionate about creating clean, user-friendly applications and
        exploring modern web technologies. Welcome to my portfolio — feel free
        to check my projects and skills!
      </p>

      <div className="info-section">
        <div className="info-card">
          <h3>🎓 Education</h3>
          <p>
            BS Computer Science — Pamantasan ng Cabuyao
          </p>
          <p>Focused on software development, algorithms, and data structures.</p>
        </div>

        <div className="info-card">
          <h3>💼 Projects</h3>
          <p>
            - <strong>AuraTech:</strong> E-commerce website built with React and Node.js. <br />
            - <strong>La Turon:</strong> Business plan for a healthy Filipino snack product. <br />
            - <strong>POS System:</strong> Library and inventory management using Java GUI.
          </p>
        </div>

        <div className="info-card">
          <h3>🧠 Skills</h3>
          <p>
            JavaScript (React), Java (OOP, GUI), MySQL, Git, HTML/CSS, Docker
          </p>
        </div>

        <div className="info-card">
          <h3>📩 Contact</h3>
          <p>Email: terrencemanlapaz@gmail.com</p>
          <p>GitHub: <a href="https://github.com/TerrenceJohn" target="_blank" rel="noreferrer">github.com/TerrenceJohn</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
