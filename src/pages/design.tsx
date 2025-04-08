import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import serviceSeparator from './design.png'

const Design = () => (
  <Layout>
    <SEO title="Design - UI - Ux" />
    <div className="cp-internal-page cp-service ">
      <div className="cp-internal-page__bg"></div>
      <div className="cp-internal-page__content cp-internal-page__content--bg--design cp-grid">
           <div className="cp-grid__container">
          <div className="cp-internal-page__content cp-grid__content">
            <h1><span>Design</span> dell’esperienza</h1>
            <p className="cp-typography__main-text">
            Un prodotto digitale è un’insieme di interazioni tra un device e un utente. Fare in modo che queste interazioni siano utili e piacevoli è l’obiettivo del nostro team di design.
            </p>
          </div>
        </div>
       
      </div>

      <div className="cp-grid cp-service__research">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h2><span>Ricerca e analisi</span></h2>
          <p>
            Organizziamo <strong>workshop partecipativi</strong> per l’analisi di processi esistenti 
            o per la creazione di nuove applicazioni. Attraverso queste attività diamo forma alle 
            necessità degli <strong>utenti</strong>, strutturiamo le <strong>informazioni</strong> 
            e studiamo le interazioni 
            necessarie in armonia con obiettivi e modelli di business.
          </p> 
          <p>
            Crediamo molto nel coinvolgimento di utenti e stakeholders: 
            la condivisione della progettazione sotto forma di <strong>gioco</strong> consente 
            sia di <strong>creare soluzioni concrete</strong> e tagliate sugli utenti 
            sia di far <strong>emergere problemi e criticità</strong>.
          </p>
          <p>
              Individuare punti di vista diversi, pain points e veri e propri dubbi è uno 
              degli aspetti <strong>strategici</strong> dell’approccio partecipativo: 
              permette di <strong>valutare idee prima di investire</strong> in design e sviluppo, 
              trovando delle soluzioni, alternative di strategia e azioni concrete.
          </p>
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">Hai un’idea e non sai da dove partire?</a>
          </p>
         
          </div>
        </div>
      </div>

      <div className="cp-grid cp-service__separator">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p>      
              <img className="" src={serviceSeparator} alt=""/>
          </p>
          </div>
        </div>
      </div>
      
      <div className="cp-grid cp-service__uxui">

        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h2><span>UX & UI</span></h2>
          <p>
            Una volta definite le necessità ci occupiamo della <strong>progettazione</strong> dell’interfaccia. 
            Il risultato è un artefatto che consente ai nostri clienti di <strong>valutare</strong> aspetto, 
            interazioni, microtesti e in generale il look & feel dell’applicazione. 
          </p>
          <p> 
            Anche in questa fase l’approccio può essere <strong>partecipativo</strong> con sessioni di 
            rapid prototyping che, successivamente, vengono normalizzate e ridisegnate dal nostro team di design.
          </p>
          <h3>Realizzazione prototipi: gradi di fedeltà e interazioni</h3>
          <p>Per grado di fedeltà di un prototipo si intende quanto il prototipo assomiglia al 
              prodotto finito. Realizziamo sia prototipi a <strong>bassa fedeltà</strong> (es. wireframe) 
              che consentono di testare flussi e interazioni di alto livello, 
              sia prototipi ad <strong>alta fedeltà</strong> per valutare in maniera precisa 
              l’aspetto dell’applicazione.  
          </p>
          <p>
            I prototipi interattivi consentono di <strong>valutare scenari di interazione</strong> attraverso
             l’utilizzo del prototipo in un ambiente di simulazione (pc, tablet o smartphone). 
             Questo tipo di servizio è particolarmente indicato sia per <strong>testare funzionalità specifiche</strong> con gli utenti, sia per <strong>presentazioni</strong> di alto profilo.
          </p>
          <p><br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">Inizia a progettare con noi</a>
          </p>
          
          </div>
        </div>
      </div>                     
     
      <div className="cp-grid cp-service__tools">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p><strong>CHE STRUMENTI USIAMO?</strong>: Carta, penna, postit, colla e Figma</p>
          </div>
        </div>
      </div>
      <div className="cp-grid cp-service__innermenu">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p><a href="/about/"><strong>About</strong></a> - <a href="/design/">Design</a>  - <a href="/dev/">Dev</a> - <a href="/devops/">Devops & Cloud</a></p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Design
