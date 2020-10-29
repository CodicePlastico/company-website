import React from 'react';

import reload from './reload_white.png';

const Slide8 = () => {
  return(
    <div className="cp-home__slide cp-slide-8">
      <div className="cp-home__animation cp-slide-8__animation">
        <div className="cp-slide-8__animation-circle-1">
          <svg viewBox="0 0 1662 1662" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="829.5" transform="matrix(-1 0 0 1 831 831)" stroke="#DA2222" strokeWidth="3" strokeDasharray="10 10"/>
          </svg>
        </div>
        <div className="cp-slide-8__animation-circle-2">
          <svg viewBox="0 0 1566 1566" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="781.5" transform="matrix(-1 0 0 1 783 783)" stroke="#DA2222" strokeWidth="3" strokeDasharray="10 10"/>
          </svg>
        </div>
        <div className="cp-slide-8__animation-reload">
          <img src={reload} alt="reload" />
        </div>
        <div className="cp-slide-8__animation-circle-3">
          <svg viewBox="0 0 894 894" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="445.5" transform="matrix(-1 0 0 1 447 447)" stroke="white" strokeWidth="3" strokeDasharray="10 10"/>
          </svg>
        </div>
        <div className="cp-slide-8__animation-background"></div>
      </div>
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container">
          <div className="cp-home__grid-content cp-home__grid-content--full cp-slide-8__grid-content">
            <div className="cp-slide-8__content">
              <h1 className="cp-slide-8__title cp-home__title">
                Quando le cose<br/><strong>cambiano</strong>
              </h1>
              <p className="cp-slide-8__content-text">
                Da questo momento le attività di design, sviluppo, rilascio e test si
                ripetono ciclicamente: ogni volta che una piccola porzione del software
                è funzionante, la rendiamo disponibile. Ad ogni iterazione il progetto
                cresce, arricchendosi di funzionalità e di dettagli. Rilasciare
                soluzioni intermedie “grezze” ha un duplice vantaggio: ci consente di
                essere veloci e di gestire il cambiamento. I vostri feedback e i test
                sono fondamentali per individuare funzionalità superflue e tracciare
                nuove necessità.
              </p>
              <p className="cp-slide-8__content-extra">
                Rilasciare soluzioni intermedie “grezze” ha un duplice vantaggio: 
                ci consente di essere veloci e di gestire il cambiamento. 
                I vostri feedback e i test sono fondamentali per individuare funzionalità superflue 
                e tracciare nuove necessità.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide8;