import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import loadable from '@loadable/component'

const Venues = loadable(() => import('../components/venues/venues'))

const Contatti = ({data}) => (
  <Layout>
    <SEO title="Contatti" />
    <div className="cp-internal-page cp-contatti">
      <div className="cp-internal-page__bg"></div>
      <div className="cp-internal-page__content cp-internal-page__content--bg cp-grid">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <h1><span>Contatti</span></h1>
            <div className="cp-contatti__company cp-typography__main-text">
              <div className="cp-contatti__company-name">CodicePlastico S.r.l.</div>
              <div className="cp-contatti__company-data">
                <div className="cp-contatti__company-piva"><strong>P.IVA</strong> 03079830984</div>
                <span className="cp-desktop__visible cp-contatti__company-separator">-</span>
                <a
                  className="cp-contatti__company-address"
                  href="https://goo.gl/maps/sBtSsQvxgAyLrtgYA"
                  target="_blank"
                >
                  Via Branze 45, 25123 Brescia
                </a>
              </div>
              <div className="cp-contatti__company-contacts">
                <div className="cp-contatti__company-email">
                  <strong>Email</strong>&nbsp;
                  <a
                    href="mailto:&#105;&#110;&#102;&#111;&#64;&#99;&#111;&#100;&#105;&#99;&#101;&#112;&#108;&#97;&#115;&#116;&#105;&#99;&#111;&#46;&#99;&#111;&#109;"
                  >info@codiceplastico.com</a>
                </div>
                <div  className="cp-contatti__company-phone">
                  <strong>Tel </strong>&nbsp;
                  <a href="tel:+390306595241">
                    +39 030 6595241
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-contatti__venues">
        <Venues />
      </div>
      <div className="cp-grid">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <h4><span>Cultura remote</span></h4>
            <p>
              Siamo un’azienda remote-oriented: alla grande sede aziendale abbiamo preferito un <strong>piccolo quartier generale</strong> all'interno del polo tecnologico CSMT di Brescia. 
              Questo ci permette di essere più <strong>flessibili</strong> e di potere espandere il nostri team, <strong>senza vincoli geografici</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contatti
