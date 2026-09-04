import React from "react";
import style from "./heroSection.module.css";

function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CVSE.pdf";
    link.setAttribute("download", "Pinimal_Jayarathne_CV.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={style.heroSection_container}>
      <div className={style.heroCard}>

        {/* Section Label */}
        <p className={style.tag}>ABOUT ME</p>

        {/* Main Heading */}
        <h1 className={style.title}>
          Software Engineer Focused on
          <br />
          Building Practical Solutions
        </h1>

        {/* Introduction */}
        <p className={style.description}>
          I am a Software Engineering graduate with hands-on experience
          developing full-stack web applications, RESTful APIs, and
          database-driven systems.
        </p>

        {/* Technologies */}
        <div className={style.technologies}>
          <span>React.js</span>
          <span>Vite</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>Firebase</span>
        </div>

        {/* Project Experience */}
        <p className={style.description}>
          My project experience includes management systems, billing
          applications, vehicle marketplace platforms, and modern web
          interfaces.
        </p>

        {/* Current Education */}
        <div className={style.infoSection}>
          <p className={style.infoLabel}>CURRENTLY PURSUING</p>
          <h3 className={style.infoTitle}>
            BSc (Hons) in Data Science
          </h3>
        </div>

        {/* Interests */}
        <div className={style.infoSection}>
          <p className={style.infoLabel}>INTERESTED IN</p>

          <div className={style.interests}>
            <span>Software Engineering</span>
            <span>Full-Stack Development</span>
            <span>Data Science</span>
            <span>Machine Learning</span>
            <span>AI</span>
          </div>
        </div>

        {/* Download CV */}
        <div className={style.actions}>
          <button
            className={style.downloadBtn}
            onClick={handleDownload}
          >
            <span>↓</span>
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;