module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/walkthrough/'
    : '/'
}