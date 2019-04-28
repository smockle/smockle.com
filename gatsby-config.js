const title = "Smockle Blog";
const siteUrl = "https://blog.smockle.com";

module.exports = {
  siteMetadata: {
    title,
    description: "I’m Clay Miller. Builder. Explorer. Thought-Haver.",
    author: "@smockled",
    siteUrl
  },
  plugins: [
    "gatsby-plugin-typescript",
    // "gatsby-plugin-typescript-checker",
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 675,
              linkImagesToOriginal: false,
              withWebp: true,
              wrapperStyle: "overflow: hidden; max-height: 400px;"
            }
          }
          // { resolve: "gatsby-remark-copy-linked-files" }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(({ node }) => ({
                ...node.frontmatter,
                ...{
                  description: node.excerpt,
                  date: node.fields.date,
                  url: `${siteUrl}${node.fields.slug}`,
                  guid: `${siteUrl}${node.fields.slug}`,
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
            output: "/feed.xml",
            title: `${title} RSS Feed`
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
    }
  ]
};
