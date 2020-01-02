const browser = require('browser-sync')
const config = {
  port: 3000,
  server: {
    baseDir: ['dist'],
  },
}

const files = ['dist/*.js', 'dist/*.html']

const bs = browser.create()
bs.init(config)
