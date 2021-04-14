module.exports = {
  module: {
    rules: [
      {
        test: /\.twig$/i,
        use: "raw-loader",
      },
    ],
  },
  resolve: {
    fallback: {
      path: false,
    },
  },
};
