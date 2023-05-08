import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'


const ChFinance = () => {

  const [checked, setChecked] = useState('none')
  const handleChange = e => {
    if (checked === e.target.value) {
      setChecked('none')
    } else {
      setChecked(e.target.value)
    }
  }

  return (
    <Layout>
      <SEO title="Grazie per averci contattato" />
      <div className="cp-internal-page cp-thanks">
        <div className="cp-internal-page__bg"></div>

        <div className="cp-internal-page__content cp-internal-page__content--bg cp-grid intro">
          <div className="cp-grid__container">
            <div className="cp-internal-page__content cp-grid__content">
              <h1><span>Messaggio</span> Inviato</h1>
              <h2 className="">
                Grazie per averci contattato
              </h2>

              <p>A breve verrete contattati via email. Se, nel frattempo, volete scoprire qualcosa di più su di noi, ecco alcuni link interessanti:</p>
              <ul>
                <li><a href="https://blog.codiceplastico.com/" target="_blank" rel="noopener noreferrer">Il nostro Blog</a></li>
                <li><a href="https://blog.codiceplastico.com/events.html" target="_blank" rel="noopener noreferrer">Le ultime conferenze a cui abbiamo parlato</a></li>
                <li><a href="https://codiceplastico.us18.list-manage.com/subscribe?u=3a6d4d4fc68bc32031e87e865&id=2f6137b5df" target="_blank" rel="noopener noreferrer">La nostra newsletter</a></li>
                <li><a href="https://newsletter.codiceplastico.com/" target="_blank" rel="noopener noreferrer">Il nostro corso gratuito di avvicinamento alla tecnologia per imprenditori</a></li>
              </ul>
              <p><br/>A presto!</p>
            </div>
          </div>

        </div>

     



     

       

     


  
      </div>
    </Layout>
  )
}

export default ChFinance
