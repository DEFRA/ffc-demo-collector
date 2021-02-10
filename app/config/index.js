const joi = require('joi')
const eventConfig = require('./event-config')
const dbConfig = require('./database-config')
const { development, production, test } = require('./constants').environments

const schema = joi.object({
  env: joi.string().valid(development, test, production).default(development)
})

const config = {
  env: process.env.NODE_ENV
}

const result = schema.validate(config, {
  abortEarly: false
})

if (result.error) {
  throw new Error(`The server config is invalid. ${result.error.message}`)
}
const value = result.value

value.eventConfig = eventConfig
value.dbConfig = dbConfig

module.exports = value
