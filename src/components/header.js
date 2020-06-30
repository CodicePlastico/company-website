import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  return(
    <header>
        <img src="/images/codiceplastico_logo.svg"/>
        <ul>
          <li>menu item</li>
          <li>menu item</li>
          <li>menu item</li>
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
