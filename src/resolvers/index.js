const { continents } = require('./continents')
const { continent } = require('./continent')
const { countries } = require('./countries')
const { country } = require('./country')

module.exports = {
  Query: {
    continents,
    continent,
    countries,
    country,
  }
}