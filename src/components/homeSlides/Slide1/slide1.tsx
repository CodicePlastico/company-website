import React, { useState, useCallback, DOMElement, useEffect } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import stars from './stars.png';
import planet1 from './planet_01.png';
import planet2 from './planet_02.png';

gsap.registerPlugin(MotionPathPlugin)


const Slide1 = () => {
  const [tween, setTween] = useState(null)
  const [height, setHeight] = useState(0)
  const [translate, setTranslate] = useState(0)

  console.log(translate);
  const style = {
    transform: `translateZ(${translate}px)`
  }
  
  useScrollPosition(({ currPos }) => {
    if (currPos.y, height) {
      const progress = currPos.y * -1 / height
      if (tween) {
        tween.progress(progress)
      }
      setTranslate(Math.ceil(currPos.y * -50 / height));
    }
  })
  
  const onShipSet = useCallback(ref => {
    const animation: gsap.TweenVars = {
      duration: 5, 
      paused: true,
      ease: "none",
      motionPath:{
        path: "#path",
        align: "#path",
        autoRotate: false,
        alignOrigin: [0.5, 0.5]
      }
    }
    const tween = gsap.to(ref, animation);
    setTween(tween);
  }, []);
  
  
  const onPathSet = useCallback(ref => {
    if (ref) {
      const { height } = ref.getBoundingClientRect();
      setHeight(height)
    }
  }, []);
  
  return (
    <div className="cp-home__slide cp-slide-1">
      <div className="cp-home__background">
        <img className="cp-slide-1__stars" src={stars} alt="stars" style={style}/>
      </div>
      <div className="cp-home__animation">
        <img id="ship" className="cp-slide-1__ship" src="/homeship.png" alt="ship" ref={onShipSet} />
        <svg width="100vh" height="100vh" viewBox="0 0 1424 1132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="path" ref={onPathSet} d="M-74 10.6573C9.25962 -13.508 107.722 17.6151 185.498 46.4503C278.155 80.8026 355.466 134.566 422.674 201.553C507.835 286.434 574.278 393.917 600.456 506.697C611.182 552.91 623.818 599.533 634.936 646.072C658.146 743.234 702.044 831.311 780.031 902.046C863.81 978.034 951.988 1035.9 1067.03 1063.29C1183.98 1091.14 1305.9 1099.91 1422 1130" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
        </svg>
        <img className="cp-slide-1__planet1" src={planet1} alt="small planet"/>
        <svg className="cp-slide-1__border1" width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="79" cy="79" r="78" stroke="white" stroke-width="2" stroke-dasharray="5 5"/>
        </svg>
        <img className="cp-slide-1__planet2" src={planet2} alt="big planet"/>
        <svg className="cp-slide-1__border2" width="533" height="533" viewBox="0 0 533 533" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="266.5" cy="266.5" r="263.5" stroke="white" stroke-width="6" stroke-dasharray="20 20"/>
        </svg>
      </div>
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container cp-home__grid-container">
          <div className="cp-home__grid-content cp-home__grid-content--right">
            <h1 className="cp-home__title">
              <span>Costruiamo <strong>sinergie</strong><br/>tra aziende e tecnologia</span>
            </h1>
            <p>
              Siamo una squadra di esperti che, da più di dieci anni, <strong><br/>crea soluzioni
              IT capaci di generare valore.</strong>
            </p>
            <p>
              Lavoriamo con le aziende, progettando e realizzando<br/>sistemi nei quali la
              tecnologia è un <strong>reale strumento di supporto<br/>ai processi</strong> operativi di
              ogni giorno.
            </p>
            <div className="cp-home__cta">
              Pronti a partire?<br/>
              <small>scroll down to start</small>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-home__footer cp-slide-1__footer"></div>
    </div>
  )
}

export default Slide1