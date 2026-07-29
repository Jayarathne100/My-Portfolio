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
        <p className={style.tag}>ABOUT ME</p>

        <h1 className={style.title}>Building Modern Digital Experiences</h1>

        <p className={style.description}>
          Aspiring <span>Software Engineer</span>  with hands-on experience in React.js,
          Node.js, Java, and mobile application development through academic and
          personal projects. Passionate about building user-friendly
          applications, learning new technologies, and contributing to
          collaborative software development teams. Seeking an internship or
          entry-level software engineering opportunity to apply and expand my
          technical skills.
        </p>

        <p className={style.description}>
          My goal is to bridge technology and creativity by building solutions
          that are not only functional but also impactful, modern, and
          user-centered.
        </p>

        <div className={style.actions}>
          <button className={style.downloadBtn} onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
