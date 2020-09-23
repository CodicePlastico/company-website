import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Slide1 from '../components/homeSlides/slide1/slide1'
import Slide2 from '../components/homeSlides/slide2/slide2'
import Slide3 from '../components/homeSlides/slide3/slide3'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </div>
  </Layout>
)

export default IndexPage
