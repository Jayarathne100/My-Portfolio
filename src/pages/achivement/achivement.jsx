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

function Achivement() {
  return (
    <div className={style.Achivement_certify}>
      {[cert01, cert02, cert03, cert04, cert05, cert06, cert07, cert08].map((cert, index) => (
        <img key={index} src={cert} alt={`certificate-${index}`} width={500} />
      ))}
    </div>
  );
}

export default Achivement;
