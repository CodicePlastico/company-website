import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const AboutUs = () => (
  <Layout>
    <SEO title="Chi siamo" />
    <div className="cp-about">
      <div className="cp-internal-page__content cp-grid">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
            <h1><span>Chi</span> siamo</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutUs
