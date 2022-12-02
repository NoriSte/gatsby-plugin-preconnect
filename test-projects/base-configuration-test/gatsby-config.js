/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `base-configuration-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://foo.com', 'https://bar.com'],
      },
    },
  ],
}
