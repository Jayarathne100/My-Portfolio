import React, { useState, useEffect } from "react";
import style from "./contentSection.module.css";
import profileImg from "./my.png";

const TITLES = [
  "Software Engineer",
  "React Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "UI/UX Designer",
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
      I'm passionate as a <span>{TITLES[index]}</span>
    </h2>
  );
}

function ContentSection() {
  return (
    <section className={style.contentSection_container}>
      <div className={style.contentCard}>
        {/* Profile Image */}
        <div className={style.imageContent}>
          <div className={style.imageWrapper}>
            <img
              src={profileImg}
              alt="Pinimal Jayarathne"
              className={style.profileImage}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={style.textContent}>
          <h1>Hello, I'm</h1>
          <h3 className={style.name}>Pinimal Jayarathne</h3>

          <RotatingTitle />

          <p>
            Passionate software developer focused on creating modern,
            responsive, and user-friendly web applications with beautiful
            interfaces and scalable backend solutions. I enjoy turning ideas
            into real-world digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;