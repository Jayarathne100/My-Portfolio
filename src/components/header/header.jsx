import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header_container}>
      <Link to="/" className={style.header_title}>
        <span className={style.name_highlight}>Pinimal Jayarathne</span>
      </Link>
    </header>
  );
}

export default Header;
