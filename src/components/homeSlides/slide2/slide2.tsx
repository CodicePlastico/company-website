import React from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import planet from './planet.png'
import tech from './tech.png'
import structure from './structure.png'
import footer from './footer.png'
import bg from './bg.png'

const Slide2 = () => {

  useScrollPosition(({ currPos }) => {
    console.log(currPos.y);
  })

  return (
    <div className="cp-home__slide cp-slide-2">
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container cp-home__grid-container">
          <div className="cp-grid__content">
            <h2 className="cp-home__title cp-slide-2__title"><span>L'altra metà della <strong>mela</strong></span></h2>
            <p>
              Ogni progetto inizia con una <strong>stretta di mano</strong>, reale o virtuale poco importa.<br/> 
              In CodicePlastico collaboriamo con aziende che condividono il nostro <strong>metodo</strong><br/>
              e i nostri <strong>valori</strong>: conoscerci reciprocamente è importante.
            </p>
          </div>
        </div>
      </div>
      <div className="cp-home__scene cp-slide-2__universe">
        <img className="cp-slide-2__universe-bg" src={bg} alt="slide background" />
        <img className="cp-slide-2__universe-planet" src={planet} alt="small planet"/>
        <svg className="cp-slide-2__universe-border" width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="79" cy="79" r="78" stroke="white" strokeWidth="2" strokeDasharray="5 5"/>
        </svg>
      </div>
      <div className="cp-grid cp-home__grid cp-slide-2__scene">
        <div className="cp-grid__left">
          <img src={footer} className="cp-slide-2__scene-footer" alt="Footer" />
        </div>
        <div className="cp-grid__container cp-home__grid-container">
          <div className="cp-home__grid-content cp-slide-2__scene-content">
            <img src={structure} alt="Structure" className="cp-slide-2__scene-structure"/>
            <img src={tech} className="cp-slide-2__scene-tech" alt="Technology" />
            <img src={footer} className="cp-slide-2__scene-footer" alt="Footer" />
          </div>
        </div>
        <div className="cp-grid__right">
          <img src={footer} className="cp-slide-2__scene-footer" alt="Footer" />
        </div>
      </div>
    </div>
  )
}

export default Slide2;