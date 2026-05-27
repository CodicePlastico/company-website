import React from 'react'
import PropTypes from 'prop-types'

const siteMetadata = {
  title: `CodicePlastico - Software House`,
  description: `CodicePlastico - Software House. Creiamo sinergie tra Aziende e Tecnologia.`,
  author: `CodicePlastico`,
}

function SEO({ description, lang, title, cover = `https://codiceplastico.com/share.jpg` }) {
  const metaDescription = description || siteMetadata.description
  const pageTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={cover} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={cover} />
    </>
  )
}

SEO.defaultProps = {
  lang: `it`,
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
