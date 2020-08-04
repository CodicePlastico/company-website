import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Spaceman from '../assets/team/spaceman.svg'
import TeamGrid from '../components/team/teamGrid'
import { useStaticQuery, graphql } from 'gatsby'

import data from '../assets/team/team.yaml'

const Team = () => {

  const files = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: {relativeDirectory: {eq: "team"}, ext: {eq: ".png"}}) {
        nodes {
          name
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }`
  )

  const teamMembers = data.team.map(m => {
    const nodeImg = files.allFile.nodes.find(f => f.name === m.id)
    const img = nodeImg ? nodeImg.childImageSharp.fluid.src : ''
    return Object.assign({}, m, {img})
  })

  return (
    <Layout>
      <SEO title="Team" />
      <div className="cp-internal-page cp-team">
        <div className="cp-internal-page__bg"></div>
        <div className="cp-internal-page__content cp-grid">
          <div className="cp-grid__container">
            <div className="cp-grid__content">
              <h1><span>Il</span> Team</h1>
              <TeamGrid team={teamMembers} />
            </div>
          </div>
        </div>
        <div className="cp-grid">
          <div className="cp-grid__left">
            <Spaceman />
          </div>
          <div className="cp-grid__container">
            <div className="cp-grid__content cp-team__content">  
              <h3>Perchè i Supereroi e Navicelle?</h3>
              <p>
                La metafora dei supereroi accompagna l’identità di CodicePlastico da anni.<br/> 
                In prima battuta è un aspetto rappresentativo del nostro carattere "amabilmente nerd"... del resto, chi non desidererebbe identificarsi con un eroe mascherato?
              </p>
              <p>
                Tralasciando il tratto giocoso, se pensiamo alle figure più rappresentative del mondo dei super eroi, spesso troviamo <strong>persone ordinarie</strong> dotate di <strong>poteri fisici o mentali soprannaturali</strong>, 
                quel tipo di potere che, se sfoderato al momento opportuno, è in grado di <strong>rendere il mondo un posto migliore</strong>.
              </p>
              <p className="cp-typography__main-text cp-team__main-text">
                <span>Trasporre tutto nel contesto tecnologico è facile</span>:<br/> 
                conoscere la tecnologia così bene da saperla governare, essere recettivi ai cambiamenti, non smettere mai di studiare sono il nostro potere più grande. <br/>
                <strong>E sì, anche noi possiamo rendere il mondo un posto migliore.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Team
