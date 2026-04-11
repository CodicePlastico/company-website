import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PlasticBlog = () => (
  <Layout>
    <h1>Plastic Blog</h1>
    <Link to="/">Go to home</Link> <br />
  </Layout>
)

export default PlasticBlog
export const Head = () => <SEO title="Plastic Blog" />
