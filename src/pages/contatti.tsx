import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Venues from '../components/venues/venues'

const Contatti = ({data}) => (
  <Layout>
    <SEO title="Contatti" />
    <div className="cp-contatti">
      <h1 className="cp-contatti__title">Contatti</h1>
      <p className="cp-contatti__content">
        CodicePlastico S.r.l.
        <br />
        <strong>P.IVA</strong> 03079830984 - via Branze 45, 25123 Brescia
        <br />
        <strong>Email</strong>{' '}
        <a href="mailto:&#105;&#110;&#102;&#111;&#64;&#99;&#111;&#100;&#105;&#99;&#101;&#112;&#108;&#97;&#115;&#116;&#105;&#99;&#111;&#46;&#99;&#111;&#109;">
          info@codiceplastico.com
        </a>
        &nbsp;<strong>Tel</strong>{' '}
        <a href="tel:+390306595241">Tel +39 030 6595241</a>
      </p>
      <div className="cp-contatti__venues">
        <Venues />
      </div>
    </div>
  </Layout>
)

export default Contatti
