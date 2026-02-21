import "./Skills.css";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { useEffect, useState } from "react";

const Skills = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 20; // total projects
    if (start === end) return;

    let duration = 1000;
    let incrementTime = duration / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      {/* 🔢 Counter Stats */}
      <div className="stats">
        <div>
          <h3>{count}+</h3>
          <p>Projects</p>
        </div>
        <div>
          <h3>1+</h3>
          <p>Years Learning</p>
        </div>
        <div>
          <h3>100%</h3>
          <p>Dedication</p>
        </div>
      </div>

      {/* 🧠 Skill Cards */}
      <div className="skills-grid">
        <div className="skill-card">
          <FaReact className="icon" />
          <h3>React</h3>
          <div className="progress">
            <div className="progress-bar react"></div>
          </div>
        </div>

        <div className="skill-card">
          <FaNodeJs className="icon" />
          <h3>Node.js</h3>
          <div className="progress">
            <div className="progress-bar node"></div>
          </div>
        </div>

        <div className="skill-card">
          <SiMongodb className="icon" />
          <h3>MongoDB</h3>
          <div className="progress">
            <div className="progress-bar mongo"></div>
          </div>
        </div>

        <div className="skill-card">
          <SiJavascript className="icon" />
          <h3>JavaScript</h3>
          <div className="progress">
            <div className="progress-bar js"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
