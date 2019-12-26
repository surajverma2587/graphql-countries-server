const { continents } = require('countries-list')

exports.continents = () => Object.entries(continents).map(([code, name]) => ({ code, name }))
