import React from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import deck from './deck.png'

const Slide3 = () => {
  useScrollPosition(({ currPos }) => {
    console.log(currPos.y)
  })

  return (
    <div className="cp-home__slide cp-slide-3">
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container">
          <div className="cp-home__grid-content cp-home__grid-content--right cp-home__grid-content--full">
            <div className="cp-slide-3__left">
              <h2 className="cp-home__title cp-slide-3__title">
                <span>
                  Su <b>misura</b>, sempre
                </span>
              </h2>
              <p className="cp-slide-3__text">
                <span>
                  Costruiamo esclusivamente <strong>progetti su misura</strong>{' '}
                  e ci rivolgiamo a tutte quelle realtà che hanno bisogno di
                  <strong>
                    soluzioni tecnologiche fortemente personalizzate
                  </strong>
                  .
                </span>
              </p>
              <p className="cp-slide-3__text">
                <span>
                  Ogni azienda ha bisogni specifici: con questa scelta facciamo
                  in modo che sia la
                  <strong>tecnologia ad adattarsi alle necessità</strong>
                  delle imprese e non viceversa.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cp-slide-3__dashboard"></div>
      <div className="cp-home__header cp-slide-3__header"></div>
      <div className="cp-home__header cp-slide-3__deck-wrap">
        <img className="cp-slide-3__deck" src={deck} alt="deck image" />
      </div>
      <div className="cp-s3-scarecrow">
        <div className="cp-s3-scarecrow__background"></div>
        <svg
          className="cp-s3-scarecrow__border1"
          width="216"
          height="216"
          viewBox="0 0 216 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="108"
            cy="108"
            r="106.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__border2"
          width="198"
          height="198"
          viewBox="0 0 198 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="99"
            cy="99"
            r="97.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__border3"
          width="182"
          height="182"
          viewBox="0 0 182 182"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="91"
            cy="91"
            r="89.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__border4"
          width="182"
          height="182"
          viewBox="0 0 182 182"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="91"
            cy="91"
            r="89.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__border5"
          width="198"
          height="198"
          viewBox="0 0 198 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="99"
            cy="99"
            r="97.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__rect"
          width="792"
          height="792"
          viewBox="0 0 792 792"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="296.007"
            y="23.9355"
            width="544.143"
            height="544.143"
            transform="rotate(30 296.007 23.9355)"
            stroke="#111D24"
            stroke-width="35"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__border6"
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="160"
            cy="160"
            r="158.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
        <svg
          className="cp-s3-scarecrow__border7"
          width="458"
          height="458"
          viewBox="0 0 458 458"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="229"
            cy="229"
            r="227.5"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
        </svg>
      </div>
      <div className="cp-home__footer cp-slide-3__footer"></div>
      {/* <div className="cp-home__scene cp-slide-2__universe">
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
      </div> */}
    </div>
  )
}

export default Slide3
