import React, { useState, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import deck from './deck.png'
import baloon1 from './baloon_1.png'
import baloon2 from './baloon_2.png'
import ship from './ship.png'

gsap.registerPlugin(MotionPathPlugin)

const Slide3 = () => {
  const [tween3, setTween3] = useState(null)
  const [height, setHeight] = useState(0)
  const slide3 = useRef(null)
  const path3 = useRef(null)

  const getHeight = (ref: React.MutableRefObject<any>): number => {
    const { height } = ref.current.getBoundingClientRect()

    return height - 145
  }

  useScrollPosition(
    ({ currPos }) => {
      // console.log(`useScrollPosition`)
      const { y } = currPos
      const h = getHeight(path3)
      const notY = (y - 300) * -1
      if (notY && h && notY < h) {
        console.log({ notY, h })
        const progress = notY < 0 ? 0 : notY / h
        if (tween3) {
          console.log(`set progress: ${progress}`)
          tween3.progress(progress)
        }
      } else {
        tween3.progress(1)
      }
    },
    [tween3],
    slide3
  )

  const onShipSet = useCallback(ref => {
    // console.log(ref)
    const animation: gsap.TweenVars = {
      duration: 5,
      paused: true,
      ease: 'none',
      motionPath: {
        path: '#s3-path',
        align: '#s3-path',
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
    }
    const tween = gsap.to(ref, animation)
    setTween3(tween)
  }, [])

  // const onPathSet = useCallback(ref => {
  //   if (ref) {
  //     const { height } = ref.getBoundingClientRect()
  //     console.log(ref, height)
  //     setHeight(height)
  //   }
  // }, [])

  return (
    <div className="cp-home__slide cp-slide-3" ref={slide3}>
      <div className="cp-slide-3__animation">
        <img
          className="cp-slide-3__ship"
          src={ship}
          alt="ship"
          ref={onShipSet}
        />
        <svg
          className="cp-slide-3__ship-path"
          width="100vh"
          height="100vh"
          viewBox="0 0 1424 1132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="s3-path"
            ref={path3}
            d="M611 2.00003C564.711 2.00002 519.777 13.8515 484.992 56.9452C424.817 131.494 417.923 222.635 416.356 326.621C414.615 442.155 408.508 563.027 341.329 648.414C298.724 702.566 234.813 754.721 178.001 768.5C123.709 781.668 50.6955 779.818 2.00009 747.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 10"
          />
        </svg>
      </div>
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
      <div className="cp-slide-3__dashboard">
        <div className="cp-slide-3__dashboard-baloon is-visible">
          <span>
            Tutto ok.
            <br />
            <b>Proseguiamo!</b>
          </span>
          <img src={baloon1} alt="Baloon" />
        </div>
      </div>
      <div className="cp-home__header cp-slide-3__header"></div>
      <div className="cp-slide-3__deck">
        <img className="cp-slide-3__deck-image" src={deck} alt="deck image" />
        <div className="cp-slide-3__deck-baloon is-visible">
          <span>
            avviare strumenti <b>fase 1!</b>
          </span>
          <img src={baloon2} alt="Baloon" />
        </div>
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
            strokeWidth="3"
            strokeDasharray="10 10"
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
            strokeWidth="3"
            strokeDasharray="10 10"
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
            strokeWidth="3"
            strokeDasharray="10 10"
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
            strokeWidth="3"
            strokeDasharray="10 10"
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
            strokeWidth="3"
            strokeDasharray="10 10"
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
            strokeWidth="35"
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
            strokeWidth="3"
            strokeDasharray="10 10"
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
            strokeWidth="3"
            strokeDasharray="10 10"
          />
        </svg>
      </div>
      <div className="cp-home__footer cp-slide-3__footer"></div>
    </div>
  )
}

export default Slide3
