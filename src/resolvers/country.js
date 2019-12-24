const { countries } = require('countries-list')
const { createCountry, createContinent } = require('./util')

exports.country = (_, { code }) => {
  const country = countries[code]
  const continentCode = country.continent
  return {
    code,
    ...createCountry(country),
    continent: createContinent(continentCode)
  }
}