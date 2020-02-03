module.exports = {
  siteMetadata: {
    title: `Chris Oliver`,
    author: `Chris Oliver`,
    description: `A starter blog & portfolio for gatsby.`,
    siteUrl: `https://gatsby-starter-blog-and-portfolio-demo.netlify.com/`,
    social: {
      twitter: ``,
    },
    projects: [
      {
        title: `Coding Blog & Portfolio!`,
        description: `Site built with gatsby`,
        url: `https://chrisoliver.netlify.com/`,
        moreLinks: [
          {
            type: `Github`,
            url: `https://github.com/ChristianOliver/blogsite`,
          },
        ],
      },
      {
        title: `Book List App`,
        description: `Vanilla JS app for keeping track of books. Uses local storage, forms, and bootstrap`,
        url: `https://github.com/ChristianOliver/booklistapp`,
      
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/Space Illustration.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
