module.exports = (args) => ([status,code]) => {
    if (args.length === 0) return true
    let i = 0
    for (let arg of args) {
        const regex = new RegExp(`${arg}`, 'gi')
        if (/\d/g.test(arg)) {
            arg = arg.replace(/_/g, '\\d')
        }
        if (regex.test(code)||regex.test(status)) return true
    }
    return false
}