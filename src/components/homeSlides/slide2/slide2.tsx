import React, { useCallback, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import classNames from 'classnames'

import planet from './planet.png'
import tech from './tech.png'
import footer from './footer.png'

import baloon1 from './baloon_1.png'
import baloon2 from './baloon_2.png'
import people from './people.png'

import ship from './ship.png'
import openShip from './ship_open.png'

const Slide2 = () => {
  const [baloonVisible, setBaloonVisible] = useState(false)
  const slide = useRef(null)
  const shipContainer = useRef(null)

  const animateShip = () => {
    const tl = gsap.timeline();
    tl.to("#s2-ship-container", {x: -200, y: 240, scale: 1, duration: 1});
    tl.to("#s2-openship", {opacity: 1, duration: 1});
  }

  useScrollPosition(({ currPos }) => {
    if (!baloonVisible && currPos.y < 100){
      setBaloonVisible(true);
    }
  }, [], slide)

  useScrollPosition(({ currPos }) => {
    if (currPos.y < 550) {
      animateShip();
    }
  }, [], shipContainer)


  

  const baloon1ClassName = classNames('cp-slide-2__people-baloon1', 'cp-slide-2__people-baloon', {
    'cp-slide-2__people-baloon--visible': baloonVisible
  })
  const baloon2ClassName = classNames('cp-slide-2__people-baloon2', 'cp-slide-2__people-baloon', {
    'cp-slide-2__people-baloon--visible': baloonVisible
  })

  return (
    <div className="cp-home__slide cp-slide-2" ref={slide}>
      
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container cp-slide-2__container">
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
        <div className="cp-slide-2__universe-container">
          <img className="cp-slide-2__universe-planet" src={planet} alt="small planet"/>
          <svg className="cp-slide-2__universe-border" width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="79" cy="79" r="78" stroke="white" strokeWidth="2" strokeDasharray="5 5"/>
          </svg>
          <div className="cp-slide-2__ship" ref={shipContainer} id="s2-ship-container">
            <img className="cp-slide-2__ship-close" src={ship} alt="ship" id="s2-ship"/>
            <img className="cp-slide-2__ship-open" src={openShip} alt="ship open" id="s2-openship" />
          </div>
        </div>
      </div>
      <div className="cp-grid cp-home__grid cp-slide-2__scene">
        <div className="cp-grid__left">
          <img src={footer} className="cp-slide-2__scene-footer" alt="Footer" />
        </div>
        <div className="cp-grid__container cp-home__grid-container">
          <div className="cp-home__grid-content cp-slide-2__scene-content">
            <div className="cp-slide-2__people">
              <img src={people} className="cp-slide-2__people-img" alt="People" />
              <div className={baloon1ClassName}>
                <span>Piacere di conoscerti</span>
                <img src={baloon1} alt="Baloon" />
              </div>
              <div className={baloon2ClassName}>
                <span>Saliamo a bordo</span>
                <img src={baloon2} alt="Baloon" />
              </div>
            </div>
            <div className="cp-slide-2__scene-structure"></div>
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