#! /usr/bin/env node
require('./lib/deep-sort')
const statusCodes = require('http-status-codes')
const toNumbers = require('./lib/to-numbers')
const fromArgs = require('./lib/from-args')
const listCodes = require('./lib/list-codes')

const httpCodes = Object.entries(statusCodes).deepSort()
let [,,...args] = process.argv
if (require.main === module) {
    httpCodes
    .filter(toNumbers)
    .filter(fromArgs(args))
    .forEach(listCodes)
}
else module.exports = {httpCodes}