import React from 'react';
import style from './achivement.module.css';

import cert01 from './Img/cert01.png';
import cert02 from './Img/cert02.png';
import cert03 from './Img/cert03.png';
import cert04 from './Img/cert04.png';
import cert05 from './Img/cert05.png';
import cert06 from './Img/cert06.png';
import cert07 from './Img/cert07.png';
import cert08 from './Img/cert08.png';
import cert09 from './Img/cert09.png';

function Achivement() {
  const certificates = [
    cert01, cert02, cert03, cert04, cert05,
    cert06, cert07, cert08, cert09
  ];

  return (
    <section className={style.section}>
      <h1 className={style.title}>My Achievements</h1>
      <p className={style.subtitle}>Certificates & Accomplishments</p>

      <div className={style.gallery}>
        {certificates.map((cert, index) => (
          <div key={index} className={style.card}>
            <img src={cert} alt={`Certificate ${index + 1}`} />
            <div className={style.overlay}>
              Certificate {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achivement;