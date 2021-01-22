import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const HomeMobile = () => {

  const files = useStaticQuery(graphql`
    query IndexMobileQuery {
      allFile(filter: {relativeDirectory: {eq: "home-mobile"}, ext: {eq: ".png"}}, sort: {order: ASC, fields: name}) {
        nodes {
          name
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }`
  )

  const {nodes} = files.allFile

  return (
    <div className='cp-home-mobile'>
      <div className='cp-home-mobile__section'>
        <img src={nodes[0].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <h1>Costruiamo <span>sinergie</span> tra aziende e tecnologia</h1>
          <p>Siamo una squadra di esperti che, da più di dieci anni, <strong>crea soluzioni IT capaci di generare valore</strong>.</p>
          <p>Lavoriamo con le aziende, progettando e realizzando sistemi nei quali la tecnologia è un <strong>reale strumento di supporto ai processi</strong> operativi di ogni giorno.</p>
        <img src={nodes[1].childImageSharp.fluid.src}  alt='' />
        </div>
      </div>
      <div className='cp-home-mobile__section'>
        <div className='cp-home-mobile__section-content'>
          <h1>L'altra metà della <span>mela</span></h1>
          <p>Ogni progetto inizia con una <strong>stretta di mano</strong>, reale o virtuale poco importa. In CodicePlastico collaboriamo con aziende che condividono il nostro <strong>metodo</strong> e i nostri <strong>valori</strong>: conoscerci reciprocamente è importante.</p>
        </div>
        <img src={nodes[2].childImageSharp.fluid.src} alt='' />
      </div>
      <div className='cp-home-mobile__section cp-home-mobile__section--red'>
        <div className='cp-home-mobile__section-content'>
          <h1>Su <span>misura</span>, sempre</h1>
          <p>Costruiamo esclusivamente <strong>progetti su misura</strong> e ci rivolgiamo a tutte quelle realtà che hanno bisogno di <strong>soluzioni tecnologiche fortemente personalizzate</strong>.</p>
          <p>Ogni azienda ha bisogni specifici: con questa scelta facciamo in modo che sia la <strong>tecnologia ad adattarsi alle necessità</strong> delle imprese e non viceversa.</p>
        </div>
        <img src={nodes[3].childImageSharp.fluid.src} alt='' />
      </div>
      <div className='cp-home-mobile__section'>
        <img src={nodes[4].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <h1>La lista della spesa: <span>l'analisi</span></h1>
          <p>Diamo il via ai nostri progetti con una fase di analisi. Attraverso attività di <strong>co-design</strong> tracciamo i bisogni tecnici e funzionali, coinvolgendovi nella progettazione.</p>
          <p>Creiamo un team di lavoro, a cui partecipano sia i nostri <strong>designer</strong> e <strong>developer</strong>, sia le vostre figure chiave: i decisori e gli utenti finali. Quando un cliente arriva da noi spesso ha già una soluzione in mente: la nostra fase di analisi consente di <strong>verificarne efficacia e fattibilità</strong>, tracciando i profili target, mappando processi e disegnando <strong>soluzioni</strong> pensate realmente sugli <strong>utenti</strong>.</p>
          <p>Al termine di queste attività condividiamo una <strong>proposta tecnica dettagliata</strong>, un <strong>prototipo</strong> a bassa fedeltà e una <strong>stima</strong> economica di realizzazione.</p>
        </div>
      </div>
      <div className='cp-home-mobile__section'>
      <img src={nodes[5].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <h1>Tracciamo la <span>rotta</span></h1>
          <p>Confermata l’analisi, siamo pronti a partire.</p>
          <p>L’introduzione di un nuovo strumento software è sempre un’opportunità di <strong>cambiamento</strong> per le aziende. L’analisi può rivelarsi un’ottima alleata per individuare eventuali punti di <strong>miglioramento dei vostri processi</strong>: in questa fase tracciamo la rotta di identificando strumenti, ruoli, soggetti necessari per rendere il progetto efficiente.
          </p>
        </div>
        <img src={nodes[6].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <p>Definiamo inoltre  le persone del team che si occuperanno di gestire feedback e comunicazioni e concordiamo la <strong>suddivisione del lavoro in iterazioni</strong>: l’approccio agile ci consente di consegnare prototipi funzionanti, che <strong>diventeranno sempre più raffinati</strong> nel procedere allo sviluppo. 
          </p>
        </div>
        <img src={nodes[7].childImageSharp.fluid.src} alt='' />
      </div>
      <div className='cp-home-mobile__section'>
        <div className='cp-home-mobile__section-content'>
          <h1>Le <span>fondamenta</span></h1>
          <p>Pensiamo ad un’applicazione come un insieme di diverse componenti: iniziamo costruendo “<strong>la casa</strong>” che le ospiterà. Ne disegniamo e allestiamo le <strong>fondamenta</strong> avendo idea di quante stanze e quali ambienti serviranno: dove si  muoveranno i nostri utenti? Con quali percorsi?</p>
        </div>
        <img src={nodes[8].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <p>Definiamo anche il “<strong>look</strong>” dell’interfaccia e le interazioni che guideranno l’intera soluzione. Nell’esempio della casa, ne progettiamo <strong>l’aspetto</strong>: dal colore delle pareti, alla posizione delle finestre a come verranno disposti i mobili.</p>
        </div>
        <img src={nodes[9].childImageSharp.fluid.src} alt='' />
      </div>
      <div className='cp-home-mobile__section cp-home-mobile__section--red'>
      <img src={nodes[10].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <h1>Lo <span>sviluppo</span></h1>
          <p>La condizione necessaria per lavorare in codicePlastico è la <strong>passione per il codice</strong>. Siamo tecnici preparati, crediamo nella <strong>sperimentazione</strong> e nella formazione continua: lo sviluppo della tua applicazione è in buone mani.</p>
          <p>Contemporaneamente allo sviluppo ci occupiamo della gestione degli <strong>aspetti tecnici di supporto</strong>, coordinandoci con il vostro Reparto IT.</p>
        </div>
        <img src={nodes[11].childImageSharp.fluid.src} alt='' />
      </div>
      <div className='cp-home-mobile__section'>
        <div className='cp-home-mobile__section-content'>
          <h1>Quando le cose <span>cambiano</span></h1>
          <p>Da questo momento le attività di design, sviluppo, rilascio e test si <strong>ripetono ciclicamente</strong>: ogni volta che una piccola porzione del software è funzionante, la rendiamo disponibile. <strong>Ad ogni iterazione il progetto cresce</strong>, arricchendosi di funzionalità e di dettagli.</p>
          <img src={nodes[12].childImageSharp.fluid.src} alt='' />
          <p>Rilasciare soluzioni intermedie “grezze” ha un duplice vantaggio: ci consente di essere <strong>veloci</strong> e <strong>di gestire il cambiamento</strong>. I vostri <strong>feedback</strong> e i <strong>test</strong> sono fondamentali per individuare funzionalità superflue e tracciare nuove necessità.</p>
        </div>
        <img src={nodes[13].childImageSharp.fluid.src} alt='' />
      </div>
      <div className='cp-home-mobile__section'>
        <div className='cp-home-mobile__section-content'>
          <h1>Il <span>traguardo</span></h1>
        </div>
        <img src={nodes[14].childImageSharp.fluid.src} alt='' />
        <div className='cp-home-mobile__section-content'>
          <p>Vi accompagniamo nel <strong>rilascio</strong> della piattaforma con attività di <strong>supporto</strong> e <strong>formazione</strong>. Come per un’automobile, anche per il software è bene definire <strong>piani di manutenzione e di feedback periodico</strong>: siamo sempre pronti per nuove sfide, raccogliendo indicazioni e nuovi obiettivi,  nell’ottica di un <strong>miglioramento continuo</strong> del prodotto.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeMobile;
