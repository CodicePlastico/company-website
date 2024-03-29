import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Customers from '../components/customers'

interface Skill {
  label: string
  description: string
  items: string[]
  cta: string
  routing: string
}

const skills: Skill[] = [
  {
    label: 'Design',
    description:'Dall’analisi dei requisiti alla realizzazione delle interfacce',
    items: ['Ux & Ui', "Design Workshop", "Test e Analisi"],
    cta: 'Ok ma cosa fate?',
    routing: '/design/'
  },
  {
    label: 'Dev',
    description: 'Progettiamo e sviluppiamo applicazioni web mobile e desktop.', 
    items: ['Functional programming', '#C', 'Node.JS', 'Elixir'],
    cta: 'Che tecnologie usate?',    
    routing: '/dev/'
  },
  {
    label: 'DevOps & Sys',
    description: 'Facciamo in modo che le applicazioni funzionino al meglio.',
    items: [ 'Kubernetes', 'Docker', 'Azure', 'AWS'],
    cta: 'Vorrei approfondire',    
    routing: '/devops/'
  },
 
]

const AboutUs = () => (
  <Layout>
    <SEO title="Chi siamo" />
    <div className="cp-internal-page cp-about">
      <div className="cp-grid">
        <div className="cp-grid__container">
          <div className="cp-internal-page__content cp-grid__content">
            <h1><span>Chi</span> siamo</h1>
            <p className="cp-typography__main-text">
            Siamo sviluppatori, analisti, designer e devops. Siamo organizzati in diversi team che fanno riferimento a tre aree principali di competenza:
            </p>
          </div>
        </div>
        <div className="cp-grid__right cp-about__spaceship"></div>
      </div>
      <div className="cp-grid cp-about__skills">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <div className="cp-about__skills-columns">
              {skills.map((s, i) => (
                <div className="cp-about__skills-column"  key={`skill-${i}`}>
                  <h3>{s.label}</h3>
                  <p dangerouslySetInnerHTML={{ __html: s.description }}/>
                  {s.cta.trim() !== '' ? (
                    <p><br/><a href={s.routing} className="cp-about__button ">{s.cta}</a></p>
                  ) : (                   
                    <br/>
                  )}
                 
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
      <div className="cp-grid cp-about__skills">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p>
            Siamo una software house specializzata in applicazioni <strong>tailor made</strong>: come un sarto che confeziona un abito su misura, il ciclo completo del nostro lavoro parte dall’idea e si completa con la distribuzione.
          </p> 
          <p>
            Le nostre competenze verticali in design, sviluppo e sistemi ci consentono di <strong>supportare aziende o altri team IT</strong>s anche solo in uno di questi tre aspetti.
          </p>
          <h4><span>Formazione continua</span></h4>
          <p>
            La <strong>formazione</strong> è un altro elemento fondamentale della vita aziendale.  Dedichiamo molto tempo a capire, conoscere e provare nuove tecnologie per migliorare il modo in cui scriviamo software. 
            Sul nostro <a href="https://blog.codiceplastico.com/" target="_blank">blog</a> troverai articoli tecnici, <a href="https://blog.codiceplastico.com/events.html" target="_blank">conferenze</a> in cui teniamo talk e storie di side project con i quali ci piace sporcarci le mani.
          </p>
          <p> 
            Ci piace <strong>condividere la conoscenza</strong>, per questo organizziamo, esclusivamente su richiesta, sessioni di <strong>formazione di alto profilo</strong> su design, metodologie, sviluppo e devops. 
          </p>
            <p><br/>
              <a href="mailto:info@codiceplastico.com?subject=Vorrei ricevere il vostro catalogo corsi" target="_blank" className="cp-about__button ">Richiedi il catalogo corsi</a>
            </p>
          </div>
        </div>
      </div>                
      <div className="cp-about__message-container">
        <div className="cp-about__message">
          <div className="cp-about__message-content">
            Nel nostro team c’è spazio solo per chi ha una passione sfrenata per la tecnologia.
          </div>
        </div>
      </div>
      <div className="cp-grid cp-about__skills cp-about__skills--metrics">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <h4 className=""><span>Progetti e Sinergie</span></h4>
            <p className="cp-typography__main-text">In questi anni abbiamo lavorato a numerosi <strong>progetti</strong>, affiancato  <strong>Reparti IT interni</strong> ad Aziende e prodotto migliaia di slide in  <strong>corsi</strong> privati e talk pubblici.</p>
            
            <div className="cp-about__skills-columns cp-about__skills-columns--metrics">
                <div className="cp-about__skills-column" >
                  <ul className="cp-about__skills-items">
                    <li className="cp-about__skills-item" >Più di...</li>
                  </ul>
                  <h3>60 progetti</h3>
                </div>
                <div className="cp-about__skills-column" >
                  <ul className="cp-about__skills-items">
                    <li className="cp-about__skills-item" >Più di...</li>
                  </ul>
                  <h3>100 clienti</h3>
                </div>
                <div className="cp-about__skills-column" >
                  <ul className="cp-about__skills-items">
                    <li className="cp-about__skills-item" >Formazione erogata: più di...</li>
                  </ul>
                  <h3>4.000 ore</h3>
                </div>
            </div>
            <h5>Ok, ma per chi avete lavorato?</h5>
            <p>Spesso lavorare a progetti IT di altri richiede una buona dose di <strong>riservatezza</strong>. Se vuoi conoscere i nostri lavori, <a href="mailto:info@codicelplastico.com">scrivici</a>: ti invieremo un portfolio che ti aiuterà a misurare la nostra esperienza, nel rispetto della privacy dei progetti sui quali abbiamo lavorato.</p>
            <a title="toApple" className="cp-about__button " href="/contatti"><span>Contattaci!</span></a>
          </div>
        </div>
      </div>
      {/* <Customers /> */}
    </div>
  </Layout>
)

export default AboutUs
