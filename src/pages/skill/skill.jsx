import React from 'react';
import style from './skill.module.css';

// 🧠 Importing images
import python from './Img/python.png';
import sql from './Img/sql.png';
import html from './Img/html.png';
import vs from './Img/vs.png';
import css from './Img/css.png';
import js from './Img/js.png';
import xampp from './Img/xamp.png';
import figma from './Img/figma.png';
import java from './Img/java.png';
import react from './Img/react.png';
import next from './Img/next.png';
import vr from './Img/vr.png';
import mobile from './Img/mobile.png';
import node from './Img/node.png';
import mongo from './Img/mongo.png';
import tailwind from './Img/tail.png';
import bootstrap from './Img/boostrap.png';
import mui from './Img/mui.png';

function Skill() {
  return (
    <div className={style.skill_container}>
      {/* Esoft UNI Endorsed Skills */}
      <div>
        <div className={style.skill_main}>Endorsed by Esoft UNI</div>
        <div className={style.skill_grid}>
          {[python, vs, sql, html, css, js, xampp, figma, java].map((icon, index) => (
            <div key={index} className={style.skill_card}>
              <img src={icon} alt="skill" />
            </div>
          ))}
        </div>
      </div>

      {/* Self Learning Skills */}
      <div>
        <div className={style.skill_main}>Endorsed by Self Learning</div>
        <div className={style.skill_grid}>
          {[react, next, vr, tailwind, mobile, node, mongo, bootstrap, mui].map((icon, index) => (
            <div key={index} className={style.skill_card}>
              <img src={icon} alt="skill" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
