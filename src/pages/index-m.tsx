import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='cp-home-mobile'>
      <div className='cp-home-mobile__section'>
        <img src='./01.jpg' />
        <h1>Costruiamo <span>sinergie</span> tra aziende e tecnologia</h1>
        <p>Siamo una squadra di esperti che, da più di dieci anni, crea soluzioni IT capaci di generare valore.</p>
        <p>Lavoriamo con le aziende, progettando e realizzando sistemi nei quali la tecnologia è un reale strumento di supporto ai processi operativi di ogni giorno.</p>
        <img src='./02.jpg' />
      </div>
      <div className='cp-home-mobile__section'>
        <h1>L'altra metà della <span>mela</span></h1>
        <p>Ogni progetto inizia con una stretta di mano, reale o virtuale poco importa. In CodicePlastico collaboriamo con aziende che condividono il nostro metodo e i nostri valori: conoscerci reciprocamente è importante.</p>
        <img src='./03.jpg' />
      </div>
      <div className='cp-home-mobile__section cp-home-mobile__section--red'>
        <h1>Su <span>misura</span>, sempre</h1>
        <p>Costruiamo esclusivamente progetti su misura e ci rivolgiamo a tutte quelle realtà che hanno bisogno di soluzioni tecnologiche fortemente personalizzate.</p>
        <p>Ogni azienda ha bisogni specifici: con questa scelta facciamo in modo che sia la tecnologia ad adattarsi alle necessità delle imprese e non viceversa.</p>
        <img src='./04.jpg' />
      </div>
      <div className='cp-home-mobile__section'>
        <img src='./05.jpg' />
        <h1>La lista della spesa: <span>l'analisi</span></h1>
        <p>Diamo il via ai nostri progetti con una fase di analisi. Attraverso attività di co-design tracciamo i bisogni tecnici e funzionali, coinvolgendovi nella progettazione.</p>
        <p>Creiamo un team di lavoro, a cui partecipano sia i nostri designer e developer, sia le vostre figure chiave: i decisori e gli utenti finali. Quando un cliente arriva da noi spesso ha già una soluzione in mente: la nostra fase di analisi consente di verificarne efficacia e fattibilità, tracciando i profili target, mappando processi e disegnando soluzioni pensate realmente sugli utenti.</p>
        <p>Al termine di queste attività condividiamo una proposta tecnica dettagliata, un prototipo a bassa fedeltà e una stima economica di realizzazione.</p>
      </div>
      <div className='cp-home-mobile__section'>
        <img src='./06.jpg' />
        <h1>Tracciamo la <span>rotta</span></h1>
        <p>Confermata l’analisi, siamo pronti a partire.</p>
        <p>L’introduzione di un nuovo strumento software è sempre un’opportunità di cambiamento per le aziende. L’analisi può rivelarsi un’ottima alleata per individuare eventuali punti di miglioramento dei vostri processi: in questa fase tracciamo la rotta di identificando strumenti, ruoli, soggetti necessari per rendere il progetto efficiente.
        </p>
        <img src='./07.jpg' />
        <p>Definiamo inoltre  le persone del team che si occuperanno di gestire feedback e comunicazioni e concordiamo la suddivisione del lavoro in iterazioni: l’approccio agile ci consente di consegnare prototipi funzionanti, che diventeranno sempre più raffinati nel procedere allo sviluppo. 
        </p>
        <img src='./08.jpg' />
      </div>
      <div className='cp-home-mobile__section'>
        <h1>Le <span>fondamenta</span></h1>
        <p>Pensiamo ad un’applicazione come un insieme di diverse componenti: iniziamo costruendo “la casa” che le ospiterà. Ne disegniamo e allestiamo le fondamenta avendo idea di quante stanze e quali ambienti serviranno: dove si  muoveranno i nostri utenti? Con quali percorsi?</p>
        <img src='./09.jpg' />
        <p>Definiamo anche il “look” dell’interfaccia e le interazioni che guideranno l’intera soluzione. Nell’esempio della casa, ne progettiamo l’aspetto: dal colore delle pareti, alla posizione delle finestre a come verranno disposti i mobili.</p>
        <img src='./10.jpg' />
      </div>
      <div className='cp-home-mobile__section cp-home-mobile__section--red'>
        <img src='./11.jpg' />
        <h1>Lo <span>sviluppo</span></h1>
        <p>La condizione necessaria per lavorare in codicePlastico è la passione per il codice. Siamo tecnici preparati, crediamo nella sperimentazione e nella formazione continua: lo sviluppo della tua applicazione è in buone mani. Contemporaneamente allo sviluppo ci occupiamo della gestione degli aspetti tecnici di supporto, coordinandoci con il vostro Reparto IT.</p>
        <img src='./12.jpg' />
      </div>
      <div className='cp-home-mobile__section'>
        <h1>Quando le cose <span>cambiano</span></h1>
        <p>Da questo momento le attività di design, sviluppo, rilascio e test si ripetono ciclicamente: ogni volta che una piccola porzione del software è funzionante, la rendiamo disponibile. Ad ogni iterazione il progetto cresce, arricchendosi di funzionalità e di dettagli.</p>
        <img src='./13.jpg' />
        <p>Rilasciare soluzioni intermedie “grezze” ha un duplice vantaggio: ci consente di essere veloci e di gestire il cambiamento. I vostri feedback e i test sono fondamentali per individuare funzionalità superflue e tracciare nuove necessità.</p>
        <img src='./14.jpg' />
      </div>
      <div className='cp-home-mobile__section'>
        <h1>Il <span>traguardo</span></h1>
        <img src='./15.jpg' />
        <p>Vi accompagniamo nel rilascio della piattaforma con attività di supporto e formazione.  Come per un’automobile, anche per il software è bene definire piani di manutenzione e di feedback periodico: siamo sempre pronti per nuove sfide, raccogliendo indicazioni e nuovi obiettivi,  nell’ottica di un miglioramento continuo del prodotto.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
