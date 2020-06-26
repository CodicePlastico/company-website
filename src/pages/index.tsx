import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h2>This is a subtitle</h2>
    <h3>And this?</h3>
    <h4>I don't know</h4>
    <h5>but I'm not so sure</h5>
    <p>Welcome to CodicePlastico.</p>
    <p>Let's begin.</p>
    <Link to="/team/">Go to team</Link> <br />
    <small>This is a small text, bro</small>
  </Layout>
)

export default IndexPage
