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
                    <li className="cp-about__skills-item"><a href="#designer">Junior UI/UX designer</a></li>
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

      <div className="cp-grid cp-about__skills" id="designer">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h3><span>Junior</span> UI/UX Designer</h3> 
          
          <h4><span>Che cosa fa un designer in CodicePlastico?</span></h4>
          <p>
            Siamo una software house, che si occupa di progettare e realizzare piattaforme web 
            fortemente personalizzate. Il nostro team di design affianca il team tecnico, 
            composto da programmatori e devops, nell’intero ciclo di sviluppo del software, 
            dall’analisi iniziale ai progetti evolutivi, progettando l’esperienza utente 
            e le interfacce software correlate.
          </p>
          <p>Le attività comprendono quindi:</p>
          <ul className="bulletlist">
            <li>Organizzazione e gestione di workshop di co-design per la raccolta di requisiti</li>  
            <li>Formalizzazione dei requisiti attraverso mappature e flowchart</li> 
            <li>
              Prototipazione a vari livelli di fedeltà (da wireframe a mockup) 
              attraverso l’utilizzo sia di librerie di terzi, sia di design system interni.
            </li> 
          </ul>

          <h4><span>Cosa serve per entrare nel Team di CodicePlastico?</span></h4> 
       
          <ul className="bulletlist">
            <li>Almeno un anno di esperienza nella progettazione e Design di interfacce</li>  
            <li>Uso di figma, post-it, pennarelli e voglia di imparare</li> 
          </ul>
          
          <p><strong><span>Per noi è interessante sapere:</span></strong></p>
          <ul className="bulletlist">
            <li>Se partecipi attivamente alla vita di qualche Community IT;</li>
            <li>Quali sono i tuoi side-project o se hai contribuito a qualche progetto Open Source;</li>
           
          </ul>
          <h4><span>Cosa offriamo?</span></h4> 
            <ul className="bulletlist">
              <li><strong>Contratto a Tempo indeterminato</strong> con RAL 25-30k annui</li> 
              <li><strong>Bonus annuale</strong>, proporzionale all'utile dell'Azienda. Crediamo molto nell'open governance e nella gestione collaborativa e trasparente. L'idea è, se si cresce, si cresce insieme;</li>
              <li><strong>Remote working</strong>: la nostra sede principale è a Brescia, ma dal 2018 abbiamo adottato un modello di lavoro orientato al remoto, alternando liberamente giornate in presenza al lavoro da casa.</li>
              <li>Ogni persona del team dispone di un monte ore da dedicare alla <strong>formazione</strong> individuale e di un budget annuale da spendere in corsi, libri, conferenze o qualsiasi cosa possa portare a migliorare le proprie skill. Regolarmente, inoltre, vengono proposti talk interni, corsi o workshop.</li>
            </ul>
            <br/>
            <a title="Invia una candidatura" id="jobs__junior" className="cp-about__button" href="mailto:jobs@codiceplastico.com?subject=Candidatura%20DevTeam%20CodicePlastico">Invia la tua candidatura!</a>
            <div className="cp-home__jobs-links"><p><strong>Vuoi conoscerci meglio?</strong> Puoi scoprire <a href="https://codiceplastico.com/">come lavoriamo</a>, conoscere il <a href="https://codiceplastico.com/team/">Team</a> e vedere come è la vita in <a href="https://blog.codiceplastico.com/categories/vita-plastica">CodicePlastico</a>.</p></div>
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
            <a title="Invia una candidatura" id="jobs__junior" className="cp-about__button" href="mailto:jobs@codiceplastico.com?subject=Candidatura%20DevTeam%20CodicePlastico">Invia la tua candidatura!</a>
            <div className="cp-home__jobs-links"><p><strong>Vuoi conoscerci meglio?</strong> Puoi scoprire <a href="https://codiceplastico.com/">come lavoriamo</a>, conoscere il <a href="https://codiceplastico.com/team/">Team</a> e vedere come è la vita in <a href="https://blog.codiceplastico.com/categories/vita-plastica">CodicePlastico</a>.</p></div>
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
            <a title="Invia una candidatura" id="jobs__senior" className="cp-about__button" href="mailto:jobs@codiceplastico.com?subject=Candidatura%20DevTeam%20CodicePlastico">Invia la tua candidatura!</a>
            <div className="cp-home__jobs-links"><p><strong>Vuoi conoscerci meglio?</strong> Puoi scoprire <a href="https://codiceplastico.com/">come lavoriamo</a>, conoscere il <a href="https://codiceplastico.com/team/">Team</a>, leggere i nostri <a href="https://blog.codiceplastico.com/categories/tech">articoli tech</a> e rivivere gli <a href="https://blog.codiceplastico.com/events.html">eventi</a> a cui abbiamo partecipato come speaker.</p></div>
          
          </div>
        </div>
      </div>    


     
  
    </div>
  </Layout>
)

export default Hiring
