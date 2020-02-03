/**
 * Projects component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      site {
        siteMetadata {
          projects {
            title
            url
            description
            moreLinks {
              type
              url
            }
          }
        }
      }
    }
  `)

  const { projects } = data.site.siteMetadata
  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            fontWeight: 'Bold',
            marginTop: 0,
            marginBottom: 12,
            paddingLeft: 12,
            paddingBottom: 8,
            paddingTop: 8,
            letterSpacing: `1px`,
            color: `rgb(255,255,255)`,
            backgroundColor: ` rgb(220,50,30)`,
            borderBottomLeftRadius:`16px`,
            borderTopRightRadius: `16px`,
            textTransform: "uppercase",
            maxWidth: `600px`
          }}
        >
          Recent Projects
        </h3>
      </div>
      <div>
        {projects.map(project => {
          const { title, description, url, moreLinks } = project
          return (
            <div key={title} style = {{
              boxShadow: `2px 2px 2px  grey`,
              marginTop: `12px`,
        paddingLeft: `8px`,
        paddingBottom: `2px`,
        maxWidth: `600px`,
        borderRadius:`24px`,
        borderTop: `1px solid grey`,
        borderLeft: `1px solid grey`,



              color: "black"}}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  color: "black"
                }}
              >
                <a
                  href={url}
                  style={{ boxShadow: `none`,color:"black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </h3>
              <p>
                {description}
                {moreLinks &&
                  moreLinks.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      style={{ marginLeft: 10 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type}
                    </a>
                  ))}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
