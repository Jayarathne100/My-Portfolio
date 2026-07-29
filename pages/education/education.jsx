import React from "react";
import styles from "./education.module.css";

const educationData = [
  {
    id: 1,
    institution: "Esoft Metro College - Matale",
    program: "Diploma in Information Technology",
    period: "Apr 2023 - Jan 2024",
    description:
      "Successfully completed the Diploma in Information Technology with strong knowledge in software development, networking, and hardware fundamentals.",
    status: "Completed",
  },
  {
    id: 2,
    institution: "Esoft UNI - Kandy",
    program: "Pearson BTEC HND in Software Engineering",
    period: "Mar 2024 - Aug 2025",
    description:
      "Completed Pearson BTEC Higher National Diploma specializing in Software Engineering, covering full-stack development and software design principles.",
    status: "Completed",
  },
  {
    id: 3,
    institution: "Esoft UNI - Kandy",
    program: "BSc (Hons) in Data Science",
    period: "2025 - Present",
    description:
      "Currently pursuing a Bachelor of Science Honours Degree in Data Science, focusing on machine learning, analytics, and AI.",
    status: "Ongoing",
  },
];

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <h1 className={styles.sectionTitle}>Education Journey</h1>
      <p className={styles.sectionSubtitle}>
        My academic path in technology and data science
      </p>

      <div className={styles.timeline}>
        {educationData.map((edu) => (
          <div key={edu.id} className={styles.card}>
            <div className={styles.dot}></div>

            <div className={styles.content}>
              <span
                className={`${styles.badge} ${
                  edu.status === "Ongoing" ? styles.ongoing : styles.completed
                }`}
              >
                {edu.status}
              </span>

              <h2>{edu.institution}</h2>
              <h3>{edu.program}</h3>
              <p className={styles.period}>{edu.period}</p>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;