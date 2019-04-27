module.exports = {
  siteMetadata: {
    title: "Smockle Blog",
    description: "I’m Clay Miller. Builder. Explorer. Thought-Haver.",
    author: "@smockled"
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
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};
