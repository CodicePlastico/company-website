import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import serviceSeparator1 from './devops-1.jpg'
import serviceSeparator2 from './devops-2.jpg'
const Design = () => (
  <Layout>
    <SEO title="Sviluppo software" />
    <div className="cp-internal-page cp-service ">
      <div className="cp-internal-page__bg"></div>
      <div className="cp-internal-page__content cp-internal-page__content--bg--design cp-grid">
           <div className="cp-grid__container">
          <div className="cp-internal-page__content cp-grid__content">
            <h1><span>Devops </span>& Cloud</h1>
            <p className="cp-typography__main-text">
            Intro 
            </p>
          </div>
        </div>
       
      </div>

      <div className="cp-grid cp-service__sec">
        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h4><span>titolo</span></h4>
          <p>
           testo
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">cta</a>
          </p>
         
          </div>
        </div>
      </div>

      <div className="cp-grid cp-service__separator">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p>      
              <img className="" src={serviceSeparator1} alt=""/>
          </p>
          </div>
        </div>
      </div>
      
      <div className="cp-grid cp-service__sec">

        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h4><span>titolo</span></h4>
          <p>
           testo
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">cta</a>
          </p>
          
          </div>
        </div>
      </div>
      <div className="cp-grid cp-service__separator">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p>      
              <img className="" src={serviceSeparator2} alt=""/>
          </p>
          </div>
        </div>
      </div>
      
      <div className="cp-grid cp-service__sec">

        <div className="cp-grid__left">
        </div>
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <h4><span>titolo</span></h4>
          <p>
           testo
          </p> 
        
          <p>
              <br/>
              <a href="/contatti/"  className="cp-service__button--bordered ">cta</a>
          </p>
          
          </div>
        </div>
      </div>                                          
     
      <div className="cp-grid cp-service__tools">
        <div className="cp-grid__container">
          <div className="cp-grid__content">
          <p><strong>CHE STRUMENTI USIAMO?</strong>: lorem</p>
          </div>
        </div>
      </div>
      {/* <Customers /> */}
    </div>
  </Layout>
)

export default Design
