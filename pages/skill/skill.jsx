import React from "react";
import style from "./skill.module.css";

function Skills() {
  const skillCategories = [
    {
      icon: "💻",
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "C#"],
    },
    {
      icon: "🎨",
      title: "Frontend Development",
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
      icon: "⚙️",
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "ASP.NET Core", "RESTful APIs"],
    },
    {
      icon: "🗄️",
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Oracle Database", "Firebase Firestore"],
    },
    {
      icon: "☁️",
      title: "Cloud & Deployment",
      skills: ["Firebase", "Vercel", "Render", "Netlify"],
    },
    {
      icon: "🛠️",
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    },
    {
      icon: "🏗️",
      title: "Software Engineering",
      skills: [
        "Object-Oriented Programming (OOP)",
        "Software Development Life Cycle (SDLC)",
      ],
    },
  ];

  return (
    <section className={style.skillsSection}>
      <div className={style.container}>
        <span className={style.badge}>MY SKILLS</span>

        <h1 className={style.title}>Technologies I Work With</h1>

        <p className={style.subtitle}>
          My technical stack and professional strengths that help me build
          modern, scalable, and user-focused software solutions.
        </p>

        <div className={style.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={style.skillCard}>
              <div className={style.cardHeader}>
                <span className={style.icon}>{category.icon}</span>
                <h2>{category.title}</h2>
              </div>

              <div className={style.skillList}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={style.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
