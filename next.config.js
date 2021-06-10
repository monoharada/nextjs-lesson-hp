// const withOptimizedImages = require('next-optimized-images')

module.exports = {
  trailingSlash: true,
  distDir: 'build',
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
};

// module.exports = withOptimizedImages({
//   handleImages: ['jpeg', 'png', 'svg'],
// })