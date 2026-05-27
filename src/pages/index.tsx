import React, { useState } from 'react'
import { isBrowser, isMobile, isTablet } from 'react-device-detect';

import Layout from '../components/layout'
import SEO from '../components/seo'

import Home from '../components/home/home'

const IndexPage = () => {

  return (
    <Layout>
        <Home/>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <SEO title="Home" />
