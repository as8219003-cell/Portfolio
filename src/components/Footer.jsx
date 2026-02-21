import { useState, useEffect } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>
            Adarsh<span>.</span>
          </h2>
          <p>
            Full Stack Developer crafting scalable and interactive web
            experiences with modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Tech Stack */}
        <div className="footer-tech">
          <h4>Tech Stack</h4>
          <div className="tech-tags">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>Three.js</span>
            <span>Framer Motion</span>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Adarsh Kumar Prajapati. All rights
        reserved.
      </div>

      {/* Scroll To Top */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
