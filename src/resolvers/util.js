const { continents } = require('countries-list')

exports.createCountry = (code, { name, capital, currency, continent }) => ({
  code,
  name,
  capital,
  currency,
  continent: this.createContinent(continent)
})

exports.createContinent = code => ({
  code,
  name: continents[code]
})