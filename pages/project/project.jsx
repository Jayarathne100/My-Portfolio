import React from "react";
import styles from "./project.module.css";

import img01 from "./img/img01.png";
import img02 from "./img/img02.png";
import img03 from "./img/img03.png";
import img04 from "./img/img04.png";
import img05 from "./img/img05.png";

const projects = [
  {
    id: 1,
    image: img03,
    category: "Full Stack",
    name: "Phone Business Management System",
    description:
      "A full-stack business management application designed to manage mobile products, inventory, sales, billing, and business operations through a centralized system.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Product & inventory management",
      "Sales and billing management",
      "RESTful API integration",
      "JWT-based authentication",
    ],
    links: {
      frontend: "https://github.com/Jayarathne100/Mobile_front.git",
      backend: "https://github.com/Jayarathne100/Mobile-API-.git",
      video: "/videos/Mobile.mp4",
    },
  },

  {
    id: 2,
    image: img04,
    category: "Full Stack",
    name: "Vehicle Marketplace – User Platform",
    description:
      "A full-stack vehicle marketplace that enables users to browse vehicles, view detailed information, manage accounts, and submit vehicle inquiries through an intuitive interface.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Vehicle browsing and search",
      "Vehicle detail pages",
      "User account management",
      "Vehicle inquiry functionality",
    ],
    links: {
      frontend: "https://github.com/Jayarathne100/Car-Sale-User.git",
      backend: "https://github.com/Jayarathne100/Car-Sale-BackAPi.git",
      video: "/videos/carSale.mp4",
    },
  },

  {
    id: 3,
    image: img05,
    category: "Full Stack",
    name: "Vehicle Marketplace – Admin Dashboard",
    description:
      "An administrative management system developed to manage vehicles, users, inquiries, and platform operations through a secure dashboard.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Vehicle management",
      "User management",
      "Inquiry management",
      "Administrative dashboard",
    ],
    links: {
      frontend: "https://github.com/Jayarathne100/Car-Sale-Admin.git",
      backend: "https://github.com/Jayarathne100/Car-Sale-BackAPi.git",
      video: "/videos/carSale.mp4",
    },
  },

  {
    id: 4,
    image: img02,
    category: "Frontend",
    name: "Viso Challenge Website",
    description:
      "A responsive frontend application developed to demonstrate modern UI implementation, responsive layouts, component-based development, and cross-device compatibility.",
    technologies: ["React", "JavaScript", "CSS", "Bootstrap"],
    features: [
      "Responsive design",
      "Reusable components",
      "Mobile-first interface",
      "Cross-device compatibility",
    ],
    links: {
      github: "https://github.com/Jayarathne100/Viso_Challenge.git",
      demo: "https://vision-challenge-86c71.web.app/",
    },
  },

  {
    id: 5,
    image: img01,
    category: "Frontend",
    name: "Developer Portfolio",
    description:
      "A responsive personal portfolio designed to showcase software engineering projects, technical skills, education, and professional development.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "MUI"],
    features: [
      "Responsive UI",
      "Component-based architecture",
      "Project showcase",
      "Modern navigation",
    ],
    links: {
      github: "https://github.com/Jayarathne100/My-Portfolio.git",
    },
  },
];

function Project() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>MY WORK</span>

          <h2>
            Projects I’ve <span>Built</span>
          </h2>

          <p>
            A selection of software projects demonstrating my experience in
            frontend development, backend engineering, REST APIs, databases,
            authentication, and responsive application development.
          </p>
        </div>

        {/* Project Grid */}
        <div className={styles.project_grid}>
          {projects.map((project) => (
            <article className={styles.project_card} key={project.id}>
              {/* Project Image */}
              <div className={styles.image_wrapper}>
                <img
                  src={project.image}
                  alt={`${project.name} project`}
                  loading="lazy"
                />

                <span className={styles.category}>
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className={styles.card_content}>
                <h3>{project.name}</h3>

                <p className={styles.description}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Features */}
                <div className={styles.features}>
                  <h4>Key Contributions</h4>

                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className={styles.links}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primary_link}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.links.frontend && (
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Front-End ↗
                    </a>
                  )}

                  {project.links.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Back-End ↗
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.links.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo Video ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;