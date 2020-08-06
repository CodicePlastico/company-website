import React, { useState } from 'react'
import classNames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TeamGrid from '../components/team/teamGrid'
import TeamList from '../components/team/teamList'

import data from '../assets/team/team.yaml'

const Team = () => {

  const [activeFilter, setActiveFilter] = useState('Tutti')
  const [layout, setLayout] = useState('Griglia')

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
    const nodeImg = files.allFile.nodes.find(f => f.name === m.img)
    const img = nodeImg ? nodeImg.childImageSharp.fluid.src : ''
    return Object.assign({}, m, {img})
  })

  const teamFilters = teamMembers.reduce((acc, t) => {
    return [...acc, ...t.tags]
  }, []).reduce((acc, tag) => {
    if (acc.indexOf(tag) < 0 ){
      return [...acc, tag]
    }
    return acc
  }, [])

  const filters = ['Tutti', ...teamFilters]

  const visibleMembers = teamMembers.filter(t => {
    return activeFilter === 'Tutti' || t.tags.includes(activeFilter)
  })

  const visibilityFilters = ['Relazioni', 'Griglia']

  const gridClass = classNames('cp-team__members-grid', {
    'cp-team__members-grid--active': layout === 'Griglia'
  })

  const relationClass = classNames('cp-team__members-relation', {
    'cp-team__members-relation--active': layout === 'Relazioni'
  })


  return (
    <Layout>
      <SEO title="Team" />
      <div className="cp-internal-page cp-team">
        <div className="cp-internal-page__bg"></div>
        <div className="cp-internal-page__content cp-grid">
          <div className="cp-grid__left cp-team__rocket"></div>
          <div className="cp-grid__container">
            <div className="cp-grid__content">
              <h1><span>Il</span> Team</h1>
              <div className="cp-team__members">
                <div className={gridClass} >
                  <TeamGrid team={visibleMembers} />
                </div>
                <div className={relationClass} >
                  <TeamList team={visibleMembers} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cp-team__filters">
          <div className="cp-grid">
            <div className="cp-grid__container">
              <div className="cp-grid__content cp-team__filters-container">
                <div>
                  <h5 className="cp-team__filters-title"><span>Visualizza</span></h5>
                  <div className="cp-team__filters-buttons">
                    {visibilityFilters.map(f => {
                      const buttonClass = classNames('cp-team__filters-button', {
                        'cp-team__filters-button--selected': layout === f 
                      })
                      return (
                        <button className={buttonClass} type="button" key={`filter-${f}`} onClick={setLayout.bind(null, f)}>{f}</button>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <h5 className="cp-team__filters-title"><span>Filtra</span></h5>
                  <div className="cp-team__filters-buttons cp-team__filters-buttons--tags">
                    {filters.map(f => {
                      const buttonClass = classNames('cp-team__filters-button', {
                        'cp-team__filters-button--selected': activeFilter === f 
                      })
                      return (
                        <button className={buttonClass} type="button" key={`filter-${f}`} onClick={setActiveFilter.bind(null, f)}>{f}</button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cp-grid">
          <div className="cp-grid__left cp-team__spaceman"></div>
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
