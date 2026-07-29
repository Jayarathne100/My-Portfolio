import React from "react";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_content}>
        <h2 className={style.footer_title}>Let's Connect</h2>

        <p className={style.footer_subtitle}>
          Open to collaborations, freelance work, and exciting opportunities.
        </p>

        <div className={style.footer_links}>
          <a
            href="https://www.linkedin.com/in/pinimal-rasanjana-jayarathne-3534892b0/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.footer_link}
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/Jayarathne100"
            target="_blank"
            rel="noopener noreferrer"
            className={style.footer_link}
          >
            💻 GitHub
          </a>

          <a
            href="mailto:Pinimalrj123@gmail.com"
            className={style.footer_link}
          >
            📧 Email
          </a>

          <a
            href="tel:+94715908772"
            className={style.footer_link}
          >
            📱 Call
          </a>
        </div>

        <div className={style.footer_bottom}>
          © 2026 <span>Pinimal Jayarathne</span> | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;