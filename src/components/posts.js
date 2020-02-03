import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <div>
        <h3
          style={{
            ...scale(0.2),
            fontFamily: `Montserrat, sans-serif`,
            marginTop: `48px`,
            paddingLeft: 12,
            paddingBottom: 8,
            paddingTop: 8,
            fontWeight: `Bold`,
            textTransform: "uppercase",
            color: `rgb(255,255,255)`,
            backgroundColor: ` rgb(220,50,30)`,
            borderBottomLeftRadius:`16px`,
            borderTopRightRadius: `16px`,
            letterSpacing: `1px`,
            maxWidth: `600px`
          }}
        >
          Recent Posts
        </h3>
      </div>
      <div >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style ={{              
              boxShadow: `2px 2px 2px  grey`,
              marginTop: `12px`,
        paddingLeft: `8px`,
        paddingBottom: `2px`,
        borderRadius:`24px`,
        
        borderTop: `1px solid grey`,
        borderLeft: `1px solid grey`,
           maxWidth: `600px`}}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  
            
              }}
              >
                <Link style={{ boxShadow: `none`, color:"black"
              }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
