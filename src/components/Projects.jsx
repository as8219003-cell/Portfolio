import { useState } from "react";
import Tilt from "react-parallax-tilt";
import "./Projects.css";

import p1 from "../assets/projects/project1.jpg";
import p2 from "../assets/projects/project2.jpg";
import p3 from "../assets/projects/project3.jpg";
import p4 from "../assets/projects/project4.jpg";

const projectData = [
  {
    id: 1,
    title: "E-Commerce App",
    category: "FullStack",
    image: p1,
    live: "https://e-commerce-two-iota-63.vercel.app",
    github: "https://github.com/as8219003-cell",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    id: 2,
    title: "Hand Motion Jarvis",
    category: "Frontend",
    image: p2,
    live: "https://hand-motion-jarvis.vercel.app",
    github: "https://github.com/as8219003-cell",
    tech: ["React", "CSS"],
  },
  {
    id: 3,
    title: "Coffee-Shop",
    category: "Frontend",
    image: p3,
    live: "https://coffee-shop-flame-pi.vercel.app",
    github: "https://github.com/as8219003-cell",
    tech: ["React", "Framer Motion", "CSS"],
  },
  {
    id: 4,
    title: "Eco-learn",
    category: "FullStack",
    image: p4,
    live: "https://eco-learn-n84i.vercel.app",
    github: "https://github.com/as8219003-cell",
    tech: ["Node", "Express", "MongoDB", "JWT"],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-title">
        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
          >
            <div
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img src={project.image} alt={project.title} />

              <div className="overlay">
                <h3>{project.title}</h3>

                <div className="tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className="buttons">
                  <button onClick={() => setSelected(project)}>Preview</button>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelected(null)}>
              X
            </span>
            <h2>{selected.title}</h2>
            <iframe
              src={selected.live}
              title="Live Preview"
              width="100%"
              height="400px"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
