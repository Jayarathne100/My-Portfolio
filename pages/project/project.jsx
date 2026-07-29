import React from "react";
import style from "./project.module.css";

import img02 from "./img/img02.png";
import img03 from "./img/img03.png";
import img04 from "./img/img04.png";
import img06 from "./img/img06.png";

const projectSections = [
  {
    id: 1,
    title: "💻 Front-End Projects",
    projects: [
      {
        id: 101,
        image: img02,
        name: "Viso Challenge Website",
        desc: "Responsive practice project built for mobile and desktop experiences.",
        tech: "React / CSS / JavaScript / Bootstrap",
        github: "https://github.com/Jayarathne100/Viso_Challenge.git",
        demo: "https://vision-challenge-86c71.web.app/",
      },
      {
        id: 102,
        image: img06,
        name: "My Portfolio",
        desc: "Personal portfolio showcasing frontend and full-stack development work.",
        tech: "React / Tailwind / JavaScript / Bootstrap / MUI",
        github: "https://github.com/Jayarathne100/My-Portfolio.git",
        demo: "https://portfolio-se5633.web.app",
      },
    ],
  },

  {
    id: 2,
    title: "⚙️ Full Stack Projects",
    projects: [
      {
        id: 201,
        image: img03,
        name: "Phone Business Management",
        desc: "Business management platform with inventory, sales tracking, and analytics.",
        tech: "React / Tailwind / Node / MongoDB / JWT",
        front: "https://github.com/Jayarathne100/Mobile_front.git",
        back: "https://github.com/Jayarathne100/Mobile-API-.git",
      },

      {
        id: 202,
        image: img04,
        name: "Wholesale Website",
        desc: "Built a full-stack wholesale management system with product, inventory, sales, and customer management features.",
        tech: "React / CSS / JavaScript / Node / MongoDB",
        front: "https://github.com/Jayarathne100/WholeSale-Front.git",
        back: "https://github.com/Jayarathne100/WholeSale-Back.git",
      },
    ],
  },
];

function Project() {
  return (
    <section className={style.project_container}>
      {projectSections.map((section) => (
        <div key={section.id} className={style.section}>
          <h2 className={style.section_title}>{section.title}</h2>

          <div className={style.project_grid}>
            {section.projects.map((project) => (
              <div key={project.id} className={style.project_card}>
                <img src={project.image} alt={project.name} />

                <div className={style.card_content}>
                  <h3>{project.name}</h3>

                  <p>{project.desc}</p>

                  <span>{project.tech}</span>

                  <div className={style.links}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}

                    {project.front && (
                      <a href={project.front} target="_blank" rel="noreferrer">
                        Front-End
                      </a>
                    )}

                    {project.back && (
                      <a href={project.back} target="_blank" rel="noreferrer">
                        Back-End
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
