import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import serviceSeparator1 from './devops1.png'
import serviceSeparator2 from './devops2.png'

const Design = () => (
  <Layout>
    <SEO title="Sviluppo software" />
    <div className="cp-internal-page cp-service ">
      <div className="cp-internal-page__bg"></div>
      <div className="cp-internal-page__content cp-internal-page__content--bg--cloud cp-grid">
           <div className="cp-grid__container">
          <div className="cp-internal-page__content cp-grid__content">
            <h1><span>Devops </span>& Cloud</h1>
            <p className="cp-typography__main-text">
              Il cloud ha rivoluzionato il modo in cui applicazioni e sistemi vengono rilasciati e gestiti. 
            </p>
          </div>
        </div>
       
      </div>

      <div className="cp-grid cp-service__sec">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p>I vantaggi sono evidenti: scalabilità, gestione delle risorse, potenza di calcolo virtualmente infinita. Tuttavia, allo stesso modo un sistema Cloud fuori controllo può essere causa di vulnerabilità e costi più alti del necessario. Basta poco per sostenere spese inutili o facilitare accessi indesiderati: una distrazione, fornitori diversi che accedono allo stesso sistema, un’istanza di test dimenticata.</p>
          <h4><span>Azure Assessment</span></h4>
          <p>
            Effettuiamo assessment di ambienti Azure esistenti. L’obiettivo è quello di verificare risorse e configurazioni in ottica di ottimizzazione di costi e sicurezza.
          </p>
          <p>
            La valutazione si riferisce ad un determinato istante e comprende la mappatura delle risorse, la verifica delle configurazioni delle stesse, un elenco di miglioramenti consigliati che l’azienda può mettere in atto nel breve periodo e un’analisi di possibili evoluzioni future.
          </p>
          <p>
            La consulenza di assessment si articola in tre fasi distinte:
            <ul>
              <li>- Una call di discovering in cui raccogliamo le informazioni generali dell’ambiente e delle applicazioni (documentazione, flussi, etc…)</li>
              <li>- La fase di verifica vera e propria, durante la quale chiediamo di non effettuare modifiche all’ambiente. L’output di questa fase è il report di assessment ed eventuali altri documenti di mappatura.</li>
              <li>- Una call di presentazione, nel quale l’analista presenta i risultati e spiega nel dettaglio il contenuto del report.</li>
            </ul>
          </p>
          <p>
            Gli assessment possono essere richiesti  una tantum o all’interno di un contratto periodico. Allo stesso modo possono essere singoli o nella formula “prima/dopo”. In questo caso, l’assessment viene ripetuto dopo un tempo stabilito, con lo scopo di verificare che le migliorie suggerite siano state implementate correttamente.
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
              <img className="" src={serviceSeparator1} alt=""/>
          </p>
          </div>
        </div>
      </div>
      
      <div className="cp-grid cp-service__sec">

        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h4><span>Cloud design e Governance</span></h4>
          <p>
          Forniamo consulenza a tutte quelle aziende che vogliono portare le proprie applicazioni sul cloud, dalla scelta della piattaforma migliore, alla configurazione dei sistemi.</p> 
          <p>Per gli ambienti Azure, inoltre offriamo un servizio di Governance per la gestione e il mantenimento delle risorse. Questo tipo di consulenza è particolarmente indicata per tutte quelle aziende che lavorano con diversi fornitori IT e consente di vigilare costantemente sulla corretta configurazione delle risorse e sul controllo dei costi.</p> 
          <p>Il servizio di Governance è basato sull’approccio "infrastructure as a code”, dove la costruzione e configurazione delle risorse avviene in maniera programmatica. In questo modo garantiamo alle aziende il versionamento di tutte le modifiche e, di conseguenza, sia la possibilità di replicare l’infrastruttura in breve tempo sia di poter tornare a scenari precedenti del sistema.
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
              <img className="" src={serviceSeparator2} alt=""/>
          </p>
          </div>
        </div>
      </div>
      
      <div className="cp-grid cp-service__sec">

        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h4><span>Devops e Sys</span></h4>
          <p>
          Sia che le applicazioni siano cloud o on premise, offriamo consulenza per l’orchestrazione delle risorse...
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
          <p><strong>CHE STRUMENTI USIAMO?</strong>: HELP!</p>
          </div>
        </div>
      </div>
      {/* <Customers /> */}
    </div>
  </Layout>
)

export default Design
