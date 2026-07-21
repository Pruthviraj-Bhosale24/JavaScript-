// src/components/Skills/Skills.jsx

import "./Skills.css";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "C++",
    "C",
    "Python",
    "MySQL",
    "Responsive Design"
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          My Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill,index)=>(
            <div
              className="skill-card"
              key={index}
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;