import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Spaceship from '../assets/about/spaceship.svg'
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
          <div className="cp-grid__content">
            <h1><span>Chi</span> siamo</h1>
            <p className="cp-typography__main-text">
              Siamo sviluppatori, analisti, designer: ci piace molto lavorare in squadra, 
              ma diamo il massimo anche da soli, 
              immersi nella nostra musica preferita
            </p>
          </div>
        </div>
        <div className="cp-grid__right">
          <Spaceship />
        </div>
      </div>
      <div className="cp-grid cp-about__skills">
        <div className="cp-grid__left">
          <p className="cp-about__skills-label">Cosa facciamo</p>
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
          <p className="cp-about__skills-label">Come lavoriamo</p>
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
            Nel nostro team c’è spazio solo per chi ha una passione sfrenata per la tecnologia e per la perfezione.
          </div>
        </div>
      </div>
      <Customers />
    </div>
  </Layout>
)

export default AboutUs
