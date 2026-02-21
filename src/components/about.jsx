import aboutImg from "../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-title" data-aos="fade-up">
          <h2>
            About <span>MySelf</span>
          </h2>
          <p> I am a Passionate Web Developer building modern experiences.</p>
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={aboutImg} alt="About" />
          </div>

          <div className="about-text" data-aos="fade-left">
            <h3>
              Hello, I am <span>Adarsh kumar Prajapati</span>
            </h3>
            <p>
              I build responsive and scalable web applications using modern
              technologies.
            </p>

            <div className="about-info">
              <p>
                <strong>Name:</strong> Adarsh Kumar Prajapati
              </p>
              <p>
                <strong>Age:</strong> 19
              </p>
              <p>
                <strong>Location:</strong> India
              </p>
              <p>
                <strong>Email:</strong> adarsh122004@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
