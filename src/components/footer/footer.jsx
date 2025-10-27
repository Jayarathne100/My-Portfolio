import React from 'react';
import style from './footer.module.css';

function Footer() {
  return (
    <footer className={style.footer_container}>
      <div className={style.footer_content}>
        <div className={style.footer_name}>
          © 2025 <span>Pinimal Jayarathne</span>
        </div>

        <div className={style.footer_links}>
          <a 
            href="https://www.linkedin.com/in/pinimal-rasanjana-jayarathne-3534892b0/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={style.footer_link}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Jayarathne100" 
            target="_blank" 
            rel="noopener noreferrer"
            className={style.footer_link}
          >
            GitHub
          </a>
          <a href="mailto:Pinimalrj123@gmail.com" className={style.footer_link}>
            pinimalrj123@gmail.com
          </a>
          <a href="tel:+94715908772" className={style.footer_link}>
            071-5908772
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
