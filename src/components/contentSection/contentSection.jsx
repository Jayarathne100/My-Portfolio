import React, { useState, useEffect } from "react";
import style from "./contentSection.module.css";
import profileImg from "./my.png"; 

function RotatingTitle() {
  const titles = [
    "Software Engineer",
    "React Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return <p className={style.contentSection_title}>I'm passionate as a <span>{titles[index]}</span></p>;
}

function ContentSection() {
  return (
    <section className={style.contentSection_container}>
      <div className={style.contentCard}>
        <div className={style.imageContent}>
          <img src={profileImg} alt="Profile" className={style.profileImage} />
        </div>
        <div className={style.textContent}>
          <RotatingTitle />
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
