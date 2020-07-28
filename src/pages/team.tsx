import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Team = () => (
  <Layout>
    <SEO title="Team" />
    <h1>Team</h1>
    <p>Welcome to your new Gatsby Team.</p>
    <p>Now go build something Team. XD</p>
    <Link to="/">Go to home</Link> <br />
  </Layout>
)

export default Team
