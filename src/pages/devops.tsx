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
          <p>I vantaggi sono evidenti: <strong>scalabilità</strong>, gestione delle risorse, potenza di calcolo virtualmente    infinita. Tuttavia, allo stesso modo un <strong>sistema Cloud fuori controllo</strong> può essere causa di <strong>vulnerabilità</strong> e <strong>costi più alti del necessario</strong>. Basta poco per sostenere spese inutili o facilitare accessi indesiderati: una distrazione, fornitori diversi che accedono allo stesso sistema, un’istanza di test dimenticata.</p>

          <h4><span>Azure Assessment</span></h4>
          <p>
          Effettuiamo assessment di ambienti <strong>Azure</strong> esistenti. L’obiettivo è quello di verificare risorse e configurazioni in ottica di <strong>ottimizzazione di costi e sicurezza</strong>.
          </p>
          <p>
          La valutazione comprende la mappatura delle risorse, la verifica delle configurazioni delle stesse, un elenco di miglioramenti consigliati che l’azienda può mettere in atto nel breve periodo e un’analisi di possibili evoluzioni future.
          </p>
          <p>
            La consulenza di assessment si articola in tre fasi distinte:
            <ul>
              <li>Una call di <strong>discovering</strong> in cui raccogliamo le informazioni generali dell’ambiente e delle applicazioni (documentazione, flussi, etc…)</li>
              <li>La <strong>fase di verifica</strong> vera e propria: l’output di questa fase è il report di assessment ed eventuali altri documenti di mappatura.</li>
              <li>Una call di presentazione, nel quale l’analista presenta i risultati e spiega nel dettaglio il contenuto del report.</li>
            </ul>
          </p>
          <p>
            Gli assessment possono essere richiesti <strong>una tantum</strong> o all’interno di un <strong>contratto periodico</strong>. 
            Allo stesso modo possono essere <strong>singoli</strong> o nella formula <strong>“prima/dopo”</strong>. In questo caso, l’assessment viene ripetuto dopo un tempo stabilito, con lo scopo di verificare che le migliorie suggerite siano state implementate correttamente.
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">Richiedi un assessment</a>
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
          Forniamo consulenza a tutte quelle aziende che vogliono portare le proprie applicazioni su Azure. Offriamo inoltre un servizio di <strong>Governance</strong> per la gestione e il mantenimento delle subscription. Questo tipo di consulenza è particolarmente indicata per tutte quelle aziende che lavorano con diversi fornitori IT e consente di vigilare costantemente sulla corretta configurazione delle risorse e sul controllo dei costi.</p>
          <p>Con il servizio di <strong>Governance</strong>, un team dedicato è a supporto del cliente in modo proattivo: per ogni progetto andrà ad identificare la configurazione migliore dell’infrastruttura e a vigilare sul corretto utilizzo delle risorse. Il team si occupa inoltre di definire il codice di infrastruttura (con Terraform o Bicep) in puro stile IaC (Infrastructure as Code) e, grazie al versionamento, si garantiscono riproducibilità ed evoluzione strutturata dell’environment. </p>
          <p>
            <br/>
            <a href="/contatti/"  className="cp-service__button--bordered ">Voglio andare sul cloud!</a>
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
          L’area devops e gestione dei sistemi è parte integrante del nostro processo di costruzione di soluzioni software complete. Sin dalle prime fasi dello sviluppo, ci occupiamo, infatti, di creare e gestire gli ambienti necessari, sia <strong>in cloud</strong> che <strong>on premise</strong>, affinché le applicazioni funzionino correttamente e con continuità.</p>
          <p>Ogni cliente ha esigenze differenti, così come ogni progetto può doversi integrare con altre applicazioni o in ambienti già esistenti. Utilizziamo l’<strong>orchestratore</strong> Kubernetes (K8S) come strumento di deploy su <strong>cluster</strong> esistenti così come forniamo consulenza nel pacchettizzare applicazioni terze in modo che da rendere possibile il deploy su su <strong>cluster K8S</strong>. 
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">Voglio andare più veloce!</a>
          </p>
          
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
     
      {/* <Customers /> */}
    </div>
  </Layout>
)

export default Design
