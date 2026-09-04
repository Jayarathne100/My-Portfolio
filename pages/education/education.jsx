
import React from "react";
import styles from "./education.module.css";

const educationData = [
  {
    id: 1,
    institution: "Esoft Metro College – Matale",
    program: "Diploma in Information Technology",
    period: "Apr 2023 – Jan 2024",
    status: "Completed",
    description:
      "Built a foundation in programming, software development, networking, databases, and computer hardware.",
    highlights: [
      "Programming Fundamentals",
      "Database Fundamentals",
      "Networking",
      "Software Development",
    ],
  },
  {
    id: 2,
    institution: "Esoft UNI – Kandy",
    program: "Pearson BTEC HND in Software Engineering",
    period: "Mar 2024 – Aug 2025",
    status: "Completed",
    description:
      "Developed practical software engineering skills through full-stack applications, database systems, software design, APIs, and development projects.",
    highlights: [
      "Full-Stack Development",
      "Software Engineering",
      "Database Design",
      "Web Application Development",
    ],
  },
  {
    id: 3,
    institution: "Esoft UNI – Kandy",
    program: "BSc (Hons) in Data Science",
    period: "2025 – Present",
    status: "Ongoing",
    description:
      "Currently developing knowledge in data science, machine learning, data analytics, and AI while strengthening my software engineering background.",
    highlights: [
      "Data Science",
      "Machine Learning",
      "Data Analytics",
      "Artificial Intelligence",
    ],
  },
];

const Education = () => {
  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.container}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>EDUCATION</span>

          <h1 className={styles.title}>
            Academic <span>Journey</span>
          </h1>

          <p className={styles.subtitle}>
            Building a strong foundation in software engineering while
            expanding my knowledge in data science, machine learning, and AI.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {educationData.map((education, index) => (
            <article
              className={styles.timelineItem}
              key={education.id}
            >
              {/* Timeline Line */}
              <div className={styles.timelineMarker}>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              {/* Education Card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <span className={styles.period}>
                      {education.period}
                    </span>

                    <h2>{education.program}</h2>

                    <h3>{education.institution}</h3>
                  </div>

                  <span
                    className={`${styles.status} ${
                      education.status === "Ongoing"
                        ? styles.ongoing
                        : styles.completed
                    }`}
                  >
                    <span className={styles.statusDot}></span>
                    {education.status}
                  </span>
                </div>

                <p className={styles.description}>
                  {education.description}
                </p>

                {/* Academic Focus */}
                <div className={styles.highlights}>
                  {education.highlights.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span>Software Engineering</span>
          <span>+</span>
          <span>Data Science</span>
          <span>+</span>
          <span>Continuous Learning</span>
        </div>

      </div>
    </section>
  );
};

export default Education;
