const { createContinent } = require('./util')

exports.continent = (_, { code }) => createContinent(code)