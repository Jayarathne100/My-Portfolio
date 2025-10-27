import React from "react";
import style from "./heroSection.module.css";

function HeroSection() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; 
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className={style.heroSection_container}>
      <div className={style.heroSection_card}>
        <div className={style.heroSection_intro}>
          I am a passionate and versatile Software Engineer with expertise in
          React development, Full Stack Development, mobile application development, and UI/UX design,
          dedicated to building innovative, user-friendly, and scalable digital
          solutions. With a strong foundation in modern software engineering
          principles, I specialize in crafting high-performance web and mobile
          applications that seamlessly combine functionality with intuitive
          design. My experience spans across front-end development with React and
          React Native, backend integration, and delivering responsive,
          cross-platform solutions that enhance user engagement. As a UI/UX
          designer, I focus on understanding user behavior to create interfaces
          that are not only visually appealing but also highly interactive and
          accessible. With a problem-solving mindset and a commitment to
          continuous learning, I aim to bridge the gap between technology and user
          experience, ensuring that every product I develop delivers maximum
          impact and value.
        </div>
        <div className={style.heroSection_download}>
          <button onClick={handleDownload}>Download My CV</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
