import React from "react";
import style from "./project.module.css";
import img01 from "./img/img01.png";
import img02 from "./img/img02.png";
import img03 from "./img/img03.png";
import img04 from "./img/img04.png";
import img05 from "./img/img05.png";

function Project() {
  return (
 <div className={style.project_container}>
  {/* ---------- UI/UX Section ---------- */}
  <div>
    <div className={style.project_uiux}>🎨 UI / UX Design</div>
    <div className={style.project_row}>
      <div className={style.project_box}>
        <img src={img01} alt="Facebook Design" />
        <h3>Facebook - Figma Design</h3>
        <p>A complete Facebook-inspired UI prototype created using Figma...</p>
        <p><b>Tech:</b> Figma</p>
        <button
          onClick={() => window.open("/figma_design.pdf", "_blank")}
          className={style.pdfButton}
        >
          View PDF
        </button>
      </div>
    </div>
  </div>

  {/* ---------- Front-End Section ---------- */}
  <div>
    <div className={style.Project_front}>💻 Front-End Projects</div>
    <div className={style.project_row}>
      <div className={style.project_box}>
        <img src={img02} alt="Viso Challenge Project" />
        <h3>Viso-Challenge Website</h3>
        <p>A responsive web interface designed for multi-device view...</p>
        <p><b>Tech:</b> React.js / CSS / JavaScript / Bootstrap</p>
        <a href="https://github.com/Jayarathne100/Viso_Challenge.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>

  {/* ---------- Full Stack Section ---------- */}
  <div>
    <div className={style.Project_fullstack}>⚙️ Full Stack Projects</div>
    <div className={style.project_row}>
      <div className={style.project_box}>
        <img src={img03} alt="Phone Management System" />
        <h3>Phone Business Management System</h3>
        <p>A full-stack business management platform with sales tracking...</p>
        <p><b>Tech:</b> React.js / Tailwind CSS / Node.js / MongoDB / JWT</p>
        <a href="https://github.com/Jayarathne100/Mobile_front.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* <a href="https://test-pof56p4gf-rasanajana20s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a> */}
      </div>
      <div className={style.project_box}>
        <img src={img04} alt="Local Photographer Website" />
        <h3>Local Photographer Webpage</h3>
        <p>A portfolio website developed for a local photographer...</p>
        <p><b>Tech:</b> React.js / CSS / JavaScript / Node.js / MongoDB</p>
        <a href="https://github.com/Jayarathne100/Photo-Front.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className={style.project_box}>
        <img src={img05} alt="Express Way Cloth Store" />
        <h3>Express Way Cloth Store</h3>
        <p>An ongoing e-commerce project for clothing items...</p>
        <p><b>Tech:</b> React.js (Ongoing)</p>
        <a href="#" onClick={(e) => e.preventDefault()}>GitHub</a>
        <a href="#" onClick={(e) => e.preventDefault()}>Live Demo</a>
      </div>
    </div>
  </div>
</div>

  );
}

export default Project;
