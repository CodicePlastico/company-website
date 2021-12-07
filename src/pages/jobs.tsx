import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface Jobs {
  label: string
  items: string[]
}

const jobs: Jobs[] = [
  {
    label: 'Posizioni Aperte',
    items: ['Software developer <strong>.net</strong> (Mid o Senior)', 'Software developer <strong>node.js</strong> (Mid o Senior)' ]
  }
]

const Hiring = () => (
  <Layout>
    <SEO title="Lavora con noi" cover="https://codiceplastico.com/share-jobs.jpg" />
    <div className="cp-internal-page cp-hiring">
      <div className="cp-grid">
        <div className="cp-grid__container">
          <div className="cp-internal-page__content cp-grid__content">
            <h1><span>Lavora</span> con noi</h1>
            <p className="cp-typography__main-text">
            Siamo alla ricerca di persone da aggiungere ai nostri Team di Sviluppo. Se vuoi occuparti di progettazione e sviluppo di applicazioni, <a href="mailto:jobs@codiceplastico.com?subject=Candidatura%20DevTeam%20CodicePlastico">manda la tua candidatura!</a>
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
              {jobs.map((s, i) => (
                <div className="cp-about__skills-column"  key={`skill-${i}`}>
                  <h3>{s.label}</h3>
                  <ul className="cp-about__skills-items">
                     <li className="cp-about__skills-item"><a href="#jr">Junior Software developer</a></li>
                      <li className="cp-about__skills-item"><a href="#senior">Software developer <strong>.net</strong> (Mid o Senior)</a></li>
                      <li className="cp-about__skills-item"><a href="#senior">Software developer <strong>node.js</strong> (Mid o Senior)</a></li>
                  
                  </ul>
                </div>
              ))}
          </div>
         

          </div>
        </div>
      </div>
      <div className="cp-grid cp-about__skills" id="jr">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h3><span>Junior</span> Software Developer</h3> 
          
          <h4><span>Cosa serve per entrare nel Team di CodicePlastico?</span></h4> 
       
          <ul className="bulletlist">
            <li>Almeno un anno di esperienza nello sviluppo software</li>  
            <li>Voglia di imparare e di lavorare in Team :) </li> 
          </ul>
          
          <p><strong><span>Per noi è interessante sapere:</span></strong></p>
          <ul className="bulletlist">
            <li>Se partecipi attivamente alla vita di qualche Community IT;</li>
            <li>Quali sono i tuoi side-project o se hai contribuito a qualche progetto Open Source;</li>
           
          </ul>
          <h4><span>Cosa offriamo?</span></h4> 
            <ul className="bulletlist">
              <li><strong>Contratto a Tempo indeterminato</strong> con RAL 27-32k annui</li> 
              <li><strong>Bonus annuale</strong>, proporzionale all'utile dell'Azienda. Crediamo molto nell'open governance e nella gestione collaborativa e trasparente. L'idea è, se si cresce, si cresce insieme;</li>
              <li><strong>Remote working</strong>: la nostra sede principale è a Brescia, ma dal 2018 abbiamo adottato un modello di lavoro orientato al remoto, alternando liberamente giornate in presenza al lavoro da casa.</li>
              <li>Ogni persona del team dispone di un monte ore da dedicare alla <strong>formazione</strong> individuale e di un budget annuale da spendere in corsi, libri, conferenze o qualsiasi cosa possa portare a migliorare le proprie skill. Regolarmente, inoltre, vengono proposti talk interni, corsi o workshop.</li>
            </ul>
            <br/>
            <p><a title="Invia una candidatura" className="cp-about__button " href="mailto:jobs@codiceplastico.com?subject=Candidatura%20DevTeam%20CodicePlastico"> <span>Iniva la tua candidatura!</span></a></p>
          </div>
        </div>
      </div>    

      <div className="cp-grid cp-about__skills" id="senior">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h3>Software developer .net o node.js <span>(Mid o Senior)</span></h3> 
          
          <h4><span>Cosa serve per entrare nel Team di CodicePlastico?</span></h4> 
            <ul className="bulletlist">
            <li>Ottima conoscenza dei <strong>linguaggi</strong> e piattaforme richiesti.</li>  
            <li>Capacità di <strong>teamworking e problem solving</strong>: Siamo un'azienda remote oriented, la maggior parte delle interazioni avviene online, spesso in maniera asincrona. Per questo è fondamentale avere buone doti interpersonali di comunicazione e di auto-organizzazione del lavoro.</li>
            <li>Familiarità con <strong>database</strong> relazionali e nosql.</li> 
            <li>Buona conoscenza di <strong>Docker</strong> e più in generale esperienza in architettura a <strong>microservizi</strong>.</li> 
          </ul>
        
          <p><strong><span>Sono considerate skill preferenziali, ma non obbligatorie:</span></strong></p>
          <ul className="bulletlist">
            <li>Esperienza con pipeline di CI/CD;</li>
            <li>Attitudine al teaching e a contribuire alla community con conferenze e talk;</li>
          </ul>
          <h4><span>Cosa offriamo?</span></h4> 
            <ul className="bulletlist">
              <li><strong>Contratto a Tempo indeterminato</strong> con RAL 35-40k annui</li> 
              <li><strong>Bonus annuale</strong>, proporzionale all'utile dell'Azienda. Crediamo molto nell'open governance e nella gestione collaborativa e trasparente. L'idea è, se si cresce, si cresce insieme;</li>
              <li><strong>Remote working</strong>: la nostra sede principale è a Brescia, ma dal 2018 abbiamo adottato un modello di lavoro orientato al remoto, alternando liberamente giornate in presenza al lavoro da casa.</li>
              <li>Ogni persona del team dispone di un monte ore da dedicare alla <strong>formazione</strong> individuale e di un budget annuale da spendere in corsi, libri, conferenze o qualsiasi cosa possa portare a migliorare le proprie skill. Regolarmente, inoltre, vengono proposti talk interni, corsi o workshop.</li>
            </ul>
            <br/>
            <p><a title="Invia una candidatura" className="cp-about__button " href="mailto:jobs@codiceplastico.com?subject=Candidatura%20DevTeam%20CodicePlastico"> <span>Iniva la tua candidatura!</span></a></p>
          </div>
        </div>
      </div>    


     
  
    </div>
  </Layout>
)

export default Hiring
