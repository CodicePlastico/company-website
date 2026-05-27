import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Home from '../components/home/home'

const En = () => {

  return (
    <Layout>
        <Home/>
    </Layout>
  )
}

export default En
export const Head = () => <SEO title="Home" />