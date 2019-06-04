import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Blog = ({ data }) => {
  const blog = data.markdownRemark

  return (
    <Layout>
      <h2>{blog.frontmatter.title}</h2>
      <p>
        By: {blog.frontmatter.author}, {blog.frontmatter.date}
      </p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: blog.html }} />
    </Layout>
  )
}

// slug variable will come from the 'context' we setup in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      html
    }
  }
`

export default Blog
