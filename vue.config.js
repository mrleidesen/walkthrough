const isProd = process.env.NODE_ENV === 'production';
const externals = {
  'vue': 'Vue'
}

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  publicPath: isProd ? '/walkthrough/' : '/',
  configureWebpack: {
    externals: externals
  }
}