import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">
          Frontend Developer
        </p>

        <h1>
          Hi, I'm <span>Pruthviraj</span>
        </h1>

        <h2>
          IT Diploma Student
        </h2>

        <p className="hero-desc">
          Passionate about creating modern,
          responsive and interactive web
          experiences using HTML, CSS,
          JavaScript and React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          PB
        </div>
      </div>
    </section>
  );
}

export default Hero;