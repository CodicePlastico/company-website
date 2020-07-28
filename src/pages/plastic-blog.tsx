import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlasticBlog = () => (
  <Layout>
    <SEO title="Plastic Blog" />
    <h1>Plastic Blog</h1>
    <Link to="/">Go to home</Link> <br />
  </Layout>
)

export default PlasticBlog
