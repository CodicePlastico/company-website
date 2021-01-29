import React, { useState } from 'react'
import { isBrowser, isMobile, isTablet } from 'react-device-detect';
import loadable from '@loadable/component'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Home from '../components/home/home'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
        <Home/>
    </Layout>
  )
}

export default IndexPage
