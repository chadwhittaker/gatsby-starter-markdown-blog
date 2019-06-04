// this is a Node JS file for accessing the Node API available in Gatsby
// go to the Docs to see more info on available API points
const path = require('path') // this is a core node module for our use

// onCreateNode runs when you create the server
// you can create new nodes or create fields based on existing nodes
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  // create slug for each blog
  if (node.internal.type === 'MarkdownRemark') {
    // 1. grab slug from filename
    const slug = path.basename(node.fileAbsolutePath, '.md')
    // 2. create node field with slug
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. get path to blog template
  const blogTemplate = path.resolve('./src/templates/blog.js') // this must be an absolute path from root of harddrive, thats what resolve does

  // 2. get markdown data (we only need the slug)
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 3. create new page for each blog
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      // data you want to pass down to blog
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
