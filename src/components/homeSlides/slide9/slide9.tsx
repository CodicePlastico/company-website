import React from 'react';

import screen from './finish-line-screen.svg';
import ship from './ship.png'

const Slide9 = () => {
  return(
    <div className="cp-home__slide cp-slide-9">
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container">
          <div className="cp-home__grid-content cp-home__grid-content--full">
            <h1 className="cp-home__title cp-slide-9__title">
              <span>Il <strong>traguardo</strong></span>
            </h1>
            <div className="cp-slide-9__animation-circle-1">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="200" transform="matrix(-1 0 0 1 200 200)" stroke="#ffffff" strokeWidth="5" strokeDasharray="15 15"/>
              </svg>
            </div>
            <div className="cp-slide-9__animation-circle-2">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="250" transform="matrix(-1 0 0 1 250 250)" stroke="#ffffff" strokeWidth="3" strokeDasharray="10 10"/>
              </svg>
            </div>
            <img src={screen} alt="screen" />
            <p>
              Vi accompagniamo nel rilascio della piattaforma con attività di supporto
              e formazione. Come per un’automobile, anche per il software è bene
              definire piani di manutenzione e di feedback periodico: siamo sempre
              pronti per nuove sfide, raccogliendo indicazioni e nuovi obiettivi,
              nell’ottica di un miglioramento continuo del prodotto.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide9;