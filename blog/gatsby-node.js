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
