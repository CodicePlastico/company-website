import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Customers from '../components/customers'

interface Skill {
  label: string
  items: string[]
}

const skills: Skill[] = [
  {
    label: 'Design',
    items: ['Ux & Ui', 'Design Research', 'Test di usabilità']
  },
  {
    label: 'Dev & Sys',
    items: ['Sviluppo', 'Functional programming', 'DevOps', 'Kubernetes', 'Docker', 'Azure', 'AWS']
  },
  {
    label: 'Processi',
    items: ['App modernization', 'Analisi dei processi', 'Training e formazione']
  }
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
              Siamo sviluppatori, analisti, designer: ci piace molto lavorare in squadra, 
              ma diamo il massimo anche da soli, 
              immersi nella nostra musica preferita
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
                  <ul className="cp-about__skills-items">
                    {s.items.map((skill, index) => (
                      <li className="cp-about__skills-item" key={`skill-${index}`}>{skill}</li>
                    ))}
                  </ul>
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
            <h4><span>Formazione continua</span></h4>
            <p>
              Crediamo fortemente nella condivisione delle informazioni e la nostra giornata tipo inizia sempre con uno <strong>standup meeting di gruppo</strong>.
            </p>
            <p> 
              La <strong>formazione</strong> è un altro elemento fondamentale della vita aziendale: dedichiamo molto tempo a capire, conoscere e provare nuove tecnologie per migliorare il modo in cui scriviamo software.
            </p>
            <p>
              <a href="https://blog.codiceplastico.com/" target="_blank">Per conoscerci meglio, visita il nostro blog</a>
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
