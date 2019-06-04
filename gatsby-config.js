/**
 * Configure your Gatsby site with this file.
 * This is a Node JS file
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Mead Gatsby Bootcamp',
    author: 'Chad Whittaker',
    description: `A starter blog demonstrating what Gatsby can do.`,
    // siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `cwhit`,
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    // to use images in remark
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
