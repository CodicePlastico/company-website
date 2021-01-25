/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import CookieConsent from 'react-cookie-consent';

import Header from './header'
import Footer from './footer'
import '../scss/style.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accetto"
        cookieName="gatsby-gdpr-google-tagmanager"
        style={{ background: "#D93232" }}
        buttonStyle={{ background: "#111D24", color: "#fff", fontSize: "13px" }}>
        Questo sito usa i cookie, i biscotti sono buoni ma è sempre meglio conoscere cosa c'è dentro per non incappare in strane sorprese. Se vuoi sapere quali sono i nostri ingredienti, <a style={{ color: "#111D24"}} href="www.google.com" target="_blank">clicca qui</a>.
      </CookieConsent>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
