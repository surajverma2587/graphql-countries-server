const { continents } = require('countries-list')

exports.createCountry = country => ({
  name: country.name,
  capital: country.capital,
  currency: country.currency,
})

exports.createContinent = code => ({
  code,
  name: continents[code]
})