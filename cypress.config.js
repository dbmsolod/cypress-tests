require('dotenv').config()

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.env = process.env
      return config
    },
  },
  env: {
    LOGIN: process.env.CYPRESS_LOGIN | 'demo',
    PASSWORD: process.env.CYPRESS_PASSWORD | 'demo'
  }
};
