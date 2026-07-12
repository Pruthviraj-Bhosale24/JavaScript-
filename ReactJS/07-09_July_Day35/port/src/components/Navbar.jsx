// src/components/Navbar/Navbar.jsx

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Pruthvi.</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-btn">
        let's talk
      </a>
    </nav>
  );
}

export default Navbar;