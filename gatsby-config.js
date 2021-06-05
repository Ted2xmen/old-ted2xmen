module.exports = {
  siteMetadata: {
    siteTitle: `Ted2xmen's Blog`,
    defaultTitle: `Ted2xmen's Blog`,
    siteTitleShort: `Ted2xmen's Blog`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://ted2xmen.vercel.app/`,
    siteAuthor: `@ted2xmen`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#00A82D`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
     {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: `2639348366`,
       },
     },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
