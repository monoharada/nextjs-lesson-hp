// const withOptimizedImages = require('next-optimized-images')

module.exports = {
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
};

// module.exports = withOptimizedImages({
//   handleImages: ['jpeg', 'png', 'svg'],
// })