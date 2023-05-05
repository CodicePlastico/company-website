import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const ChFinance = () => {

  const [checked, setChecked] = useState('none')
  const handleChange = e => {
    if (checked === e.target.value) {
      setChecked('none')
    } else {
      setChecked(e.target.value)
    }
  }

  return (
    <Layout>
      <SEO title="Case History - Software per Intermediatori Finanziari" />
      <div className="cp-internal-page cp-ch cp-ch-finance ">
        <div className="cp-internal-page__bg"></div>

        <div className="cp-internal-page__content cp-internal-page__content--bg cp-grid intro">
          <div className="cp-grid__container">
            <div className="cp-internal-page__content cp-grid__content">
              <h1><span>Case</span> History</h1>
              <h2 className="">
                Come abbiamo aiutato aziende del <span>settore finanziario</span> a digitalizzare i loro processi
              </h2>

              <h5><span> Da molti anni sviluppiamo software per il settore Finanziario e di Risk Management.</span></h5>

              <p>Dalla Fintech che gestisce migliaia di pratiche al giorno alle piccole società di servizi, i problemi
                che le aziende di questo tipo devono affrontare quando avviano un processo di trasformazione digitale sono simili: <strong>raccolta dati</strong> da sistemi esterni come <em>Aida, Cerved, Telemaco o altri servizi</em>,
                analizzare <strong>documenti</strong>, <strong>bilanci</strong> e fare <strong>calcoli</strong>, ma soprattutto razionalizzare le procedure abbandonando i tanti amati fogli di calcolo.
              </p><p>Ma partiamo dal principio.</p>

            </div>
          </div>

        </div>

        <div className='cp-internal-page__content cp-grid cp-bg-inverted__maincolor'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>
              <h2> La situazione iniziale</h2>
              <p className='emph'>
                In principio c’era la carta. Poi sono arrivate le email, i fogli Excel e i documenti in PDF.<br />In principio i team erano di poche persone in grado di organizzarsi. Poi l’azienda si è ingrandita in breve tempo.
              </p>
              <p>Le aziende di servizi, soprattutto se operano in ambiti regolati, devono garantire alti standard di affidabilità e sicurezza. Non sempre, però, la crescita aziendale va di pari passo con l’evoluzione degli strumenti operativi. Questi sono i macro problemi che abbiamo raccolto nella nostra esperienza:</p>
              <div className='cp-ch__row r1'>

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/finance/training.svg' alt="icon" />
                  </div>
                  <p><strong>Le procedure non sono ben documentate</strong>: molte abilità dipendono da
                    alcuni dipendenti storici (silos di conoscenza), molte procedure sono gestite tramite
                    fogli di calcolo condivisi, <strong className='inverted'>difficili da manutenere</strong> e su cui
                    <strong className='inverted'> non c’è modo di tracciare chi ha fatto cosa</strong>.</p>
                </div>
                {/* fine block */}

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/finance/knowledge.svg' alt="icon" />
                  </div>
                  <p><strong>L’operatività è frammentata su molti strumenti</strong>: il CRM per il contatto, il vecchio gestionale per
                    la fatturazione, Cerved per scaricare un report, Excel per fare i conti e
                    via dicendo. Quali strumenti, in che modo usarli, con quali credenziali è tutta <strong className='inverted'>operatività a carico degli operatori</strong>.</p>
                </div>
                {/* fine block */}

              </div>

              <div className='cp-ch__row r2'>

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/finance/file.svg' alt="icon" />
                  </div>
                  <p>Nel settore finanziario la <strong>raccolta documentale</strong> è un tema molto presente: finanziamenti, pratiche, bandi vanno a buon fine quando vengono raccolti documenti giusti, con le informazioni giuste. </p>
                  <p><strong className="inverted">Spesso le comunicazioni e gli scambi di documenti con i clienti finali avvengono via email. &Egrave; facile perderli.</strong></p>
                </div>
                {/* fine block */}

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/finance/distributed.svg' alt="icon" />
                  </div>
                  <p>
                    L’<strong>archiviazione</strong> dei documenti raccolti avviene su server condivisi, con <strong className='inverted'>convenzioni basate sui nomi</strong> dei file e delle cartelle. &Egrave; facile sbagliare.
                  </p>
                </div>
                {/* fine block */}

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/finance/stamp.svg' alt="icon" />
                  </div>
                  <p>Le <strong>validazioni</strong> delle informazioni vengono eseguite <strong className='inverted'>manualmente</strong> dagli operatori. Ci vuole tempo.</p>
                </div>
                {/* fine block */}



              </div>

            </div>{/* fine content*/}
          </div>{/* fine container*/}
        </div>



        <div className='cp-grid cp-section'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>

              <h3><span>Le Soluzioni</span></h3>
              <p>Come CodicePlastico, siamo focalizzati sulla realizzazione di software completamente personalizzati. <strong>Creiamo applicazioni modulari da zero</strong> e
                <strong> realizziamo integrazioni</strong> che permettono a sistemi diversi di scambiarsi informazioni.</p>
              <p>Ecco alcune soluzioni che abbiamo realizzato per le aziende del settore finanziario:</p>

              <nav className='accordion'>
                <input type="checkbox" onChange={handleChange} name="accordion" id="pratiche-finanziarie" value="pratiche" checked={checked == 'pratiche'} />
                <section className="box">
                  <label className="box-title" htmlFor="pratiche-finanziarie" >
                    <h4>Gestione di Pratiche Finanziarie</h4>

                  </label>{/* Fine titolo accordion */}

                  <div className="box-content">

                    {/* inizio block */}
                    <div className='cp-ch__block horizontal'>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/workflow.svg' alt="icon" />
                      </div>
                      <p>Abbiamo realizzato applicativi per <strong>l’implementazione di flussi operativi</strong> tra diversi uffici/operatori,
                        facilitando la raccolta, validazione e approvazione delle informazioni che risultano organizzate e facili da ricercare.</p>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>Procedure chiare e guidate che rendono più sicuro il controllo delle attività degli operatori, facilitando il passaggio di consegne.
                          Tutti nel team di lavoro dispongono informazioni puntuali e sempre aggiornate.</p>
                      </div>
                    </div>
                    {/* fine block */}

                    {/* inizio block */}
                    <div className='cp-ch__block horizontal'>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/use-case.svg' alt="icon" />
                      </div>
                      <p>Il secondo step è stato <strong>aiutare i manager dei team distribuiti</strong>, realizzando un sistema di <strong>assegnazione</strong> delle attività e <strong>presa in carico</strong> che aiuta il team lead nelle assegnazioni sulla base di diversi criteri (assenze, competenze, etc…), gli operatori vedono solo le pratiche assegnate e le loro attività vengono tracciate.</p>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>Carico di lavoro omogeneo per gli operatori, meno sovrapposizioni e possibilità da parte del management di controllare la produttività.</p>
                      </div>
                    </div>
                    {/* fine block */}

                    {/* inizio block */}
                    <div className='cp-ch__block horizontal'>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/analytics.svg' alt="icon" />
                      </div>
                      <div>
                        <p>Nel settore finanziario la gestione documentale è fondamentale:  abbiamo studiato come renderla trasversale nei diversi moduli, facilitando gli operatori con strumenti come:</p>
                        <ul>
                          <li><strong>OCR</strong> per l’analisi e il riconoscimento del testo,</li>
                          <li><strong>Metadati</strong> per la ricerca e tassonomie per la facilitare le ricerche,</li>
                          <li>Sistemi di <strong>pre-valutazione</strong> automatica,</li>
                          <li>Integrazione con sistemi di <strong>firma digitale</strong> per contratti e documenti che richiedono firme, anche multiple.</li></ul>
                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>Riduzione degli errori, meno documenti persi, miglioramento delle performance, archiviazione sicura e senza perdita di dati.</p>
                      </div>
                    </div>
                    {/* fine block */}

                    {/* inizio block */}
                    <div className='cp-ch__block horizontal'>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/market.svg' alt="icon" />
                      </div>
                      <div>
                        <p>Infine, parliamo delle <strong>integrazioni</strong>. Uno dei vantaggi di avere un software su misura è che può essere fatto evolvere in più momenti, soprattutto se le esigenze cambiano nel tempo. </p>
                        <p>Ad esempio, abbiamo integrato nei nostri moduli sia sistemi per il recupero automatico di informazioni da fonti esterne come <em>Aida, Cerved, Telemaco,</em> etc… sia per facilitare <strong>lo scambio dati tra software diversi già presenti</strong> nell’ecosistema aziendale. </p>
                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>Informazioni sempre aggiornate, operatività lineare: gli operatori non devono passare continuamente da uno strumento all’altro, con la garanzia che le informazioni di cui dispongono siano sempre aggiornate.</p>
                      </div>
                    </div>
                    {/* fine block */}
                  </div>{/* Fine contenuto accordion */}
                </section>{/* Fine blocco accordion */}



                <input type="checkbox" onChange={handleChange} name="accordion" id="rating" value="rating" checked={checked == 'rating'} />
                <section className="box">
                  <label className="box-title" htmlFor="rating">
                    <h4>Applicazioni di Analisi di Bilancio e calcolo del Rating</h4>

                  </label>{/* Fine titolo accordion */}

                  <div className="box-content" id='content-rating'>

                    {/* inizio block */}
                    <div className='cp-ch__block vertical '>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/profit.svg' alt="icon" />
                      </div>
                      <div>
                        <p>Partendo dai file Excel e dalle logiche dei nostri clienti e abbiamo creato dei veri e propri "motori di regole”. La gestione programmatica dei criteri ci ha permesso quindi di realizzare <strong>sistemi per la generazione di valutazioni e pre-valutazioni automatiche</strong>, con eventuale ricalcolo automatico basato su eventi e condizioni. </p>

                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>L’uso di un sistema centralizzato per le valutazioni dei dati fa sì che i criteri siano sempre aggiornati e condivisi, oltre a ridurre la possibilità di manipolazioni o di errori. Gli operatori vengono sgravati da molte operazioni manuali e possono consultare dati sempre aggiornati.</p>
                      </div>
                    </div>
                    {/* fine block */}

                    {/* inizio block */}
                    <div className='cp-ch__block vertical '>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/branding.svg' alt="icon" />
                      </div>
                      <div>
                        <p>Anche l’occhio vuole la sua parte! Negli ultimi anni abbiamo lavorato molto sulla <strong>presentazione dei risultati</strong>, sia sotto forma di dashboard per gli operatori, sia come applicazioni di consultazione e download report per i clienti finali.</p>
                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>I clienti finali sono autonomi nella ricerca e consultazione dei report, gli amministratori dispongono di dashboard di presentazione dei dati, anche storici, migliorando il controllo e l’analisi dell’operatività. I report forniti ai clienti sono omogenei tra loro e realizzati secondo le linee guida del brand.</p>
                      </div>
                    </div>
                    {/* fine block */}

                  </div>{/* Fine contenuto accordion */}
                </section>{/* Fine blocco accordion */}




                <input type="checkbox" onChange={handleChange} name="accordion" id="rete-vendita" value="rete-vendita" checked={checked == 'rete-vendita'} />

                <section className="box">
                  <label className="box-title" htmlFor="rete-vendita">
                    <h4>Evoluzioni orizzontali con altri uffici: l'esempio della Rete Vendita</h4>

                  </label>{/* Fine titolo accordion */}

                  <div className="box-content">
                    {/* inizio block */}
                    <div className='cp-ch__block horizontal'>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/distributed-2.svg' alt="icon" />
                      </div>
                      <div>
                        <p>Una volta che il flusso delle pratiche è digitalizzato, è facile ricevere richieste di <strong>moduli integrativi</strong> con altri uffici. </p>
                        <p>Ad esempio, per le aziende che si
                          avvalgono della rete vendita, abbiamo realizzato un’applicazione mobile per facilitare la <strong>raccolta documentale</strong> con scansione e firma digitale dei contratti. In altri casi, supportiamo la rete vendita con applicativi per la gestione di appuntamenti e pre-valutazione dei clienti.</p>
                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>I diversi operatori hanno accesso solo alle informazioni di cui hanno competenza e la loro operatività viene guidata dal software. Lato dirigenza, è possibile monitorare le performance di campagne e rete vendita.</p>
                      </div>
                    </div>
                    {/* fine block */}

                  </div>{/* Fine contenuto accordion */}
                </section>{/* Fine blocco accordion */}

                <input type="checkbox" onChange={handleChange} name="accordion" id="raccolta-doc" value="raccolta-doc" checked={checked == 'raccolta-doc'} />

                <section className="box" >
                  <label className="box-title" htmlFor="raccolta-doc">
                    <h4>Applicazioni per la raccolta documentale: conivolgere il Cliente finale</h4>

                  </label>{/* Fine titolo accordion */}

                  <div className="box-content" id='content-raccolta-doc'>

                    {/* inizio block */}
                    <div className='cp-ch__block vertical '>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/data-collection.svg' alt="icon" />
                      </div>
                      <div>
                        <p>
                          Anche per le aziende B2B la digitalizzazione può spingersi fino al cliente finale. Sempre in ambito documentale, abbiamo realizzato <strong>applicazioni web e mobile</strong> per la raccolta e la classificazione di documenti.
                          Se un cliente che deve fornire dei documenti per una pratica, può farlo direttamente in un’area privata, dove potrà anche controllare l’andamento della sua richiesta.
                        </p>

                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>
                          I clienti sono indipendenti: meno telefonate al supporto. Gli operatori si trovano i file organizzati e possono gestire le valutazioni sia grazie a eventuali analisi automatiche del contenuto, sia scambiando informazioni e messaggi con i clienti direttamente in piattaforma.
                        </p>
                      </div>
                    </div>
                    {/* fine block */}

                    {/* inizio block */}
                    <div className='cp-ch__block vertical '>
                      <div className='cp-ch__icon'>
                        <img src='/ch/finance/team.svg' alt="icon" />
                      </div>
                      <div>
                        <p>
                          Le evoluzioni possibili sono molteplici: dall’integrazione di sistemi di firma digitale, alla generazione automatica di documenti: grazie alle <strong>integrazioni con fonti esterne</strong> è il sistema che recupera le informazioni corrette dell’azienda e genera i documenti necessari: il cliente dovrà solo controllarli e firmarli.
                        </p>

                      </div>
                      <div className='changes'>
                        <h5>Cosa è cambiato</h5>
                        <p>
                          Aiutare il cliente nella compilazione facilita la chiusura dei deal e il controllo documentale. Oltre al fatto che i clienti sono ben contenti di non dover compilare dichiarazioni, autocertificazioni o business plan.
                        </p>
                      </div>
                    </div>
                    {/* fine block */}

                  </div>{/* Fine contenuto accordion */}
                </section>{/* Fine blocco accordion */}

              </nav>








            </div>{/* Fine content*/}
          </div>{/* Fine container*/}
        </div> {/* Fine grid*/}

        <div className='cp-grid cp-section cp-bg__n10'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>
              <h2>Fasi e organizzazione del progetto</h2>
              <p>La realizzazione di un software <em>custom</em> può sembrare un obiettivo insormontabile:
                gli attori in gioco sono tanti e non sempre è facile quantificare i costi benefici.
                Inoltre, in ambito Finanziario, i sistemi devono essere in grado di <strong>recepire velocemente
                  nuove regole e normative</strong>: definire un processo iterativo per la realizzazione e manutenzione del software è fondamentale.</p>

              {/* inizio block */}
              <div className='cp-ch__block horizontal '>
                <div className='cp-ch__icon'>
                  <img src='/ch/finance/design.svg' alt="icon" />
                </div>
                <div>
                  <p>
                    Abbiamo coinvolto i nostri clienti in <strong>workshop di co-design</strong>,
                    realizzando mappature e prototipi per validare le soluzioni con chi userà il software. </p>

                </div>
                <div className='changes'>

                  <p>Coinvolgere gli utenti ha permesso ai nostri clienti di progettare <strong>sistemi realmente utili</strong> e di ridurre le frizioni  legate alle resistenze al cambiamento.</p>
                </div>

              </div>
              {/* fine block */}


              {/* inizio block */}
              <div className='cp-ch__block horizontal '>
                <div className='cp-ch__icon'>
                  <img src='/ch/finance/agile.svg' alt="icon" />
                </div>
                <div>
                  <p>
                    Abbiamo organizzato lo sviluppo in <strong>iterazioni</strong>: le fasi di design, sviluppo, test e deploy si avvicendano in continuazione. Ove possibile, in ciascuna iterazione, abbiamo rilasciato <strong>parti del software direttamente utilizzabili</strong> dali utenti.</p>

                </div>
                <div className='changes'>

                  <p>Testare il software a partire da piccole funzionalità ha permemesso ai clienti di testarle, dare feedback e raccogliere i frutti del nuovo software in breve tempo. <strong><br />Il software cresce progressivamente e si modella sulle necessità.</strong> </p>
                </div>

              </div>
              {/* fine block */}

              {/* inizio block */}
              <div className='cp-ch__block horizontal '>
                <div className='cp-ch__icon'>
                  <img src='/ch/finance/deploy.svg' alt="icon" />
                </div>
                <div>
                  <p>
                    Oltre allo sviluppo ci siamo occupati dell’intero <strong>ciclo di vita dell’applicazione</strong>, dal deploy alla manutenzione. In base alle necessità dell’azienda abbiamo realizzato installazioni on premise o in cloud.
                  </p>
                </div>
                <div className='changes'>

                  <p>
                    I clienti sanno di avere un punto di riferimento a cui rivolgersi, per manutenzione, supporto ed evolutive.
                  </p>
                </div>

              </div>
              {/* fine block */}

            </div>{/* Fine content*/}
          </div>{/* Fine container*/}
        </div> {/* Fine grid*/}

        <div className='cp-grid cp-section'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>

              <h3><span>Chi siamo</span></h3>
              <p>Da più di dieci anni costruiamo software su misura: l’esperienza maturata in diversi settori ci ha permesso di crescere in maniera solida e indipendente.
                Siamo innamorati della tecnologia: abbiamo scritto <a href="">libri</a> e spesso puoi incontrarci come <a href="">speaker in numerose conferenze</a> di livello nazionale.
                Il tipo di relazione che proponiamo ai nostri clienti è un <strong>affiancamento orientato al miglioramento continuo</strong>: il focus non è lo sviluppo, ma come il vostro nuovo software, <strong>unico</strong>
                e cucito sulle vostre necessità, vi permette di <strong>migliorare il vostro business</strong>.</p>
              <p>Se hai un'idea o un processo aziendale da digitalizzare scrivici: <strong>saremo felici di capire come la tecnologia può migliorare le tue giornate</strong>.</p>
              <p><a href="/about/"><strong>About:</strong></a> <a href="/design/">Design</a>  - <a href="/dev/">Dev</a> - <a href="/devops/">Devops & Cloud</a></p>
            </div>{/* Fine content*/}
          </div>{/* Fine container*/}
        </div> {/* Fine grid*/}


        <div className="cp-grid">
          <div className="cp-grid__container">
            <div className="cp-grid__content">

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChFinance
