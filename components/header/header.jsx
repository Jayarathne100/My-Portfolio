import React from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className={style.logoSection}>
        <Link to="/" className={style.logo}>
          Pinimal Jayarathne
        </Link>
      </div>

      <nav className={style.navbar}>
        <button
          className={style.navBtn}
          onClick={() => navigate("/skills")}
        >
          Skills
        </button>

        <button
          className={style.navBtn}
          onClick={() => navigate("/education")}
        >
          Education
        </button>

        <button
          className={style.navBtn}
          onClick={() => navigate("/project")}
        >
          Projects
        </button>

        <button
          className={style.navBtn}
          onClick={() => navigate("/acheivement")}
        >
          Achievements
        </button>
      </nav>
    </header>
  );
}

export default Header;