const { countries } = require('countries-list')
const { createCountry } = require('./util')

exports.countries = (_, { continent }) => continent ?
  Object.entries(countries).reduce((acc, [code, country]) =>
    (country.continent === continent) ?
      [...acc, createCountry(code, country)] : acc, [])
  : Object.entries(countries).map(([code, country]) => createCountry(code, country))