import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import serviceSeparator from './dev.png'

const Design = () => (
  <Layout>
    <SEO title="Sviluppo software" />
    <div className="cp-internal-page cp-service ">
      <div className="cp-internal-page__bg"></div>
      <div className="cp-internal-page__content cp-internal-page__content--bg--dev cp-grid">
           <div className="cp-grid__container">
          <div className="cp-internal-page__content cp-grid__content">
            <h1><span>Dev</span> e sviluppo software</h1>
            <p className="cp-typography__main-text">
              Progettare è fantastico, ma trasformare le vostre idee in applicazioni lo è di più.
            </p>
          </div>
        </div>
       
      </div>

      <div className="cp-grid cp-service__sec">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h2><span>Sviluppo applicazioni</span></h2>
          <p>
            Realizziamo <strong>applicazioni esclusivamente su misura</strong>: non abbiamo prodotti software pronti da adattare, ma siamo specializzati nella costruzione di soluzioni da zero. 
            Lavoriamo insieme al team di design per la definizione dei requisiti funzionali per poi passare all’analisi tecnica e di fattibilità del progetto. 
          </p>
          <p>
            Adottiamo metodologie di sviluppo <strong>agile</strong>, prediligendo l’approccio a iterazioni.
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">Mi serve un'applicazione custom</a>
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
      
      <div className="cp-grid cp-service__sec">

        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h2><span>Affiancamento altri team IT</span></h2>
          <p>
            Affianchiamo i team IT dei nostri clienti per azioni di <strong>mentoring</strong> a medio lungo termine o per obiettivi specifici come il rilascio di funzionalità, refactoring dei processi, app modernization o il passaggio a nuove tecnologie. 
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">Potete aiutare il mio team?</a>
          </p>
          
          </div>
        </div>
      </div>                     
     
      <div className="cp-grid cp-service__tools">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p><strong>CHE LINGUAGGI DI PROGRAMMAZIONE USIAMO? </strong>: .NET, Node.Js, Elixir</p>
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
