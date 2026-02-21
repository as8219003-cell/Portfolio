import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useEffect, useState } from "react";
import bg from "../assets/hero-bg.jpg";
import profile from "../assets/profile.jpg";
import "./Hero.css";
const roles = [
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 70);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hello, I'm <span className="gradient-text">Adarsh</span>
          </h1>

          <h2 className="typing">{text}</h2>

          <p>
            I create scalable, high-performance web applications with modern
            technologies and clean architecture.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">
              View Projects
            </a>
            <a href="#contact" className="hero-btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="image-wrapper">
            <img src={profile} alt="Adarsh" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
