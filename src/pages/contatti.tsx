import React, { lazy, Suspense } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Venues = lazy(() => import('../components/venues/venues'))

const Contatti = ({data}) => {
  const files = useStaticQuery(graphql`
    query VenueImagesQuery {
      headquarter: file(relativePath: { eq: "venues/cpship.png" }) {
        publicURL
      }
      planet1: file(relativePath: { eq: "venues/planet1.png" }) {
        publicURL
      }
      planet2: file(relativePath: { eq: "venues/planet2.png" }) {
        publicURL
      }
    }`
  )

  return (
  <Layout>
    <div className="cp-internal-page cp-contatti">
      <div className="cp-internal-page__bg"></div>
      <div className="cp-internal-page__content cp-internal-page__content--bg cp-grid">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <h1><span>Contatti</span></h1>
            <div className="cp-contatti__company cp-typography__main-text">
              <div className="cp-contatti__company-name">CodicePlastico S.r.l.</div>
              <div className="cp-contatti__company-data">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cp-contatti__venues">
        <Suspense fallback={null}>
          <Venues files={files} />
        </Suspense>
      </div>
      <div className="cp-grid">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <h2><span>Cultura remote</span></h2>
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
}

export default Contatti
export const Head = () => <SEO title="Contatti" />
