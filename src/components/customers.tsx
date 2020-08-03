import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Customers = () => {
  const files = useStaticQuery(graphql`
    query CustomersQuery {
      allFile(filter: {name: {regex: "/logo-*/"}, relativeDirectory: {eq: "about"}}) {
        nodes {
          id,
          name,
          publicURL
        }
      }
    }`
  )

  return(
    <div className="cp-grid cp-about__customers">
      <div className="cp-grid__container">
        <div className="cp-grid__content">
          <h4 className="cp-about__customers-title"><span>Abbiamo creato sinergie con</span></h4>
          <div className="cp-about__customers-logos">
          {files.allFile.nodes.map(f => (
              <div className="cp-about__customers-logo" key={f.id}>
                <img className="cp-about__customers-logo-img" src={f.publicURL} alt={f.name} /></div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers