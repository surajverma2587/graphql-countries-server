const { countries } = require('countries-list')
const { createCountry } = require('./util')

exports.country = (_, { code }) => createCountry(code, countries[code])