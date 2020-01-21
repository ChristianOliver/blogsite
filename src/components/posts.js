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
            marginTop: rhythm(3),
            marginBottom: 0,
            fontWeight: `Bold`,
            color: "rgb(30,30,30)",
            textTransform: "uppercase",
            paddingLeft: `4px`,
            borderLeft: `1px solid black`,
            borderBottom: `1px solid black`,
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
            marginTop: "4px",
            borderBottom: `1px solid blue`,
            borderLeft:`1px solid blue`,
            borderBottomLeftRadius: `32px`,
           paddingLeft:`8px`,
           maxWidth: `500px`}}>
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
