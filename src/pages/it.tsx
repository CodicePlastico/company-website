import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Home from '../components/home/home'

const It = () => {

  return (
    <Layout>
        <Home/>
    </Layout>
  )
}

export default It
export const Head = () => <SEO title="Home" />