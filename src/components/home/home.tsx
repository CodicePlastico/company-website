import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import cpShipRight from './CPshipRight.png'
import cpShipFront from './CPshipFront.png'
import cpShipLeft from './CPshipLeft.png'

import techHeader from './techHeader.jpg'
import techHeaderMobile from './techHeaderMobile.jpg'
import techSidebar from './techSidebar.jpg'
import techSidebarMobile from './techSidebarMobile.jpg'
import techCircle from './techCircle.svg'

import appleHeader from './appleHeader.jpg'
import appleHeaderMobile from './appleHeaderMobile.jpg'
import appleFooter from './appleFooter.jpg'
import appleFooterMobile from './appleFooterMobile.jpg'
import appleCircle from './appleCircle.svg'

import tailorHeader from './tailorHeader.png'
import tailorHeaderMobile from './tailorHeaderMobile.png'
import tailorSidebar from './tailorSidebar.png'
import tailorPuppetTop from './tailor-puppet-top.png'
import tailorRect from './rect.svg'
import tailorPuppetBottom from './tailor-puppet-bottom.png'
import tailorFooter from './tailorFooter.png'
import tailorFooterMobile from './tailorFooterMobile.png'

import analysisHeader from './analysisHeader.jpg'
import analysisHeaderMobile from './analysisHeaderMobile.jpg'
import analysisSidebar from './analysisSidebar.jpg'
import analysisSidebarMobile from './analysisSidebarMobile.jpg'
import analysisCircle from './analysisCircle.svg'

import compassSidebarRight from './compassSidebarRight.jpg'
import compassMiddle from './compassMiddle.jpg'
import compassSidebarLeft from './compassSidebarLeft.jpg'
import compassSidebarRightMobile from './compassSidebarRightMobile.jpg'
import compassMiddleMobile from './compassMiddleMobile.jpg'
import compassSidebarLeftMobile from './compassSidebarLeftMobile.jpg'
import compassCircle from './compassCircle.svg'

import basementSidebar from './basementSidebar.svg'
import basementFooter from './basementFooter.jpg'
import basementFooterMobile from './basementFooterMobile.jpg'
import basementCircle from './basementCircle.svg'

import codeHeader from './codeHeader.jpg'
import codeSidebar from './codeSidebar.jpg'
import codeHeaderMobile from './codeHeaderMobile.jpg'
import codeSidebarMobile from './codeSidebarMobile.jpg'

import changesSidebarLeft from './changesSidebarLeft.jpg'
import changesSidebarRight from './changesSidebarRight.jpg'
import changesCircle from './changesCircle.svg'

import finishLineFooter from './finishLineFooter.jpg'
import finishCircle from './finishCircle.svg'

const Home = () => {

  return (
    <div className='cp-home'>
      <div className='cp-home__section cp-home__section__tech'>
        <div className='cp-home__section__tech__header'>
          <picture>
            <source media="(max-width: 767px)" srcSet={techHeaderMobile}/>
            <source media="(min-width: 768px)" srcSet={techHeader}/>
            <img src={techHeaderMobile} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__tech__sidebar'>
          <picture>
            <source media="(max-width: 767px)" srcSet={techSidebarMobile}/>
            <source media="(min-width: 768px)" srcSet={techSidebar}/>
            <img src={techSidebar} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__tech__sidebar cp-home__section__tech__sidebar__ship'>
          <img className="" src={cpShipRight} alt=""/>
        </div>
        <div className='cp-home__section__tech__sidebar cp-home__section__tech__sidebar__circle'>
          <img className="" src={techCircle} alt=""/>
        </div>
        <div className='cp-home__section__tech__content'>
          <h1>Costruiamo <span>sinergie</span> tra aziende e tecnologia</h1>
          <p>Siamo una squadra di esperti che, da più di dieci anni,<br/><strong>crea soluzioni IT capaci di generare valore</strong>.</p>
          <p>Lavoriamo con le aziende, progettando e realizzando sistemi nei quali la tecnologia è un <strong>reale strumento di supporto ai processi</strong> operativi di ogni giorno.</p>
          <AnchorLink to="/#apple" title="toApple" className="cp-home__button">
            <span>Vai al quartier generale!</span>
          </AnchorLink>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__apple'>
        <div className='cp-home__section__apple__header'>
          <picture>
            <source media="(max-width: 767px)" srcSet={appleHeaderMobile}/>
            <source media="(min-width: 768px)" srcSet={appleHeader}/>
            <img src={appleHeader} alt=""/>
          </picture>
        </div>
        <div id="apple" className='cp-home__section__apple__content'>
          <h1>L'altra metà della <span>mela</span></h1>
          <p>Ogni progetto inizia con una <strong>stretta di mano</strong>, reale o virtuale poco importa. In CodicePlastico collaboriamo con aziende che condividono il nostro <strong>metodo</strong> e i nostri <strong>valori</strong>: conoscerci reciprocamente è importante.</p>
          <AnchorLink to="/#tailor" title="toTailor" className="cp-home__button">
            <span>Cominciamo!</span>
          </AnchorLink>
        </div>
        <div className='cp-home__section__apple__footer'>
          <picture>
            <source media="(max-width: 767px)" srcSet={appleFooterMobile}/>
            <source media="(min-width: 768px)" srcSet={appleFooter}/>
            <img src={appleFooter} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__apple__footer cp-home__section__apple__footer__circle'>
          <img className="" src={appleCircle} alt=""/>
        </div>
      </div>
      <div className='cp-home__section cp-home__section--red cp-home__section__tailor'>
        <div className='cp-home__section__tailor__header'>
          <picture>
            <source media="(max-width: 767px)" srcSet={tailorHeaderMobile}/>
            <source media="(min-width: 768px)" srcSet={tailorHeader}/>
            <img className="" src={tailorHeader} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__tailor__sidebar cp-home__section__tailor__sidebar__ship'>
          <div>
            <img className="" src={tailorPuppetBottom} alt=""/>
          </div>
        </div>
        <div className='cp-home__section__tailor__sidebar cp-home__section__tailor__sidebar__rect'>
          <img className="" src={tailorRect} alt=""/>
        </div>
        <div className='cp-home__section__tailor__sidebar cp-home__section__tailor__sidebar__ship'>
          <div>
            <img className="" src={tailorPuppetTop} alt=""/>
          </div>
        </div>
        <div className='cp-home__section__tailor__sidebar cp-home__section__tailor__sidebar__engineer'>
          <img className="" src={tailorSidebar} alt=""/>
        </div>
        <div id="tailor" className='cp-home__section__tailor__content'>
          <h1>Su <span>misura</span>, sempre</h1>
          <p>Costruiamo esclusivamente <strong>progetti su misura</strong> e ci rivolgiamo a tutte quelle realtà che hanno bisogno di <strong>soluzioni tecnologiche fortemente personalizzate</strong>.</p>
          <p>Ogni azienda ha bisogni specifici: con questa consapevolezza facciamo in modo che sia la <strong>tecnologia ad adattarsi alle necessità</strong> delle imprese e non viceversa.</p>
          <AnchorLink to="/#analysis" title="toAnalysis" className="cp-home__button cp-home__button--white">
            <span>Di cosa hai bisogno?</span>
          </AnchorLink>
        </div>
        <div className='cp-home__section__tailor__footer'>
          <picture>
            <source media="(max-width: 767px)" srcSet={tailorFooterMobile}/>
            <source media="(min-width: 768px)" srcSet={tailorFooter}/>
            <img className="" src={tailorFooter} alt=""/>
          </picture>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__analysis'>
        <div className='cp-home__section__analysis__header'>
          <picture>
            <source media="(max-width: 767px)" srcSet={analysisHeaderMobile}/>
            <source media="(min-width: 768px)" srcSet={analysisHeader}/>
            <img className="" src={analysisHeader} alt=""/>
          </picture>
        </div>
        <div id="analysis" className='cp-home__section__analysis__content'>
          <h1>La lista della spesa: <span>l'analisi</span></h1>
          <p>Diamo il via ai nostri progetti con una fase di analisi. Attraverso attività di <strong>co-design</strong> tracciamo i bisogni tecnici e funzionali, coinvolgendovi nella progettazione.</p>
          <p>Creiamo un team di lavoro, a cui partecipano sia i nostri <strong>designer</strong> e <strong>developer</strong> sia le vostre figure chiave: i decisori e gli utenti finali. Quando un cliente arriva da noi spesso ha già una soluzione in mente: la nostra fase di analisi consente di <strong>verificarne efficacia e fattibilità</strong>, tracciando i profili target, mappando processi e disegnando <strong>soluzioni</strong> pensate realmente sugli <strong>utenti</strong>.</p>
          <p>Al termine di queste attività condividiamo una <strong>proposta tecnica dettagliata</strong>, un <strong>prototipo</strong> a bassa fedeltà e una <strong>stima</strong> economica di realizzazione.</p>
          <AnchorLink to="/#compass" title="toCompass" className="cp-home__button">
            <span>Segui il percorso!</span>
          </AnchorLink>
        </div>
        <div className='cp-home__section__analysis__sidebar'>
          <picture>
            <source media="(max-width: 767px)" srcSet={analysisSidebarMobile}/>
            <source media="(min-width: 768px)" srcSet={analysisSidebar}/>
            <img className="" src={analysisSidebar} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__analysis__sidebar cp-home__section__analysis__sidebar__ship'>
          <img className="" src={cpShipFront} alt=""/>
        </div>
        <div className='cp-home__section__analysis__sidebar cp-home__section__analysis__sidebar__circle'>
          <img className="" src={analysisCircle} alt=""/>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__compass'>
        <div id="compass" className='cp-home__section__compass__content-left'>
          <h1>Tracciamo la <span>rotta</span></h1>
          <p>Confermata l’analisi, siamo pronti a partire.</p>
          <p>L’introduzione di un nuovo strumento software è sempre un’opportunità di <strong>cambiamento</strong> per le aziende. L’analisi può rivelarsi un’ottima alleata per individuare eventuali punti di <strong>miglioramento dei vostri processi</strong>: in questa fase tracciamo la rotta identificando strumenti, ruoli, soggetti necessari per rendere il progetto efficiente.
          </p>
        </div>
        <div className='cp-home__section__compass__sidebar-right'>
          <picture>
            <source media="(max-width: 767px)" srcSet={compassSidebarRightMobile}/>
            <source media="(min-width: 768px)" srcSet={compassSidebarRight}/>
            <img className="" src={compassSidebarRight} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__compass__middle'>
          <picture>
            <source media="(max-width: 767px)" srcSet={compassMiddleMobile}/>
            <source media="(min-width: 768px)" srcSet={compassMiddle}/>
            <img className="" src={compassMiddle} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__compass__middle cp-home__section__compass__middle__circle'>
          <img className="" src={compassCircle} alt=""/>
        </div>
        <div className='cp-home__section__compass__sidebar-left'>
          <picture>
            <source media="(max-width: 767px)" srcSet={compassSidebarLeftMobile}/>
            <source media="(min-width: 768px)" srcSet={compassSidebarLeft}/>
            <img className="" src={compassSidebarLeft} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__compass__content-right'>
          <p>Definiamo inoltre  le persone del team che si occuperanno di gestire feedback e comunicazioni e concordiamo la <strong>suddivisione del lavoro in iterazioni</strong>: l’approccio agile ci consente di consegnare prototipi funzionanti, che <strong>diventeranno sempre più raffinati</strong> con il procedere allo sviluppo. 
          </p>
          <AnchorLink to="/#basement" title="toBasement" className="cp-home__button">
            <span>Progettiamo!</span>
          </AnchorLink>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__basement'>
        <div className='cp-home__section__basement__sidebar'>
          <img className="" src={basementSidebar} alt=""/>
        </div>
        <div id="basement" className='cp-home__section__basement__content'>
          <h1>Le <span>fondamenta</span></h1>
          <p>Pensiamo ad un’applicazione come un insieme di diverse componenti: iniziamo costruendo “<strong>la casa</strong>” che le ospiterà. Ne disegniamo e allestiamo le <strong>fondamenta</strong> avendo idea di quante stanze e quali ambienti serviranno: dove si  muoveranno i nostri utenti? In quali percorsi?</p>
          <p>Definiamo anche il “<strong>look</strong>” dell’interfaccia e le interazioni che guideranno l’intera soluzione. Tornando alla metafora della casa, ne progettiamo <strong>l’aspetto</strong>: dal colore delle pareti, alla posizione delle finestre a come verranno disposti i mobili.</p>
          <AnchorLink to="/#code" title="toCode" className="cp-home__button">
            <span>è il momento di costruire!</span>
          </AnchorLink>
        </div>
        <div className='cp-home__section__basement__footer'>
          <picture>
            <source media="(max-width: 767px)" srcSet={basementFooterMobile}/>
            <source media="(min-width: 768px)" srcSet={basementFooter}/>
            <img className="" src={basementFooter} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__basement__footer cp-home__section__basement__footer__circle'>
          <img className="" src={basementCircle} alt=""/>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__code'>
        <div className='cp-home__section__code__header'>
          <picture>
            <source media="(max-width: 767px)" srcSet={codeHeaderMobile}/>
            <source media="(min-width: 768px)" srcSet={codeHeader}/>
            <img className="" src={codeHeader} alt=""/>
          </picture>
        </div>
        <div id="code" className='cp-home__section__code__content'>
          <h1>Lo <span>sviluppo</span></h1>
          <p>La condizione necessaria per lavorare in CodicePlastico è la <strong>passione per il codice</strong>. Siamo tecnici preparati, crediamo nella <strong>sperimentazione</strong> e nella formazione continua: lo sviluppo della tua applicazione è in buone mani.</p>
          <p>Contemporaneamente allo sviluppo ci occupiamo della gestione degli <strong>aspetti tecnici di supporto</strong>, coordinandoci con il vostro Reparto IT.</p>
          <AnchorLink to="/#changes" title="toChange" className="cp-home__button">
            <span>E se cambi idea?</span>
          </AnchorLink>
        </div>
        <div className='cp-home__section__code__sidebar'>
          <picture>
            <source media="(max-width: 767px)" srcSet={codeSidebarMobile}/>
            <source media="(min-width: 768px)" srcSet={codeSidebar}/>
            <img className="" src={codeSidebar} alt=""/>
          </picture>
        </div>
        <div className='cp-home__section__code__sidebar cp-home__section__code__sidebar__ship'>
          <img className="" src={cpShipLeft} alt=""/>
        </div>
        <div className='cp-home__section__code__sidebar cp-home__section__code__sidebar__circle'>
          <img className="" src={techCircle} alt=""/>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__changes'>
        <div className='cp-home__section__changes__sidebar-left'>
          <img className="" src={changesSidebarLeft} alt=""/>
        </div>
        <div className='cp-home__section__changes__sidebar-left cp-home__section__changes__sidebar-left__ship'>
          <img className="" src={cpShipRight} alt=""/>
        </div>
        <div className='cp-home__section__changes__sidebar-left cp-home__section__changes__sidebar-left__circle'>
          <img className="" src={changesCircle} alt=""/>
        </div>
        <div id="changes" className='cp-home__section__changes__content'>
          <h1>Quando le cose <span>cambiano</span></h1>
          <p>Da questo momento le attività di design, sviluppo, rilascio e test si <strong>ripetono ciclicamente</strong>: ogni volta che una piccola porzione del software è funzionante, la rendiamo disponibile. <strong>Ad ogni iterazione il progetto cresce</strong>, arricchendosi di funzionalità e di dettagli.</p>
          <p>Rilasciare soluzioni intermedie “grezze” ha un duplice vantaggio: ci consente di essere <strong>veloci</strong> e <strong>di gestire il cambiamento</strong>. I vostri <strong>feedback</strong> e i <strong>test</strong> sono fondamentali per individuare funzionalità superflue e tracciare nuove necessità.</p>
          <AnchorLink to="/#finish" title="toFinish" className="cp-home__button">
            <span>Manca poco!</span>
          </AnchorLink>
        </div>
        <div className='cp-home__section__changes__sidebar-right'>
        <img className="" src={changesSidebarRight} alt=""/>
        </div>
      </div>
      <div className='cp-home__section cp-home__section__finish-line'>
        <div id="finish" className='cp-home__section__finish-line__title'>
          <h1>Il <span>traguardo</span></h1>
        </div>
        <div className='cp-home__section__finish-line__footer'>
          <img className="" src={finishLineFooter} alt=""/>
        </div>
        <div className='cp-home__section__finish-line__footer cp-home__section__finish-line__footer__circle'>
          <img className="" src={finishCircle} alt=""/>
        </div>
        <div className='cp-home__section__finish-line__content'>
          <p>Vi accompagniamo nel <strong>rilascio</strong> della piattaforma con attività di <strong>supporto</strong> e <strong>formazione</strong>. Come per un’automobile, anche per il software è bene definire <strong>piani di manutenzione e di feedback periodico</strong>: siamo sempre pronti per nuove sfide, raccogliendo indicazioni e nuovi obiettivi,  nell’ottica di un <strong>miglioramento continuo</strong> del prodotto.</p>
          <AnchorLink to="/contatti" title="toContact" className="cp-home__button">
            <span>Contattaci!</span>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Home;
