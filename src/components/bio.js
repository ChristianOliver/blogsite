/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/Space Illustration.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        boxShadow: `3px 3px 4px  grey`,
        padding: `8px`,
        borderRadius:`24px`,
        borderTop: `1px solid grey`,
        borderLeft: `1px solid grey`,
        maxWidth: `600px`,
        display: `flex`,
        marginBottom: `48px`,
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 75,
          borderRadius: `50%`,
        }}
        imgStyle={{
          borderRadius: `100%`,
        }}
      />
      <p>
        <strong style={{color: `rgb(210,50,40)`}}>{author}</strong> develops and designs. A blogging adventure in coding, design, and the topics they might bring up. Will be updated many times a year.
        {` `}
       {/* <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
      </a> */}
      </p>
    </div>
  )
}

export default Bio
