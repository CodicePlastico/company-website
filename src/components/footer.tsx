import React from 'react'

import Logo from '../assets/icons/logo.svg'
import Brand from '../assets/icons/brand.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Twitter from '../assets/icons/twitter.svg'

const Footer = () => (
  <footer className="cp-footer">
    <a className="cp-footer__logo">
      <div className="cp-footer__logo-image">
        <Logo />
      </div>
      <div className="cp-footer__logo-brand">
        <Brand />
      </div>
    </a>
    <div className="cp-footer__company">
      <div className="cp-footer__company-name">CodicePlastico</div>
      <span className="cp-desktop__visible cp-footer__company-separator">
        -
      </span>
      <div className="cp-footer__company-data">
        <span className="cp-footer__company-piva">P.IVA 03079830984</span>
        <span className="cp-footer__company-separator">-</span>
        <a
          className="cp-footer__company-address"
          href="https://goo.gl/maps/sBtSsQvxgAyLrtgYA"
          target="_blank"
        >
          Via Branze 45, 25123 Brescia
        </a>
      </div>
      <span className="cp-desktop__visible cp-footer__company-separator">
        -
      </span>
      <div className="cp-footer__company-contacts">
        <a
          className="cp-footer__company-mail"
          href="mailto:&#105;&#110;&#102;&#111;&#64;&#99;&#111;&#100;&#105;&#99;&#101;&#112;&#108;&#97;&#115;&#116;&#105;&#99;&#111;&#46;&#99;&#111;&#109;"
        >
          info@codiceplastico.com
        </a>
        <span className="cp-footer__company-separator">-</span>
        <a className="cp-footer__company-privacy" href="https://www.iubenda.com/privacy-policy/39068350" target="_blank" rel="noopener noreferrer">
          Privacy
        </a>&nbsp;&amp;&nbsp;
        <a className="cp-footer__company-privacy" href="https://www.iubenda.com/privacy-policy/39068350/cookie-policy" target="_blank" rel="noopener noreferrer">
          Cookie Policy 
        </a>
      </div>
    </div>
    <ul className="cp-footer__social">
      <li className="cp-footer__social-item">
        <a
          className="cp-footer__social-link"
          aria-label="Link al profilo twitter"
          href="https://twitter.com/codiceplastico"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li className="cp-footer__social-item">
        <a
          className="cp-footer__social-link"
          aria-label="Link al profilo linkedin"
          href="https://www.linkedin.com/company/codiceplastico/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
      </li>
      <li className="cp-footer__social-item">
        <a
          className="cp-footer__social-link"
           aria-label="Link al profilo instagram"
          href="https://www.instagram.com/codice_plastico/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </li>
      <li className="cp-footer__social-item">
        <a
          className="cp-footer__social-link"
           aria-label="Link al profilo facebook"
          href="https://www.facebook.com/CodicePlastico/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
