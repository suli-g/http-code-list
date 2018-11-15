require('./lib/deep-sort')
const statusCodes = require('http-status-codes')
const toNumbers = require('./lib/to-numbers')
const listCodes = require('./lib/list-codes')

let [,,...args] = process.argv

if (require.main === module) {
    Object.entries(statusCodes)
        .deepSort()
        .filter(toNumbers)
        .forEach(listCodes)
}

module.exports = statusCodes