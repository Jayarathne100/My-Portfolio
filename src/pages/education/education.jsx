import React from "react";
import styles from "./education.module.css";

const Education = () => {
  const educationData = [
    {
      institution: "Esoft Metro College - Matale",
      program: "Diploma in Information Technology",
      period: "2023-04-30 to 2024-01-15",
      description:
        "Successfully completed the Diploma in Information Technology with a strong foundation in software and hardware concepts.",
    },
    {
      institution: "Esoft UNI - Kandy",
      program: "Pearson BTEC HND in Software Engineering",
      period: "2024-03-25 to 2025-08-31",
      description:
        "Completed the Pearson BTEC Higher National Diploma in Computer Science specialized in Software Engineering.",
    },
    {
      institution: "Esoft UNI - Kandy",
      program: "BSc (Hons) in Data Science",
      period: "Ongoing",
      description:
        "Currently pursuing the Bachelor of Science Honours Degree in Data Science.",
    },
  ];

  return (
    <section className={styles.educationSection}>
      <h1 className={styles.sectionTitle}>University Education</h1>
      <div className={styles.educationList}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationCard}>
            <h2 className={styles.educationInstitution}>{edu.institution}</h2>
            <p className={styles.educationProgram}>{edu.program}</p>
            <p className={styles.educationPeriod}>{edu.period}</p>
            <p className={styles.educationDescription}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
