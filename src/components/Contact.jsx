import { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>
            Let's <span>Connect</span>
          </h2>
          <p>
            Have an idea, collaboration, or project? Let’s build something
            impactful together.
          </p>

          <div className="contact-social">
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

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="floating-group">
              <input type="text" required />
              <label>Your Name</label>
            </div>

            <div className="floating-group">
              <input type="email" required />
              <label>Your Email</label>
            </div>

            <div className="floating-group">
              <textarea rows="4" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="send-btn">
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
