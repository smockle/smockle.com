module.exports = {
  siteMetadata: {
    title: "Smockle",
    blogTitle: "Smockle Blog",
    description: "I’m Clay Miller. Builder. Explorer. Thought-Haver.",
    author: "@smockled",
    siteUrl: "https://www.smockle.com"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-vscode",
            options: {
              colorTheme: {
                defaultTheme: "Light+ (default light)",
                prefersDarkTheme: "Dark+ (default dark)",
                prefersLightTheme: "Light+ (default light)"
              },
              injectStyles: false,
              wrapperClassName: "gatsby-remark-vscode-wrapper"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 675,
              linkImagesToOriginal: false,
              withWebp: true,
              wrapperStyle: "overflow: hidden; max-height: 400px;"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(({ node }) => ({
                ...node.frontmatter,
                ...{
                  description: node.excerpt,
                  date: node.fields.date,
                  url: `https://www.smockle.com${node.fields.slug}`,
                  guid: `https://www.smockle.com${node.fields.slug}`,
                  custom_elements: [{ "content:encoded": node.html }]
                }
              })),
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                    }
                    fields {
                      slug
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/blog/feed.xml",
            title: `Smockle Blog RSS Feed`
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-csp",
      options: {
        disableOnDev: true,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "style-src": "'self' 'unsafe-inline'"
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#26856d",
        display: "standalone",
        icon: "src/images/logo.svg"
      }
    },
    "gatsby-plugin-offline"
  ]
};
