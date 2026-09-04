
import React from "react";
import styles from "./achivement.module.css";

import cert01 from "./Img/cert01.png";
import cert02 from "./Img/cert02.png";
import cert03 from "./Img/cert03.png";
import cert04 from "./Img/cert04.png";
import cert05 from "./Img/cert05.png";
import cert06 from "./Img/cert06.png";
import cert07 from "./Img/cert07.png";
import cert08 from "./Img/cert08.png";
import cert09 from "./Img/cert09.png";

const certificates = [
  {
    id: 1,
    image: cert01,
    title: "Certificate of Achievement",
    provider: "Professional Development",
  },
  {
    id: 2,
    image: cert02,
    title: "Technical Certification",
    provider: "Technology & Software",
  },
  {
    id: 3,
    image: cert03,
    title: "Software Development",
    provider: "Professional Development",
  },
  {
    id: 4,
    image: cert04,
    title: "Technical Certification",
    provider: "Technology & Software",
  },
  {
    id: 5,
    image: cert05,
    title: "Professional Certification",
    provider: "Professional Development",
  },
  {
    id: 6,
    image: cert06,
    title: "Technology Certification",
    provider: "Technology & Software",
  },
  {
    id: 7,
    image: cert07,
    title: "Professional Development",
    provider: "Continuous Learning",
  },
  {
    id: 8,
    image: cert08,
    title: "Technical Achievement",
    provider: "Technology & Software",
  },
  {
    id: 9,
    image: cert09,
    title: "Learning & Development",
    provider: "Continuous Learning",
  },
];

function Achievement() {
  return (
    <section className={styles.section} id="achievements">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            CREDENTIALS
          </span>

          <h1 className={styles.title}>
            Certifications & <span>Achievements</span>
          </h1>

          <p className={styles.subtitle}>
            Professional certifications and learning achievements that
            reflect my commitment to continuous technical growth and
            software engineering development.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className={styles.gallery}>
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />

                <div className={styles.viewLabel}>
                  View Certificate ↗
                </div>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.number}>
                  {String(certificate.id).padStart(2, "0")}
                </span>

                <div>
                  <h2>{certificate.title}</h2>
                  <p>{certificate.provider}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span>Continuous Learning</span>
          <span>•</span>
          <span>Technical Growth</span>
          <span>•</span>
          <span>Professional Development</span>
        </div>

      </div>
    </section>
  );
}

export default Achievement;
