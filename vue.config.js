const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-finally/' : '/'
})
export default {
  pwa: {
    iconPaths: {
      favicon32: 'public/favicon.ico',
      favicon16: 'public/favicon.ico',
      appleTouchIcon: 'public/favicon.ico',
      maskIcon: 'public/favicon.ico',
      msTileImage: 'public/favicon.ico'
    }
  }
}
