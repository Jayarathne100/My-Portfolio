import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./contentSection.module.css";
import profileImg from "./my.png";

const TITLES = [
  "Software Engineer Intern",
  "Full Stack Developer",
  "Web Application Developer",
];

function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className={style.rotatingTitle}>
      Aspiring <span>{TITLES[index]}</span>
    </h2>
  );
}

function ContentSection() {
  return (
    <section className={style.contentSection_container}>
      <div className={style.contentCard}>

        {/* Left - Profile Image */}
        <div className={style.imageContent}>
          <div className={style.imageWrapper}>
            <img
              src={profileImg}
              alt="Pinimal Jayarathne - Software Engineer"
              className={style.profileImage}
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className={style.textContent}>

          <p className={style.greeting}>
            Hello, I'm
          </p>

          <h1 className={style.name}>
            PINIMAL JAYARATHNE
          </h1>

          <RotatingTitle />

          <p className={style.description}>
            Software engineering professional with hands-on experience
            building responsive web applications, RESTful APIs, and
            database-driven systems. I work across frontend and backend
            technologies to develop reliable, user-friendly solutions
            while continuously improving my software engineering and
            problem-solving skills.
          </p>

          {/* Buttons */}
          <div className={style.actions}>
            <Link to="/project" className={style.primaryButton}>
              View My Projects
              <span>→</span>
            </Link>

            <Link to="/contact" className={style.secondaryButton}>
              Let's Connect
              <span>↗</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContentSection;