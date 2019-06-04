import React from 'react'
import { Link, graphql } from 'gatsby'

import blogStyles from './styles/blog.module.scss'
import Layout from '../components/Layout'

const BlogPage = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blogs</h1>
      <div className={blogStyles.posts}>
        {blogs.map(({ node }) => (
          <div key={node.frontmatter.title} className={blogStyles.post}>
            <Link to={`/blog/${node.fields.slug}`}>
              <h4>{node.frontmatter.title}</h4>
              <p>
                {node.frontmatter.author}, {node.frontmatter.date}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
