// src/components/Projects/Projects.jsx

import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Anime Archive",
      desc: "Modern anime website with search and responsive UI."
    },
    {
      title: "Expense Tracker",
      desc: "Track expenses and manage daily spending."
    },
    {
      title: "Netflix Clone ",
      desc: "Netflix home page clone using React "
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React."
    },
     {
      title: "Weather app",
      desc: "Weather website using Html , css , Javasripts and API"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">
          My Projects
        </h2>

        <div className="project-grid">

          {projects.map((project,index)=>(
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <button>
                View Project
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;