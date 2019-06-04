import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './styles/header.module.scss'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  const metadata = data.site.siteMetadata

  return (
    <header className={headerStyles.header}>
      <nav>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr repeat(4, 1fr)',
          }}
        >
          <h3>
            <Link className={headerStyles.title} to="/">
              {metadata.title}
            </Link>
          </h3>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </div>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
