module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-pwa-tutorial/'
    : '/',
  outputDir: 'vue-pwa-tutorial'
};
