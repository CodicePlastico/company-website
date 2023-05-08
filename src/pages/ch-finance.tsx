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

              <h3><span>Contattaci</span></h3>
              <p>Da più di dieci anni costruiamo software su misura: l’esperienza maturata in diversi settori ci ha permesso di <a href="https://www.ft.com/ft1000-2022" target="_blank" rel="noopener noreferrer">crescere in maniera solida e indipendente</a>.
                Siamo innamorati della tecnologia: abbiamo scritto <a href="https://blog.codiceplastico.com/emanuele-delbono-libro-ddd"  target="_blank" rel="noopener noreferrer">libri</a> e spesso puoi incontrarci come <a href="https://blog.codiceplastico.com/events.html"  target="_blank" rel="noopener noreferrer">speaker in numerose conferenze</a> di livello nazionale.
                Il tipo di relazione che proponiamo ai nostri clienti è un <strong>affiancamento orientato al miglioramento continuo</strong>: il focus non è lo sviluppo, ma come il vostro nuovo software, <strong>unico</strong> e cucito sulle vostre necessità, vi permette di <strong>migliorare il vostro business</strong>.</p>
              <p>Se hai un'idea o un processo aziendale da digitalizzare scrivici: <strong>saremo felici di 
                progettare come la tecnologia può aiutare la tua azienda</strong>.</p>
              

            <form method="POST" action="https://codiceplastico.activehosted.com/proc.php" id="_form_11_" className="_form _form_11 _inline-form  _dark" noValidate>
    <input type="hidden" name="u" value="11" />
    <input type="hidden" name="f" value="11" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <input type="hidden" name="or" value="749be6215734ab2616195b60fdbb19f8" />
    <div className="_form-content">
      <div className="_form_element _x37848981 _full_width " >
        <label htmlFor="firstname" className="_form-label">
          Nome <span className='ac_required'>[*]</span>
        </label>
        <div className="_field-wrapper">
          <input type="text" id="firstname" name="firstname" placeholder="Digita il nome" required/>
        </div>
      </div>
      <div className="_form_element _x86613550 _full_width " >
        <label htmlFor="lastname" className="_form-label">
          Cognome <span className='ac_required'>[*]</span>
        </label>
        <div className="_field-wrapper">
          <input type="text" id="lastname" name="lastname" placeholder="Digita il cognome" required/>
        </div>
      </div>
      <div className="_form_element _field1 _full_width " >
        <label htmlFor="field[1]" className="_form-label">
          Azienda
        </label>
        <div className="_field-wrapper">
          <input type="text" id="field[1]" name="field[1]" placeholder="Inserisci la ragione sociale" />
        </div>
      </div>
      <div className="_form_element _x46141269 _full_width " >
        <label htmlFor="phone" className="_form-label">
          Telefono
        </label>
        <div className="_field-wrapper">
          <input type="text" id="phone" name="phone" placeholder="Digita il numero di telefono" />
        </div>
      </div>
      <div className="_form_element _x55460749 _full_width " >
        <label htmlFor="email" className="_form-label">
          Email <span className='ac_required'>[*]</span>
        </label>
        <div className="_field-wrapper">
          <input type="text" id="email" name="email" placeholder="Digita l&#039;email" required/>
        </div>
      </div>
      <div className="_form_element _x73759755 _full_width " >
        

        <fieldset className="_form-fieldset">

        <input data-autofill="false" type="hidden" id="field[13][]" name="field[13][]" value="~|" />
        <div className="_row _checkbox-radio">
          <input id="field_13Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." type="checkbox" name="field[13][]" value="Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." class="any"  required />
          <span>
            <label for="field_13Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." className='small'>
              Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR.
            </label>
          </span>
        </div>
      </fieldset>

      </div>
      <div className="_form_element _x43496746 _full_width _clear" >
        <div className="_html-code">
          <p className='small'>
            <a href="https://www.iubenda.com/privacy-policy/39068350/cookie-policy" style={{color:"#111", textDecoration: "underline"}}>Leggi i termini sulla privacy</a>. Potrai cancellare i tuoi dati o chiederne una copia facendo esplicita richiesta a info@codiceplastico.com.
          </p>
        </div>
      </div>
      <div className="_button-wrapper _full_width ">
        <button id="_form_11_submit" className="_submit cp-about__button " type="submit">
          Invia
        </button>
      </div>
      <div className="_clear-element">
      </div>
    </div>
    <div className="_form-thank-you" style={{display: "none"}}>
    </div>
    
  </form>


  <script
  dangerouslySetInnerHTML={{
    __html: `window.cfields = {"1":"azienda","13":"privacy_gdpr"};
    window._show_thank_you = function(id, message, trackcmp_url, email) {
      var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
      form.querySelector('._form-content').style.display = 'none';
      thank_you.innerHTML = message;
      thank_you.style.display = 'block';
      const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
      var visitorObject = window[vgoAlias];
      if (email && typeof visitorObject !== 'undefined') {
        visitorObject('setEmail', email);
        visitorObject('update');
      } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
        // Site tracking URL to use after inline form submission.
        _load_script(trackcmp_url);
      }
      if (typeof window._form_callback !== 'undefined') window._form_callback(id);
    };
    window._show_error = function(id, message, html) {
      var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
      if (old_error) old_error.parentNode.removeChild(old_error);
      err.innerHTML = message;
      err.className = '_error-inner _form_error _no_arrow';
      var wrapper = document.createElement('div');
      wrapper.className = '_form-inner';
      wrapper.appendChild(err);
      button.parentNode.insertBefore(wrapper, button);
      document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
      if (html) {
        var div = document.createElement('div');
        div.className = '_error-html';
        div.innerHTML = html;
        err.appendChild(div);
      }
    };
    window._load_script = function(url, callback, isSubmit) {
      var head = document.querySelector('head'), script = document.createElement('script'), r = false;
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.src = url;
      if (callback) {
        script.onload = script.onreadystatechange = function() {
          if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true;
            callback();
          }
        };
      }
      script.onerror = function() {
        if (isSubmit) {
          if (script.src.length > 10000) {
            _show_error("11", "Invio non riuscito. Accorcia le risposte e riprova.");
          } else {
            _show_error("11", "Invio non riuscito. Riprova.");
          }
        }
      }
    
      head.appendChild(script);
    };
    (function() {
      if (window.location.search.search("excludeform") !== -1) return false;
      var getCookie = function(name) {
        var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
        return match ? match[2] : null;
      }
      var setCookie = function(name, value) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 1000 * 60 * 60 * 24 * 365;
        now.setTime(expireTime);
        document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';// cannot be HttpOnly
      }
          var addEvent = function(element, event, func) {
        if (element.addEventListener) {
          element.addEventListener(event, func);
        } else {
          var oldFunc = element['on' + event];
          element['on' + event] = function() {
            oldFunc.apply(this, arguments);
            func.apply(this, arguments);
          };
        }
      }
      var _removed = false;
      var form_to_submit = document.getElementById('_form_11_');
      var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;
    
      var getUrlParam = function(name) {
        var params = new URLSearchParams(window.location.search);
        return params.get(name) || false;
      };
    
      for (var i = 0; i < allInputs.length; i++) {
        var regexStr = "field\\[(\\d+)\\]";
        var results = new RegExp(regexStr).exec(allInputs[i].name);
        if (results != undefined) {
          allInputs[i].dataset.name = window.cfields[results[1]];
        } else {
          allInputs[i].dataset.name = allInputs[i].name;
        }
        var fieldVal = getUrlParam(allInputs[i].dataset.name);
    
        if (fieldVal) {
          if (allInputs[i].dataset.autofill === "false") {
            continue;
          }
          if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
            if (allInputs[i].value == fieldVal) {
              allInputs[i].checked = true;
            }
          } else {
            allInputs[i].value = fieldVal;
          }
        }
      }
    
      var remove_tooltips = function() {
        for (var i = 0; i < tooltips.length; i++) {
          tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        }
        tooltips = [];
      };
      var remove_tooltip = function(elem) {
        for (var i = 0; i < tooltips.length; i++) {
          if (tooltips[i].elem === elem) {
            tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
            tooltips.splice(i, 1);
            return;
          }
        }
      };
      var create_tooltip = function(elem, text) {
        var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
        if (elem.type != 'radio' && elem.type != 'checkbox') {
          tooltip.className = '_error';
          arrow.className = '_error-arrow';
          inner.className = '_error-inner';
          inner.innerHTML = text;
          tooltip.appendChild(arrow);
          tooltip.appendChild(inner);
          elem.parentNode.appendChild(tooltip);
        } else {
          tooltip.className = '_error-inner _no_arrow';
          tooltip.innerHTML = text;
          elem.parentNode.insertBefore(tooltip, elem);
          new_tooltip.no_arrow = true;
        }
        new_tooltip.tip = tooltip;
        new_tooltip.elem = elem;
        tooltips.push(new_tooltip);
        return new_tooltip;
      };
      var resize_tooltip = function(tooltip) {
        var rect = tooltip.elem.getBoundingClientRect();
        var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
        if (scrollPosition < 40) {
          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
        } else {
          tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
        }
      };
      var resize_tooltips = function() {
        if (_removed) return;
        for (var i = 0; i < tooltips.length; i++) {
          if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
        }
      };
      var validate_field = function(elem, remove) {
        var tooltip = null, value = elem.value, no_error = true;
        remove ? remove_tooltip(elem) : false;
        if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
        if (elem.getAttribute('required') !== null) {
          if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
            var elems = form_to_submit.elements[elem.name];
            if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
              no_error = elem.checked;
            }
            else {
              no_error = false;
              for (var i = 0; i < elems.length; i++) {
                if (elems[i].checked) no_error = true;
              }
            }
            if (!no_error) {
              tooltip = create_tooltip(elem, "Seleziona un\'opzione.");
            }
          } else if (elem.type =='checkbox') {
            var elems = form_to_submit.elements[elem.name], found = false, err = [];
            no_error = true;
            for (var i = 0; i < elems.length; i++) {
              if (elems[i].getAttribute('required') === null) continue;
              if (!found && elems[i] !== elem) return true;
              found = true;
              elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
              if (!elems[i].checked) {
                no_error = false;
                elems[i].className = elems[i].className + ' _has_error';
                err.push("È necessario verificare %s".replace("%s", elems[i].value));
              }
            }
            if (!no_error) {
              tooltip = create_tooltip(elem, err.join('<br/>'));
            }
          } else if (elem.tagName == 'SELECT') {
            var selected = true;
            if (elem.multiple) {
              selected = false;
              for (var i = 0; i < elem.options.length; i++) {
                if (elem.options[i].selected) {
                  selected = true;
                  break;
                }
              }
            } else {
              for (var i = 0; i < elem.options.length; i++) {
                if (elem.options[i].selected && (!elem.options[i].value || (elem.options[i].value.match(/\n/g)))) {
                  selected = false;
                }
              }
            }
            if (!selected) {
              elem.className = elem.className + ' _has_error';
              no_error = false;
              tooltip = create_tooltip(elem, "Seleziona un\'opzione.");
            }
          } else if (value === undefined || value === null || value === '') {
            elem.className = elem.className + ' _has_error';
            no_error = false;
            tooltip = create_tooltip(elem, "Questo campo è obbligatorio.");
          }
        }
        if (no_error && (elem.id == 'field[]' || elem.id == 'ca[11][v]')) {
          if (elem.className.includes('phone-input-error')) {
            elem.className = elem.className + ' _has_error';
            no_error = false;
          }
        }
        if (no_error && elem.name == 'email') {
          if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
            elem.className = elem.className + ' _has_error';
            no_error = false;
            tooltip = create_tooltip(elem, "Inserisci un indirizzo email valido.");
          }
        }
        if (no_error && /date_field/.test(elem.className)) {
          if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
            elem.className = elem.className + ' _has_error';
            no_error = false;
            tooltip = create_tooltip(elem, "Inserisci una data valida.");
          }
        }
        tooltip ? resize_tooltip(tooltip) : false;
        return no_error;
      };
      var needs_validate = function(el) {
            if(el.getAttribute('required') !== null){
                return true
            }
            if(el.name === 'email' && el.value !== ""){
                return true
            }
    
        if((el.id == 'field[]' || el.id == 'ca[11][v]') && el.className.includes('phone-input-error')){
                return true
            }
    
            return false
      };
      var validate_form = function(e) {
        var err = form_to_submit.querySelector('._form_error'), no_error = true;
        if (!submitted) {
          submitted = true;
          for (var i = 0, len = allInputs.length; i < len; i++) {
            var input = allInputs[i];
            if (needs_validate(input)) {
              if (input.type == 'tel') {
                addEvent(input, 'blur', function() {
                  this.value = this.value.trim();
                  validate_field(this, true);
                });
              }
              if (input.type == 'text' || input.type == 'number' || input.type == 'time') {
                addEvent(input, 'blur', function() {
                  this.value = this.value.trim();
                  validate_field(this, true);
                });
                addEvent(input, 'input', function() {
                  validate_field(this, true);
                });
              } else if (input.type == 'radio' || input.type == 'checkbox') {
                (function(el) {
                  var radios = form_to_submit.elements[el.name];
                  for (var i = 0; i < radios.length; i++) {
                    addEvent(radios[i], 'click', function() {
                      validate_field(el, true);
                    });
                  }
                })(input);
              } else if (input.tagName == 'SELECT') {
                addEvent(input, 'change', function() {
                  validate_field(this, true);
                });
              } else if (input.type == 'textarea'){
                addEvent(input, 'input', function() {
                  validate_field(this, true);
                });
              }
            }
          }
        }
        remove_tooltips();
        for (var i = 0, len = allInputs.length; i < len; i++) {
          var elem = allInputs[i];
          if (needs_validate(elem)) {
            if (elem.tagName.toLowerCase() !== "select") {
              elem.value = elem.value.trim();
            }
            validate_field(elem) ? true : no_error = false;
          }
        }
        if (!no_error && e) {
          e.preventDefault();
        }
        resize_tooltips();
        return no_error;
      };
      addEvent(window, 'resize', resize_tooltips);
      addEvent(window, 'scroll', resize_tooltips);
    
      var hidePhoneInputError = function(inputId) {
        var errorMessage =  document.getElementById("error-msg-" + inputId);
        var input = document.getElementById(inputId);
        errorMessage.classList.remove("phone-error");
        errorMessage.classList.add("phone-error-hidden");
        input.classList.remove("phone-input-error");
      };
    
      var initializePhoneInput = function(input, defaultCountry) {
        return window.intlTelInput(input, {
          utilsScript: "https://unpkg.com/intl-tel-input@17.0.18/build/js/utils.js",
          autoHideDialCode: false,
          separateDialCode: true,
          initialCountry: defaultCountry,
          preferredCountries: []
        });
      }
    
      var setPhoneInputEventListeners = function(inputId, input, iti) {
        input.addEventListener('blur', function() {
          var errorMessage = document.getElementById("error-msg-" + inputId);
          if (input.value.trim()) {
            if (iti.isValidNumber()) {
              iti.setNumber(iti.getNumber());
              if (errorMessage.classList.contains("phone-error")){
                hidePhoneInputError(inputId);
              }
            } else {
              showPhoneInputError(inputId)
            }
          } else {
            if (errorMessage.classList.contains("phone-error")){
              hidePhoneInputError(inputId);
            }
          }
        });
    
        input.addEventListener("countrychange", function() {
          iti.setNumber('');
        });
    
        input.addEventListener("keydown", function(e) {
            var charCode = (e.which) ? e.which : e.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 8) {
                   e.preventDefault();
          }
         });
      };
    
      var showPhoneInputError = function(inputId) {
        var errorMessage =  document.getElementById("error-msg-" + inputId);
        var input = document.getElementById(inputId);
        errorMessage.classList.add("phone-error");
        errorMessage.classList.remove("phone-error-hidden");
        input.classList.add("phone-input-error");
      };
    
    
        var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
      var form_submit = function(e) {
        e.preventDefault();
        if (validate_form()) {
          // use this trick to get the submit button & disable it using plain javascript
          document.querySelector('#_form_11_submit').disabled = true;
                var serialized = _form_serialize(document.getElementById('_form_11_')).replace(/%0A/g, '\\n');
          var err = form_to_submit.querySelector('._form_error');
          err ? err.parentNode.removeChild(err) : false;
          _load_script('https://codiceplastico.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
        }
        return false;
      };
      addEvent(form_to_submit, 'submit', form_submit);
    })();`
  }}></script>




            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChFinance


<style>@import url(https://fonts.bunny.net/css?family=ibm-plex-sans:400,600);</style>
<style>
 #_form_11_ { font-size:14px; line-height:1.6; font-family:arial, helvetica, sans-serif; margin:0; }
 #_form_11_ * { outline:0; }
 ._form_hide { display:none; visibility:hidden; }
 ._form_show { display:block; visibility:visible; }
 #_form_11_._form-top { top:0; }
 #_form_11_._form-bottom { bottom:0; }
 #_form_11_._form-left { left:0; }
 #_form_11_._form-right { right:0; }
 #_form_11_ input[type="text"],#_form_11_ input[type="tel"],#_form_11_ input[type="date"],#_form_11_ textarea { padding:6px; height:auto; border:#979797 1px solid; border-radius:4px; color:#000 !important; font-size:14px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; }
 #_form_11_ textarea { resize:none; }
 #_form_11_ ._submit { -webkit-appearance:none; cursor:pointer; font-family:arial, sans-serif; font-size:14px; text-align:center; background:#333 !important; border:0 !important; -moz-border-radius:4px !important; -webkit-border-radius:4px !important; border-radius:4px !important; color:#fff !important; padding:10px !important; }
 #_form_11_ ._close-icon { cursor:pointer; background-image:url('https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png'); background-repeat:no-repeat; background-size:14.2px 14.2px; position:absolute; display:block; top:11px; right:9px; overflow:hidden; width:16.2px; height:16.2px; }
 #_form_11_ ._close-icon:before { position:relative; }
 #_form_11_ ._form-body { margin-bottom:30px; }
 #_form_11_ ._form-image-left { width:150px; float:left; }
 #_form_11_ ._form-content-right { margin-left:164px; }
 #_form_11_ ._form-branding { color:#fff; font-size:10px; clear:both; text-align:left; margin-top:30px; font-weight:100; }
 #_form_11_ ._form-branding ._logo { display:block; width:130px; height:14px; margin-top:6px; background-image:url('https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png'); background-size:130px auto; background-repeat:no-repeat; }
 #_form_11_ .form-sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0, 0, 0, 0); border:0; }
 #_form_11_ ._form-label,#_form_11_ ._form_element ._form-label { font-weight:bold; margin-bottom:5px; display:block; }
 #_form_11_._dark ._form-branding { color:#333; }
 #_form_11_._dark ._form-branding ._logo { background-image:url('https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png'); }
 #_form_11_ ._form_element { position:relative; margin-bottom:10px; font-size:0; max-width:100%; }
 #_form_11_ ._form_element * { font-size:14px; }
 #_form_11_ ._form_element._clear { clear:both; width:100%; float:none; }
 #_form_11_ ._form_element._clear:after { clear:left; }
 #_form_11_ ._form_element input[type="text"],#_form_11_ ._form_element input[type="date"],#_form_11_ ._form_element select,#_form_11_ ._form_element textarea:not(.g-recaptcha-response) { display:block; width:100%; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-family:inherit; }
 #_form_11_ ._field-wrapper { position:relative; }
 #_form_11_ ._inline-style { float:left; }
 #_form_11_ ._inline-style input[type="text"] { width:150px; }
 #_form_11_ ._inline-style:not(._clear) + ._inline-style:not(._clear) { margin-left:20px; }
 #_form_11_ ._form_element img._form-image { max-width:100%; }
 #_form_11_ ._form_element ._form-fieldset { border:0; padding:0.01em 0 0 0; margin:0; min-width:0; }
 #_form_11_ ._clear-element { clear:left; }
 #_form_11_ ._full_width { width:100%; }
 #_form_11_ ._form_full_field { display:block; width:100%; margin-bottom:10px; }
 #_form_11_ input[type="text"]._has_error,#_form_11_ textarea._has_error { border:#f37c7b 1px solid; }
 #_form_11_ input[type="checkbox"]._has_error { outline:#f37c7b 1px solid; }
 #_form_11_ ._error { display:block; position:absolute; font-size:14px; z-index:10000001; }
 #_form_11_ ._error._above { padding-bottom:4px; bottom:39px; right:0; }
 #_form_11_ ._error._below { padding-top:8px; top:100%; right:0; }
 #_form_11_ ._error._above ._error-arrow { bottom:-4px; right:15px; border-left:8px solid transparent; border-right:8px solid transparent; border-top:8px solid #fdd; }
 #_form_11_ ._error._below ._error-arrow { top:0; right:15px; border-left:8px solid transparent; border-right:8px solid transparent; border-bottom:8px solid #fdd; }
 #_form_11_ ._error-inner { padding:12px 12px 12px 36px; background-color:#fdd; background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:12px center; font-size:14px; font-family:arial, sans-serif; font-weight:600; line-height:16px; color:#000; text-align:center; text-decoration:none; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; box-shadow:0px 1px 4px rgba(31, 33, 41, 0.298295); }
 #_form_11_ ._error-inner._form_error { margin-bottom:5px; text-align:left; }
 #_form_11_ ._button-wrapper ._error-inner._form_error { position:static; }
 #_form_11_ ._error-inner._no_arrow { margin-bottom:10px; }
 #_form_11_ ._error-arrow { position:absolute; width:0; height:0; }
 #_form_11_ ._error-html { margin-bottom:10px; }
 .pika-single { z-index:10000001 !important; }
 #_form_11_ input[type="text"].datetime_date { width:69%; display:inline; }
 #_form_11_ select.datetime_time { width:29%; display:inline; height:32px; }
 #_form_11_ input[type="date"].datetime_date { width:69%; display:inline-flex; }
 #_form_11_ input[type="time"].datetime_time { width:29%; display:inline-flex; }
 @media all and (min-width:320px) and (max-width:667px) { ::-webkit-scrollbar { display:none; }
 #_form_11_ { margin:0; width:100%; min-width:100%; max-width:100%; box-sizing:border-box; }
 #_form_11_ * { -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; font-size:1em; }
 #_form_11_ ._form-content { margin:0; width:100%; }
 #_form_11_ ._form-inner { display:block; min-width:100%; }
 #_form_11_ ._form-title,#_form_11_ ._inline-style { margin-top:0; margin-right:0; margin-left:0; }
 #_form_11_ ._form-title { font-size:1.2em; }
 #_form_11_ ._form_element { margin:0 0 20px; padding:0; width:100%; }
 #_form_11_ ._form-element,#_form_11_ ._inline-style,#_form_11_ input[type="text"],#_form_11_ label,#_form_11_ p,#_form_11_ textarea:not(.g-recaptcha-response) { float:none; display:block; width:100%; }
 #_form_11_ ._row._checkbox-radio label { display:inline; }
 #_form_11_ ._row,#_form_11_ p,#_form_11_ label { margin-bottom:0.7em; width:100%; }
 #_form_11_ ._row input[type="checkbox"],#_form_11_ ._row input[type="radio"] { margin:0 !important; vertical-align:middle !important; }
 #_form_11_ ._row input[type="checkbox"] + span label { display:inline; }
 #_form_11_ ._row span label { margin:0 !important; width:initial !important; vertical-align:middle !important; }
 #_form_11_ ._form-image { max-width:100%; height:auto !important; }
 #_form_11_ input[type="text"] { padding-left:10px; padding-right:10px; font-size:16px; line-height:1.3em; -webkit-appearance:none; }
 #_form_11_ input[type="radio"],#_form_11_ input[type="checkbox"] { display:inline-block; width:1.3em; height:1.3em; font-size:1em; margin:0 0.3em 0 0; vertical-align:baseline; }
 #_form_11_ button[type="submit"] { padding:20px; font-size:1.5em; }
 #_form_11_ ._inline-style { margin:20px 0 0 !important; }
 }
 #_form_11_ { position:relative; text-align:left; margin:25px auto 0; padding:20px; -webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box; *zoom:1; background:#fff !important; border:0px solid #b0b0b0 !important; max-width:500px; -moz-border-radius:0px !important; -webkit-border-radius:0px !important; border-radius:0px !important; color:#000 !important; }
 #_form_11_._inline-form,#_form_11_._inline-form ._form-content,#_form_11_._inline-form input,#_form_11_._inline-form ._submit { font-family:"IBM Plex Sans", Helvetica, sans-serif; }
 #_form_11_ ._form-title { font-size:22px; line-height:22px; font-weight:600; margin-bottom:0; }
 #_form_11_:before,#_form_11_:after { content:" "; display:table; }
 #_form_11_:after { clear:both; }
 #_form_11_._inline-style { width:auto; display:inline-block; }
 #_form_11_._inline-style input[type="text"],#_form_11_._inline-style input[type="date"] { padding:10px 12px; }
 #_form_11_._inline-style button._inline-style { position:relative; top:27px; }
 #_form_11_._inline-style p { margin:0; }
 #_form_11_._inline-style ._button-wrapper { position:relative; margin:27px 12.5px 0 20px; }
 #_form_11_ ._form-thank-you { position:relative; left:0; right:0; text-align:center; font-size:18px; }
 @media all and (min-width:320px) and (max-width:667px) { #_form_11_._inline-form._inline-style ._inline-style._button-wrapper { margin-top:20px !important; margin-left:0 !important; }
 }
 #_form_11_ .iti.iti--allow-dropdown.iti--separate-dial-code { width:100%; }
 #_form_11_ .iti input { width:100%; height:32px; border:#979797 1px solid; border-radius:4px; }
 #_form_11_ .iti--separate-dial-code .iti__selected-flag { background-color:#fff; border-radius:4px; }
 #_form_11_ .iti--separate-dial-code .iti__selected-flag:hover { background-color:rgba(0, 0, 0, 0.05); }
 #_form_11_ .iti__country-list { border-radius:4px; margin-top:4px; min-width:460px; }
 #_form_11_ .iti__country-list--dropup { margin-bottom:4px; }
 #_form_11_ .phone-error-hidden { display:none; }
 #_form_11_ .phone-error { color:#e40e49; }
 #_form_11_ .phone-input-error { border:1px solid #e40e49 !important; }
</style>
<form method="POST" action="https://codiceplastico.activehosted.com/proc.php" id="_form_11_" class="_form _form_11 _inline-form  _dark" novalidate>
  <input type="hidden" name="u" value="11" />
  <input type="hidden" name="f" value="11" />
  <input type="hidden" name="s" />
  <input type="hidden" name="c" value="0" />
  <input type="hidden" name="m" value="0" />
  <input type="hidden" name="act" value="sub" />
  <input type="hidden" name="v" value="2" />
  <input type="hidden" name="or" value="da01937922984e8a3c5456533dfb396a" />
  <div class="_form-content">
    <div class="_form_element _x37848981 _full_width " >
      <label for="firstname" class="_form-label">
        Nome*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="firstname" name="firstname" placeholder="Digita il nome" required/>
      </div>
    </div>
    <div class="_form_element _x86613550 _full_width " >
      <label for="lastname" class="_form-label">
        Cognome*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="lastname" name="lastname" placeholder="Digita il cognome" required/>
      </div>
    </div>
    <div class="_form_element _field1 _full_width " >
      <label for="field[1]" class="_form-label">
        Azienda
      </label>
      <div class="_field-wrapper">
        <input type="text" id="field[1]" name="field[1]" value="" placeholder="" />
      </div>
    </div>
    <div class="_form_element _x46141269 _full_width " >
      <label for="phone" class="_form-label">
        Telefono
      </label>
      <div class="_field-wrapper">
        <input type="text" id="phone" name="phone" placeholder="Digita il numero di telefono" />
      </div>
    </div>
    <div class="_form_element _x55460749 _full_width " >
      <label for="email" class="_form-label">
        Email*
      </label>
      <div class="_field-wrapper">
        <input type="text" id="email" name="email" placeholder="Digita l&#039;email" required/>
      </div>
    </div>
    <div class="_form_element _x73759755 _full_width " >
      <fieldset class="_form-fieldset">
        <div class="_row">
          <legend for="field[13][]" class="_form-label">
            Privacy *
          </legend>
        </div>
        <input data-autofill="false" type="hidden" id="field[13][]" name="field[13][]" value="~|">
        <div class="_row _checkbox-radio">
          <input id="field_13Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." type="checkbox" name="field[13][]" value="Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." class="any"  required>
          <span>
            <label for="field_13Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR.">
              Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR.
            </label>
          </span>
        </div>
      </fieldset>
    </div>
    <div class="_form_element _x43496746 _full_width _clear" >
      <div class="_html-code">
        <p style="font-size:11px;">
          <a href="https://www.iubenda.com/privacy-policy/39068350/cookie-policy" style="font-size:11px; color:#111; text-decoration:underline;">Leggi i termini sulla privacy</a>. Potrai cancellare i tuoi dati o chiederne una copia facendo esplicita richiesta a info@codiceplastico.com.
        </p>
      </div>
    </div>
    <div class="_button-wrapper _full_width">
      <button id="_form_11_submit" class="_submit" type="submit">
        Invia
      </button>
    </div>
    <div class="_clear-element">
    </div>
  </div>
  <div class="_form-thank-you" style="display:none;">
  </div>
  <div class="_form-branding">
    <div class="_marketing-by">
      Marketing a cura di
    </div>
    <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" class="_logo">
      <span class="form-sr-only">
        ActiveCampaign
      </span>
    </a>
  </div>
</form><script type="text/javascript">
window.cfields = {"1":"azienda","13":"privacy_gdpr"};
window._show_thank_you = function(id, message, trackcmp_url, email) {
  var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
  form.querySelector('._form-content').style.display = 'none';
  thank_you.innerHTML = message;
  thank_you.style.display = 'block';
  const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
  var visitorObject = window[vgoAlias];
  if (email && typeof visitorObject !== 'undefined') {
    visitorObject('setEmail', email);
    visitorObject('update');
  } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
    // Site tracking URL to use after inline form submission.
    _load_script(trackcmp_url);
  }
  if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
  var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
  if (old_error) old_error.parentNode.removeChild(old_error);
  err.innerHTML = message;
  err.className = '_error-inner _form_error _no_arrow';
  var wrapper = document.createElement('div');
  wrapper.className = '_form-inner';
  wrapper.appendChild(err);
  button.parentNode.insertBefore(wrapper, button);
  document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
  if (html) {
    var div = document.createElement('div');
    div.className = '_error-html';
    div.innerHTML = html;
    err.appendChild(div);
  }
};
window._load_script = function(url, callback, isSubmit) {
  var head = document.querySelector('head'), script = document.createElement('script'), r = false;
  script.type = 'text/javascript';
  script.charset = 'utf-8';
  script.src = url;
  if (callback) {
    script.onload = script.onreadystatechange = function() {
      if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        callback();
      }
    };
  }
  script.onerror = function() {
    if (isSubmit) {
      if (script.src.length > 10000) {
        _show_error("11", "Invio non riuscito. Accorcia le risposte e riprova.");
      } else {
        _show_error("11", "Invio non riuscito. Riprova.");
      }
    }
  }

  head.appendChild(script);
};
(function() {
  if (window.location.search.search("excludeform") !== -1) return false;
  var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  var setCookie = function(name, value) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60 * 24 * 365;
    now.setTime(expireTime);
    document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';// cannot be HttpOnly
  }
      var addEvent = function(element, event, func) {
    if (element.addEventListener) {
      element.addEventListener(event, func);
    } else {
      var oldFunc = element['on' + event];
      element['on' + event] = function() {
        oldFunc.apply(this, arguments);
        func.apply(this, arguments);
      };
    }
  }
  var _removed = false;
  var form_to_submit = document.getElementById('_form_11_');
  var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

  var getUrlParam = function(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name) || false;
  };

  for (var i = 0; i < allInputs.length; i++) {
    var regexStr = "field\\[(\\d+)\\]";
    var results = new RegExp(regexStr).exec(allInputs[i].name);
    if (results != undefined) {
      allInputs[i].dataset.name = window.cfields[results[1]];
    } else {
      allInputs[i].dataset.name = allInputs[i].name;
    }
    var fieldVal = getUrlParam(allInputs[i].dataset.name);

    if (fieldVal) {
      if (allInputs[i].dataset.autofill === "false") {
        continue;
      }
      if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
        if (allInputs[i].value == fieldVal) {
          allInputs[i].checked = true;
        }
      } else {
        allInputs[i].value = fieldVal;
      }
    }
  }

  var remove_tooltips = function() {
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
    }
    tooltips = [];
  };
  var remove_tooltip = function(elem) {
    for (var i = 0; i < tooltips.length; i++) {
      if (tooltips[i].elem === elem) {
        tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        tooltips.splice(i, 1);
        return;
      }
    }
  };
  var create_tooltip = function(elem, text) {
    var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
    if (elem.type != 'radio' && elem.type != 'checkbox') {
      tooltip.className = '_error';
      arrow.className = '_error-arrow';
      inner.className = '_error-inner';
      inner.innerHTML = text;
      tooltip.appendChild(arrow);
      tooltip.appendChild(inner);
      elem.parentNode.appendChild(tooltip);
    } else {
      tooltip.className = '_error-inner _no_arrow';
      tooltip.innerHTML = text;
      elem.parentNode.insertBefore(tooltip, elem);
      new_tooltip.no_arrow = true;
    }
    new_tooltip.tip = tooltip;
    new_tooltip.elem = elem;
    tooltips.push(new_tooltip);
    return new_tooltip;
  };
  var resize_tooltip = function(tooltip) {
    var rect = tooltip.elem.getBoundingClientRect();
    var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
    if (scrollPosition < 40) {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
    } else {
      tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
    }
  };
  var resize_tooltips = function() {
    if (_removed) return;
    for (var i = 0; i < tooltips.length; i++) {
      if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
    }
  };
  var validate_field = function(elem, remove) {
    var tooltip = null, value = elem.value, no_error = true;
    remove ? remove_tooltip(elem) : false;
    if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
    if (elem.getAttribute('required') !== null) {
      if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
        var elems = form_to_submit.elements[elem.name];
        if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
          no_error = elem.checked;
        }
        else {
          no_error = false;
          for (var i = 0; i < elems.length; i++) {
            if (elems[i].checked) no_error = true;
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, "Seleziona un\'opzione.");
        }
      } else if (elem.type =='checkbox') {
        var elems = form_to_submit.elements[elem.name], found = false, err = [];
        no_error = true;
        for (var i = 0; i < elems.length; i++) {
          if (elems[i].getAttribute('required') === null) continue;
          if (!found && elems[i] !== elem) return true;
          found = true;
          elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
          if (!elems[i].checked) {
            no_error = false;
            elems[i].className = elems[i].className + ' _has_error';
            err.push("È necessario verificare %s".replace("%s", elems[i].value));
          }
        }
        if (!no_error) {
          tooltip = create_tooltip(elem, err.join('<br/>'));
        }
      } else if (elem.tagName == 'SELECT') {
        var selected = true;
        if (elem.multiple) {
          selected = false;
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected) {
              selected = true;
              break;
            }
          }
        } else {
          for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected && (!elem.options[i].value || (elem.options[i].value.match(/\n/g)))) {
              selected = false;
            }
          }
        }
        if (!selected) {
          elem.className = elem.className + ' _has_error';
          no_error = false;
          tooltip = create_tooltip(elem, "Seleziona un\'opzione.");
        }
      } else if (value === undefined || value === null || value === '') {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Questo campo è obbligatorio.");
      }
    }
    if (no_error && (elem.id == 'field[]' || elem.id == 'ca[11][v]')) {
      if (elem.className.includes('phone-input-error')) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
      }
    }
    if (no_error && elem.name == 'email') {
      if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Inserisci un indirizzo email valido.");
      }
    }
    if (no_error && /date_field/.test(elem.className)) {
      if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Inserisci una data valida.");
      }
    }
    tooltip ? resize_tooltip(tooltip) : false;
    return no_error;
  };
  var needs_validate = function(el) {
        if(el.getAttribute('required') !== null){
            return true
        }
        if(el.name === 'email' && el.value !== ""){
            return true
        }

    if((el.id == 'field[]' || el.id == 'ca[11][v]') && el.className.includes('phone-input-error')){
            return true
        }

        return false
  };
  var validate_form = function(e) {
    var err = form_to_submit.querySelector('._form_error'), no_error = true;
    if (!submitted) {
      submitted = true;
      for (var i = 0, len = allInputs.length; i < len; i++) {
        var input = allInputs[i];
        if (needs_validate(input)) {
          if (input.type == 'tel') {
            addEvent(input, 'blur', function() {
              this.value = this.value.trim();
              validate_field(this, true);
            });
          }
          if (input.type == 'text' || input.type == 'number' || input.type == 'time') {
            addEvent(input, 'blur', function() {
              this.value = this.value.trim();
              validate_field(this, true);
            });
            addEvent(input, 'input', function() {
              validate_field(this, true);
            });
          } else if (input.type == 'radio' || input.type == 'checkbox') {
            (function(el) {
              var radios = form_to_submit.elements[el.name];
              for (var i = 0; i < radios.length; i++) {
                addEvent(radios[i], 'click', function() {
                  validate_field(el, true);
                });
              }
            })(input);
          } else if (input.tagName == 'SELECT') {
            addEvent(input, 'change', function() {
              validate_field(this, true);
            });
          } else if (input.type == 'textarea'){
            addEvent(input, 'input', function() {
              validate_field(this, true);
            });
          }
        }
      }
    }
    remove_tooltips();
    for (var i = 0, len = allInputs.length; i < len; i++) {
      var elem = allInputs[i];
      if (needs_validate(elem)) {
        if (elem.tagName.toLowerCase() !== "select") {
          elem.value = elem.value.trim();
        }
        validate_field(elem) ? true : no_error = false;
      }
    }
    if (!no_error && e) {
      e.preventDefault();
    }
    resize_tooltips();
    return no_error;
  };
  addEvent(window, 'resize', resize_tooltips);
  addEvent(window, 'scroll', resize_tooltips);

  var hidePhoneInputError = function(inputId) {
    var errorMessage =  document.getElementById("error-msg-" + inputId);
    var input = document.getElementById(inputId);
    errorMessage.classList.remove("phone-error");
    errorMessage.classList.add("phone-error-hidden");
    input.classList.remove("phone-input-error");
  };

  var initializePhoneInput = function(input, defaultCountry) {
    return window.intlTelInput(input, {
      utilsScript: "https://unpkg.com/intl-tel-input@17.0.18/build/js/utils.js",
      autoHideDialCode: false,
      separateDialCode: true,
      initialCountry: defaultCountry,
      preferredCountries: []
    });
  }

  var setPhoneInputEventListeners = function(inputId, input, iti) {
    input.addEventListener('blur', function() {
      var errorMessage = document.getElementById("error-msg-" + inputId);
      if (input.value.trim()) {
        if (iti.isValidNumber()) {
          iti.setNumber(iti.getNumber());
          if (errorMessage.classList.contains("phone-error")){
            hidePhoneInputError(inputId);
          }
        } else {
          showPhoneInputError(inputId)
        }
      } else {
        if (errorMessage.classList.contains("phone-error")){
          hidePhoneInputError(inputId);
        }
      }
    });

    input.addEventListener("countrychange", function() {
      iti.setNumber('');
    });

    input.addEventListener("keydown", function(e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 8) {
               e.preventDefault();
      }
     });
  };

  var showPhoneInputError = function(inputId) {
    var errorMessage =  document.getElementById("error-msg-" + inputId);
    var input = document.getElementById(inputId);
    errorMessage.classList.add("phone-error");
    errorMessage.classList.remove("phone-error-hidden");
    input.classList.add("phone-input-error");
  };


    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
  var form_submit = function(e) {
    e.preventDefault();
    if (validate_form()) {
      // use this trick to get the submit button & disable it using plain javascript
      document.querySelector('#_form_11_submit').disabled = true;
            var serialized = _form_serialize(document.getElementById('_form_11_')).replace(/%0A/g, '\\n');
      var err = form_to_submit.querySelector('._form_error');
      err ? err.parentNode.removeChild(err) : false;
      _load_script('https://codiceplastico.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
    }
    return false;
  };
  addEvent(form_to_submit, 'submit', form_submit);
})();

</script>