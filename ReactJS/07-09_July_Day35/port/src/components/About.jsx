// src/components/About/About.jsx
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-card">
            <h3>Who Am I?</h3>

            <p>
              I'm Pruthviraj Bhosale, an IT Diploma
              student passionate about Frontend
              Development and UI/UX Design.
            </p>

            <p>
              I enjoy building modern, responsive
              websites and continuously learning
              new technologies.
            </p>
          </div>

          <div className="about-card">
            <h3>Education</h3>

            <p>
              Diploma in Information Technology
            </p>

            <p>
              Currently learning MERN Stack
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;