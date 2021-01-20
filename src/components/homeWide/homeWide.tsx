import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import techHeader from './techHeader.png'
import techSidebar from './techSidebar.png'

import appleHeader from './appleHeader.png'
import appleFooter from './appleFooter.png'

import tailorHeader from './tailorHeader.png'
import tailorSidebar from './tailorSidebar.png'
import tailorFooter from './tailorFooter.png'

import analysisHeader from './analysisHeader.png'
import analysisSidebar from './analysisSidebar.png'

import compassSidebarRight from './compassSidebarRight.png'
import compassMiddle from './compassMiddle.png'
import compassSidebarLeft from './compassSidebarLeft.png'

import codeHeader from './codeHeader.png'
import codeSidebar from './codeSidebar.png'

import basementSidebar from './basementSidebar.png'
import basementFooter from './basementFooter.png'

import changesSidebarLeft from './changesSidebarLeft.png'
import changesSidebarRight from './changesSidebarRight.png'

import finishLineFooter from './finishLineFooter.png'

const HomeWide = () => {

  // const files = useStaticQuery(graphql`
  //   query IndexWideQuery {
  //     allFile(filter: {relativeDirectory: {eq: "home-wide"}, ext: {eq: ".png"}}, sort: {order: ASC, fields: name}) {
  //       nodes {
  //         name
  //         childImageSharp {
  //           fluid {
  //             src
  //           }
  //         }
  //       }
  //     }
  //   }`
  // )

  // const {nodes} = files.allFile

  return (
    <div className='cp-home-wide'>
      <div className='cp-home-wide__section cp-home-wide__section__tech'>
        <div className='cp-home-wide__section__tech__header'>
          <img className="" src={techHeader} alt=""/>
        </div>
        <div className='cp-home-wide__section__tech__sidebar'>
          <img className="" src={techSidebar} alt=""/>
        </div>
        <div className='cp-home-wide__section__tech__content'>
          <h1>Costruiamo <span>sinergie</span> tra aziende e tecnologia</h1>
          <p>Siamo una squadra di esperti che, da più di dieci anni, crea soluzioni IT capaci di generare valore.</p>
          <p>Lavoriamo con le aziende, progettando e realizzando sistemi nei quali la tecnologia è un reale strumento di supporto ai processi operativi di ogni giorno.</p>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section__apple'>
        <div className='cp-home-wide__section__apple__header'>
          <img className="" src={appleHeader} alt=""/>
        </div>
        <div className='cp-home-wide__section__apple__content'>
          <h1>L'altra metà della <span>mela</span></h1>
          <p>Ogni progetto inizia con una stretta di mano, reale o virtuale poco importa. In CodicePlastico collaboriamo con aziende che condividono il nostro metodo e i nostri valori: conoscerci reciprocamente è importante.</p>
        </div>
        <div className='cp-home-wide__section__apple__footer'>
          <img className="" src={appleFooter} alt=""/>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section--red cp-home-wide__section__tailor'>
        <div className='cp-home-wide__section__tailor__header'>
          <img className="" src={tailorHeader} alt=""/>
        </div>
        <div className='cp-home-wide__section__tailor__sidebar'>
          <img className="" src={tailorSidebar} alt=""/>
        </div>
        <div className='cp-home-wide__section__tailor__content'>
          <h1>Su <span>misura</span>, sempre</h1>
          <p>Costruiamo esclusivamente progetti su misura e ci rivolgiamo a tutte quelle realtà che hanno bisogno di soluzioni tecnologiche fortemente personalizzate.</p>
          <p>Ogni azienda ha bisogni specifici: con questa scelta facciamo in modo che sia la tecnologia ad adattarsi alle necessità delle imprese e non viceversa.</p>
        </div>
        <div className='cp-home-wide__section__tailor__footer'>
          <img className="" src={tailorFooter} alt=""/>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section__analysis'>
        <div className='cp-home-wide__section__analysis__header'>
          <img className="" src={analysisHeader} alt=""/>
        </div>
        <div className='cp-home-wide__section__analysis__content'>
          <h1>La lista della spesa: <span>l'analisi</span></h1>
          <p>Diamo il via ai nostri progetti con una fase di analisi. Attraverso attività di co-design tracciamo i bisogni tecnici e funzionali, coinvolgendovi nella progettazione.</p>
          <p>Creiamo un team di lavoro, a cui partecipano sia i nostri designer e developer, sia le vostre figure chiave: i decisori e gli utenti finali. Quando un cliente arriva da noi spesso ha già una soluzione in mente: la nostra fase di analisi consente di verificarne efficacia e fattibilità, tracciando i profili target, mappando processi e disegnando soluzioni pensate realmente sugli utenti.</p>
          <p>Al termine di queste attività condividiamo una proposta tecnica dettagliata, un prototipo a bassa fedeltà e una stima economica di realizzazione.</p>
        </div>
        <div className='cp-home-wide__section__analysis__sidebar'>
          <img className="" src={analysisSidebar} alt=""/>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section__compass'>
        <div className='cp-home-wide__section__compass__content-left'>
          <h1>Tracciamo la <span>rotta</span></h1>
          <p>Confermata l’analisi, siamo pronti a partire.</p>
          <p>L’introduzione di un nuovo strumento software è sempre un’opportunità di cambiamento per le aziende. L’analisi può rivelarsi un’ottima alleata per individuare eventuali punti di miglioramento dei vostri processi: in questa fase tracciamo la rotta di identificando strumenti, ruoli, soggetti necessari per rendere il progetto efficiente.
          </p>
        </div>
        <div className='cp-home-wide__section__compass__sidebar-right'>
          <img className="" src={compassSidebarRight} alt=""/>
        </div>
        <div className='cp-home-wide__section__compass__middle'>
          <img className="" src={compassMiddle} alt=""/>
        </div>
        <div className='cp-home-wide__section__compass__sidebar-left'>
          <img className="" src={compassSidebarLeft} alt=""/>
        </div>
        <div className='cp-home-wide__section__compass__content-right'>
          <p>Definiamo inoltre  le persone del team che si occuperanno di gestire feedback e comunicazioni e concordiamo la suddivisione del lavoro in iterazioni: l’approccio agile ci consente di consegnare prototipi funzionanti, che diventeranno sempre più raffinati nel procedere allo sviluppo. 
          </p>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section__basement'>
        <div className='cp-home-wide__section__basement__sidebar'>
          <img className="" src={basementSidebar} alt="basement"/>
        </div>
        <div className='cp-home-wide__section__basement__content'>
          <h1>Le <span>fondamenta</span></h1>
          <p>Pensiamo ad un’applicazione come un insieme di diverse componenti: iniziamo costruendo “la casa” che le ospiterà. Ne disegniamo e allestiamo le fondamenta avendo idea di quante stanze e quali ambienti serviranno: dove si  muoveranno i nostri utenti? Con quali percorsi?</p>
          <p>Definiamo anche il “look” dell’interfaccia e le interazioni che guideranno l’intera soluzione. Nell’esempio della casa, ne progettiamo l’aspetto: dal colore delle pareti, alla posizione delle finestre a come verranno disposti i mobili.</p>
        </div>
        <div className='cp-home-wide__section__basement__footer'>
          <img className="" src={basementFooter} alt=""/>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section--red cp-home-wide__section__code'>
        <div className='cp-home-wide__section__code__header'>
          <img className="" src={codeHeader} alt=""/>
        </div>
        <div className='cp-home-wide__section__code__content'>
          <h1>Lo <span>sviluppo</span></h1>
          <p>La condizione necessaria per lavorare in codicePlastico è la passione per il codice. Siamo tecnici preparati, crediamo nella sperimentazione e nella formazione continua: lo sviluppo della tua applicazione è in buone mani. Contemporaneamente allo sviluppo ci occupiamo della gestione degli aspetti tecnici di supporto, coordinandoci con il vostro Reparto IT.</p>
        </div>
        <div className='cp-home-wide__section__code__sidebar'>
          <img className="" src={codeSidebar} alt=""/>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section__changes'>
        <div className='cp-home-wide__section__changes__sidebar-left'>
          <img className="" src={changesSidebarLeft} alt=""/>
        </div>
        <div className='cp-home-wide__section__changes__content'>
          <h1>Quando le cose <span>cambiano</span></h1>
          <p>Da questo momento le attività di design, sviluppo, rilascio e test si ripetono ciclicamente: ogni volta che una piccola porzione del software è funzionante, la rendiamo disponibile. Ad ogni iterazione il progetto cresce, arricchendosi di funzionalità e di dettagli.</p>
          <p>Rilasciare soluzioni intermedie “grezze” ha un duplice vantaggio: ci consente di essere veloci e di gestire il cambiamento. I vostri feedback e i test sono fondamentali per individuare funzionalità superflue e tracciare nuove necessità.</p>
        </div>
        <div className='cp-home-wide__section__changes__sidebar-right'>
        <img className="" src={changesSidebarRight} alt=""/>
        </div>
      </div>
      <div className='cp-home-wide__section cp-home-wide__section__finish-line'>
        <div className='cp-home-wide__section__finish-line__content'>
          <h1>Il <span>traguardo</span></h1>
          <p>Vi accompagniamo nel rilascio della piattaforma con attività di supporto e formazione.  Come per un’automobile, anche per il software è bene definire piani di manutenzione e di feedback periodico: siamo sempre pronti per nuove sfide, raccogliendo indicazioni e nuovi obiettivi,  nell’ottica di un miglioramento continuo del prodotto.</p>
        </div>
        <div className='cp-home-wide__section__finish-line__footer'>
          <img className="" src={finishLineFooter} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default HomeWide;
