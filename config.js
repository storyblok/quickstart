const browserSync = require('browser-sync')
const reload = browserSync.reload

// themeId: The space id which you can find on storyblok app.storyblok.com in the space settings.
// domain: The domain without the protocol. Example: city.me.storyblok.com

module.exports = {
  blok: {
    apiVersion: 2,
    themeId: 'YOUR_SPACE_ID',
    domain: 'YOUR_DOMAIN',
    apiKey: require('./token'),
    basePath: 'views',
    environment: 'live',
    uploadDone: function(res) {
      if (res.file.indexOf('.liquid') > -1 && res.file.indexOf('_above_fold_css.liquid') <= -1) {
        browserSync.reload()
      }
    }
  }
}
