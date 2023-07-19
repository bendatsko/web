const config = require('./config');

module.exports = {
  pathPrefix: "/portfolio",
  plugins: [
    {
      resolve: 'gatsby-theme-academic',
      options: {
        contentPath: 'content',
        googleAnalyticTrackingId: 'UA-XXXXXXXXX-X',
        defaultLanguage: 'en',
        pages: config.pages,
        tagColors: config.tagColors,
        author: config.author,
        icon: './static/favicon.png',
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects/minecraft`,
      },
    },
  ],
  siteMetadata: config,
  pathPrefix: config.pathPrefix,
};
