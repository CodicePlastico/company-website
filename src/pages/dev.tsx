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
          <h4><span>Sviluppo applicazioni</span></h4>
          <p>
            Realizziamo applicazioni esclusivamente su misura: non abbiamo prodotti software pronti da adattare, ma siamo specializzati nella costruzione di soluzioni da zero. Lavoriamo insieme al team di design per la definizione dei requisiti funzionali per poi passare all’analisi tecnica e di fattibilità del progetto. Adottiamo metodologie di sviluppo agile, prediligendo l’approccio a iterazioni.
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">cta</a>
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
          <h4><span>Affiancamento altri team IT</span></h4>
          <p>
            Affianchiamo i team IT dei nostri clienti per azioni di mentoring a medio lungo termine o per obiettivi specifici come il rilascio di funzionalità, refactoring dei processi, app modernization o il passaggio a nuove tecnologie. 
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">cta</a>
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
      {/* <Customers /> */}
    </div>
  </Layout>
)

export default Design
