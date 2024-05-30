import React, { useState } from 'react'
import Slider from "react-slick"
import Layout from '../components/layout'
import SEO from '../components/seo'

const ChFinance = () => {

  const [checked, setChecked] = useState({})
  const handleChange = e => {
    checked[e.target.value] = !checked[e.target.value]
    setChecked(checked)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
          slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
                <span>A2A Smart City</span>, progetto City Eye
              </h2>
             <p>La metafora che da sempre ci accompagna in CodicePlastico è quella dei <strong>supereroi</strong>: l’idea è che la tecnologia sia un vero e proprio potere per le aziende, 
             in grado di <strong>migliorare performance e fatturato</strong>. Il Team di CodicePlastico è composto da figure esperte, spesso in prima linea nella divulgazione dei contenuti nelle principali community IT italiane, che amano avere “le mani in pasta” in tutto quello che riguarda codice, sistemi e design. Lavorando solo su progetti custom, le nostre modalità di intervento sono essenzialmente di due tipi:</p>
             <div className='cp-ch__row r1'>

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/a2a/protection.svg' alt="icon" />
                  </div>
                  <p><strong>Progetti “chiavi in mano”</strong>, in cui i clienti arrivano con un’idea e CodicePlastico ne <strong>cura la realizzazione in tutte le fasi</strong>: analisi, design dell’interfaccia, implementazione della soluzione e di sistemi e ambienti necessari per farla funzionare.</p>
                </div>
                {/* fine block */}

                {/* inizio block */}
                <div className='cp-ch__block'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/a2a/affiancamento.svg' alt="icon" />
                  </div>
                  <p><strong>Progetti in affiancamento</strong>, in cui CodicePlastico <strong>collabora attivamente con i reparti IT interni alle aziende</strong> clienti, completando le competenze con Team dedicati, fortemente verticali. </p>
                </div>
                {/* fine block */}

              </div>
              

            </div>
          </div>

        </div>

        <div className='cp-internal-page__content cp-grid cp-bg-inverted__maincolor'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>
              <h2>Che cos'è CityEye</h2>

              <p className='emph'>CityEye è un portale disponibile su <a href="http://www.cityeye.it" className='inverted' target='_blank'>www.cityeye.it</a>, attraverso il quale gli utenti possono cercare su una mappa i sensori IOT presenti sul territorio, aggiungere sensori propri, configurarli e, se il tipo di sensore lo supporta, controllarli attraverso il portale.</p>
    
           
                {/* inizio block */}
                <div className='cp-ch__block horizontal c2'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/a2a/smart.svg' alt="icon" />
                  </div>
                  <p>Attraverso la parte <strong className='inverted'>pubblica</strong> del sito <strong>chiunque può visualizzare i dati pubblici</strong> rilevati dai sensori: dai misuratori della qualità dell’aria, ai lampioni intelligenti, ai sensori di riempimento dei cassonetti.</p>
  
                  
                </div>
                {/* fine block */}
      
             
                {/* inizio block */}
                <div className='cp-ch__block horizontal c2'>
                  <div className='cp-ch__icon'>
                    <img src='/ch/a2a/iot.svg' alt="icon" />
                  </div>
                  <p>La parte <strong className='inverted'>privata</strong> del sito permette di <strong>aggiungere e configurare apparecchi i cui dati rimangono privati</strong> o visibili solo a quelle che chiamiamo “organization”; supponiamo che un’azienda disponga di sensori di parcheggio che indicano quando un parcheggio è libero o occupato: tramite il portale potrà rendere disponibile l’informazione solo agli utenti che desidera.</p>
    
  
                  
                </div>
                {/* fine block */}
      

            </div>{/* fine content*/}
          </div>{/* fine container*/}
        </div>

        <div className='cp-grid cp-section  '>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>
              <h3><span>Quale è stato il nostro ruolo</span></h3>
              <p>Abbiamo affiancato il team di A2A Smartcity sia dal punto della <strong>consulenza tecnica strategica</strong> (quali tecnologie utilizzare, come allestire il sistema, test di carico, sicurezza, etc…) sia <strong>operativamente</strong>.</p>
    
    <p>All’arrivo di una nuova richiesta di funzionalità, la analizziamo insieme al team interno in modo da poter fornire informazioni utili al team esterno di Design. Quando i prototipi sono validati, si procede poi con la parte tecnica, sia a livello di codice che di infrastruttura: il prototipo diventa realtà, in un <strong>ciclo di miglioramento continuo</strong> design-rilascio-test-feedback.</p>
    
    <p className='emph'>Crediamo che l’adozione di <strong>metodologie agili</strong> sia la condizione necessaria per costruire software di qualità</p><p>Durante la fase di analisi, il team si impegna a suddividere i problemi in iterazioni. In questo modo <strong>il portale è cresciuto in maniera iterativa</strong>: affrontando progetti piccoli, consegnabili e testabili in maniera più rapida, anziché portare avanti lo sviluppo di un unico grande progetto.</p>
  


            </div>{/* fine content*/}
          </div>{/* fine container*/}
        </div>



        <div className='cp-grid cp-section cp-bg__n10'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>
            <Slider {...settings}>
              <div>
                <img src='/ch/a2a/a2a-smarticty-1.jpg' alt="demo" />
              </div>
              <div>
              <img src='/ch/a2a/a2a-smarticty-2.jpg' alt="demo" />
              </div>
              <div>
              <img src='/ch/a2a/a2a-smarticty-3.jpg' alt="demo" />
              </div>

              
             
            </Slider>
            </div>{/* Fine content*/}
          </div>{/* Fine container*/}
        </div> {/* Fine grid*/}
        
        <div className='cp-grid cp-section'>
          <div className="cp-grid__container">
            <div className='cp-grid__content'>
              <h2>Perchè funziona</h2>
              <p className='emph'>Come per tutti i progetti in affiancamento, la chiave del successo è la <strong>sinergia</strong>: il cliente stabilisce la road map del progetto a lungo termine, ma si progettano insieme le soluzioni le strategie con cui raggiungere gli obiettivi. Il continuo scambio di competenze tra i team e la <strong>contaminazione delle idee</strong> consentono di arricchire il progetto, apportando innovazione e garantendo una crescita professionale reciproca.</p>
    



            </div>{/* Fine content*/}
          </div>{/* Fine container*/}
        </div> {/* Fine grid*/}

        <div className='cp-grid cp-section cp-bg__n10'>
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
          <input id="field_13Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." type="checkbox" name="field[13][]" value="Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." className="any"  required />
          <span>
            <label htmlFor="field_13Ho letto l&#039;informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali, GDPR." className='small'>
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


