import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About us</h1>
    <Link to="/">Go to home</Link> <br />
  </Layout>
)

export default AboutUs
