/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (page.path.match(/^\/jobs/)) {
    deletePage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      optimization: {
        concatenateModules: false,
      },
      module: {
        rules: [
          {
            test: /swiper/,
            use: loaders.null(),
          },
          {
            test: /react-p5/,
            use: loaders.null(),
          },
          {
            test: /[\\/]node_modules[\\/]p5[\\/]/,
            use: loaders.null(),
          },
          {
            test: /scroll-to-element/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
