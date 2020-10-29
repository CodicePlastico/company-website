import React, { useRef, useState } from 'react';
import classnames from 'classnames'

import ship from './ship.png';
import magglass from './magglass.png';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Slide4 = () => {
  const [animate, setAnimate] = useState(false)
  const magContainer = useRef(null)

  useScrollPosition(({ currPos }) => {
    if (!animate && currPos.y < 550) {
      setAnimate(true)
    }
  }, [animate], magContainer)

  const shipClass = classnames('cp-slide-4__animation-ship', {'cp-slide-4__animation-ship--animate': animate})

  return(
    <div className="cp-home__slide cp-slide-4">
      <div className="cp-home__header cp-slide-4__header"></div>
      <div className="cp-grid cp-home__grid">
        <div className="cp-grid__container">
          <div className="cp-home__grid-content cp-home__grid-content--full cp-slide-4__grid-content">
            <h1 className="cp-home__title">
              <span>La lista della spesa:<br/><strong>l'analisi</strong></span>
            </h1>
            <div className="cp-slide-4__content">
              <div className="cp-slide-4__text">
                <p>
                  Diamo il via ai nostri progetti con una fase di analisi. Attraverso
                  attività di co-design tracciamo i bisogni tecnici e funzionali,
                  coinvolgendovi nella progettazione.
                </p>
                <p>
                  Creiamo un team di lavoro, a cui partecipano sia i nostri designer e
                  developer, sia le vostre figure chiave: i decisori e gli utenti finali.
                  Quando un cliente arriva da noi spesso ha già una soluzione in mente: la
                  nostra fase di analisi consente di verificarne efficacia e fattibilità,
                  tracciando i profili target, mappando processi e disegnando soluzioni
                  pensate realmente sugli utenti.
                </p>
                <p>
                  Al termine di queste attività condividiamo una proposta tecnica
                  dettagliata, un prototipo a bassa fedeltà e una stima economica di
                  realizzazione.
                </p>
              </div>
              <div className="cp-slide-4__animation" ref={magContainer}>
                <img className="cp-slide-4__animation-mag" src={magglass} alt="Mag glass" />
                <img className={shipClass} src={ship} alt="Ship" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide4;