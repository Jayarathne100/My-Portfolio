
import React from "react";
import styles from "./skill.module.css";

const skillCategories = [
  {
    icon: "</>",
    title: "Programming",
    description: "Languages and programming concepts I use to build application logic.",
    skills: ["Java", "JavaScript", "Python", "C#"],
  },
  {
    icon: "UI",
    title: "Frontend Engineering",
    description: "Building responsive, reusable, and user-focused interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    icon: "API",
    title: "Backend Engineering",
    description: "Developing server-side applications and APIs for web systems.",
    skills: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "RESTful APIs",
    ],
  },
  {
    icon: "DB",
    title: "Databases",
    description: "Working with relational and NoSQL databases for application data.",
    skills: [
      "MongoDB",
      "MySQL",
      "Oracle Database",
      "Firebase Firestore",
    ],
  },
  {
    icon: "☁",
    title: "Cloud & Deployment",
    description: "Deploying and managing web applications using modern platforms.",
    skills: ["Firebase", "Vercel", "Render", "Netlify"],
  },
  {
    icon: "DEV",
    title: "Development Tools",
    description: "Tools and platforms used throughout the software development workflow.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    icon: "ENG",
    title: "Engineering Practices",
    description: "Core software engineering principles used when designing applications.",
    skills: [
      "Object-Oriented Programming",
      "SDLC",
      "CRUD Operations",
      "API Integration",
      "Responsive Design",
    ],
  },
];

function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>TECHNICAL SKILLS</span>

          <h1 className={styles.title}>
            Technologies & <span>Tools</span>
          </h1>

          <p className={styles.subtitle}>
            A practical technology stack developed through academic work,
            personal projects, and hands-on software development experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((category) => (
            <article
              className={styles.skillCard}
              key={category.title}
            >
              <div className={styles.cardTop}>
                <div className={styles.icon}>
                  {category.icon}
                </div>

                <div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <span
                    className={styles.skillTag}
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className={styles.skillsFooter}>
          <span>Always learning.</span>
          <span>Always building.</span>
          <span>Always improving.</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
