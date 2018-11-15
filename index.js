const statusMap = require('http-status-codes')
const swap = require('./lib/swap')
const stripFlags = require('./lib/strip-flags')
let [,,...args] = process.argv

const codeMap = Object.entries(statusMap).reduce(swap, {})
if (require.main === module) {
    let result = codeMap
    if (args) {
        let deflagged = stripFlags(args)
        if (deflagged) {
            result = deflagged.split(' ').reduce(
                (stats,_code) => {
                    _code = _code.toUpperCase()
                    let [status, code] = [_code, statusMap[_code]]
                    if (!code) {
                        ([code, status] = [_code, codeMap[_code]])
                    }
                return stats.concat(`${code}: ${status}\n`)
            }, "")
        }
    }
    console.log(result) 
}

module.exports = {
    codeMap,
    statusMap
}