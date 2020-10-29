import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Slide1 from '../components/homeSlides/slide1/slide1'
import Slide2 from '../components/homeSlides/slide2/slide2'
import Slide3 from '../components/homeSlides/slide3/slide3'
import Slide4 from '../components/homeSlides/slide4/slide4'
import Slide7 from '../components/homeSlides/slide7/slide7'
import Slide8 from '../components/homeSlides/slide8/slide8'
import Slide9 from '../components/homeSlides/slide9/slide9'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
    </div>
  </Layout>
)

export default IndexPage
