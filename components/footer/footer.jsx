import React from "react";
import styles from "./footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>

        {/* =========================
            GET IN TOUCH
        ========================= */}
        <section className={styles.cta}>
          <span className={styles.eyebrow}>
            GET IN TOUCH
          </span>

          <h2 className={styles.title}>
            Let's build something <span>meaningful.</span>
          </h2>

          <p className={styles.description}>
            I am currently seeking Software Engineering Internship
            opportunities where I can apply my development skills,
            contribute to real-world projects, and continue growing
            as a software engineer.
          </p>

          <a
            href="mailto:Pinimalrj123@gmail.com"
            className={styles.connectButton}
          >
            Let's Connect
            <span>↗</span>
          </a>
        </section>

        {/* =========================
            CONTACT CARDS
        ========================= */}
        <section className={styles.links}>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pinimal-jayarathne-3534892b0/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span className={styles.icon}>in</span>

            <span className={styles.cardContent}>
              <small>Professional Profile</small>
              <strong>LinkedIn</strong>
            </span>

            <span className={styles.arrow}>↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Jayarathne100"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}
          >
            <span className={styles.icon}>GH</span>

            <span className={styles.cardContent}>
              <small>Projects & Code</small>
              <strong>GitHub</strong>
            </span>

            <span className={styles.arrow}>↗</span>
          </a>

          {/* Email */}
          <a
            href="mailto:Pinimalrj123@gmail.com"
            className={styles.contactCard}
          >
            <span className={styles.icon}>@</span>

            <span className={styles.cardContent}>
              <small>Email</small>
              <strong>Send an Email</strong>
            </span>

            <span className={styles.arrow}>↗</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+94715908772"
            className={styles.contactCard}
          >
            <span className={styles.icon}>TEL</span>

            <span className={styles.cardContent}>
              <small>Phone</small>
              <strong>Contact Me</strong>
            </span>

            <span className={styles.arrow}>↗</span>
          </a>

        </section>

        {/* =========================
            BOTTOM
        ========================= */}
        <div className={styles.bottom}>

          <p>
            © {currentYear}{" "}
            <strong>Pinimal Jayarathne</strong>
          </p>

          <p>
            Software Engineer Intern
            <span> • </span>
            Full-Stack Developer
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;