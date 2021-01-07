const withImages = require('next-images')

module.exports = {
  i18n: {
    locales: ['en', 'pt'],

    defaultLocale: 'en',

    domains: [
      {
        domain: 'localhost:3000',
        defaultLocale: 'en'
      }
    ]
  }
}

module.exports = withImages()
