import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import Menu from "./menu"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Link to="/">
        <img src="/images/codiceplastico_logo.svg" />
      </Link>
      {/* <Menu /> */}
      <ul>
        <li>
          <Link to="/about-us/">About</Link>
        </li>
        <li>
          <Link to="/team/">Team</Link>
        </li>
        <li>
          <Link to="/plastic-blog/">Plastic Blog</Link>
        </li>
        <li>
          <Link to="/contatti/">Contatti</Link>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
