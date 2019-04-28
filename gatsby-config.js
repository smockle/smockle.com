module.exports = {
  siteMetadata: {
    title: "Smockle Blog",
    description: "I’m Clay Miller. Builder. Explorer. Thought-Haver.",
    author: "@smockled",
    siteUrl: "https://blog.smockle.com"
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
    "gatsby-plugin-remove-trailing-slashes",
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
                  url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
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
            title: "Smockle Blog RSS Feed"
          }
        ]
      }
    }
  ]
};
