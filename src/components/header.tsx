import React, { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import Logo from '../assets/icons/logo.svg'
import Brand from '../assets/icons/brand.svg'

const Header = () => {
  const [open, setOpen] = useState(false)

  const click = () => {
    setOpen(!open)
  }

  const menuItems = [
    {
      id: 'about',
      href: '/about/',
      label: 'About',
      internal: true,
    },
    {
      id: 'team',
      href: '/team/',
      label: 'Team',
      internal: true,
    },
    {
      id: 'blog',
      href: 'https://blog.codiceplastico.com/',
      label: 'Plastic Blog',
      internal: false,
    },
    {
      id: 'contatti',
      href: '/contatti/',
      label: 'Contatti',
      internal: true,
    },
    /*{
      id: 'jobs',
      href: '/jobs/',
      label: 'Jobs',
      internal: true, 
      emph: true
    }*/
  ]

  const burgerClass = classNames('cp-header__burger', {
    'cp-header__burger--open': open,
  })

  const menuClass = classNames('cp-header__menu', {
    'cp-header__menu--open': open,
  })

  return (
    <header className="cp-header">
      <Link to="/" className="cp-header__logo" aria-label='Link alla home'>
        <div className="cp-header__logo-image">
          <Logo />
        </div>
        <div className="cp-header__logo-brand">
          <Brand />
        </div>
      </Link>
      <button className={burgerClass} onClick={click}>
        <span className="cp-header__burger-bar"></span>
        <span className="cp-header__burger-bar"></span>
        <span className="cp-header__burger-bar"></span>
      </button>
      <nav className={menuClass}>
        <ul className="cp-header__menu-items">
          {menuItems.map(m => {
            const linkClass = classNames('cp-header__menu-link', {
              'cp-header__menu-link--emph': m.emph,
            })
            return (
              <li className="cp-header__menu-item" key={m.id}>
                {m.internal ? (
                  <Link
                    className={linkClass}
                    activeClassName="cp-header__menu-link--selected"
                    title={m.label}
                    to={m.href}
                  >
                    {m.label}
                  </Link>
                ) : (
                  <a
                    className="cp-header__menu-link cp-header__menu-link--external"
                    href={m.href}
                    title={m.label}
                    target="_blank"
                  >
                    {m.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
