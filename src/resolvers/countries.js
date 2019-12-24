const { countries } = require('countries-list')
const { createCountry, createContinent } = require('./util')

exports.countries = (_, args) => {
  if (args.continent) {
    return Object.entries(countries).reduce((acc, [code, country]) => {
      if (country.continent === args.continent) {
        return [...acc, {
          code,
          ...createCountry(country),
          continent: createContinent(country.continent)
        }]
      }
      return acc
    }, [])
  }
  return Object.entries(countries).map(([code, country]) => ({
    code,
    ...createCountry(country),
    continent: createContinent(country.continent)
  }))
}

// exports.countries = () => []

// [{
// native: 'اليَمَن',
// phone: '967',
// languages: [ 'ar' ],
// emoji: '🇾🇪',
// emojiU: 'U+1F1FE U+1F1EA' }]