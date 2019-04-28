// @ts-check
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const filename = createFilePath({ node, getNode, basePath: "posts" });

    const [, year, month, day, title] = filename.match(
      /^\/([\d]{4})-([\d]{2})-([\d]{2})-{1}(.+)\/$/
    );
    const slug = `/blog/${year}/${month}/${day}/${title}`;

    createNodeField({ node, name: "slug", value: slug });

    // save the date for later use
    createNodeField({
      node,
      name: "date",
      value: new Date(`${year}-${month}-${day}`)
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
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
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/post.tsx"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          date: node.fields.date
        }
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.jpf$/,
          use: ["file-loader"]
        }
      ]
    }
  });
};
