import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: `rgb(210,50,40)`,
            fontWeight: `Bold`
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              fontWeight: `Bold`,
              
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontWeight:`bold`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div 
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: 70, 
          }}
        >
          © {new Date().getFullYear()}, Chris Oliver
        </footer>
      </div>
    )
  }
}

export default Layout
