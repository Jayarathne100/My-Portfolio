import React from "react";
import style from "./navbar.module.css"; 
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={style.buttons}>
      <button className={style.navBtn} onClick={() => navigate('skills')}>Skills</button>
      <button className={style.navBtn} onClick={() => navigate('education')}>Education</button>
      <button className={style.navBtn} onClick={() => navigate('project')}>Project</button>
      <button className={style.navBtn} onClick={() => navigate('acheivement')}>Acheivement</button>
    </div>
  );
}

export default Navbar;
