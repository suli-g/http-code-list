module.exports = (args="") => {
    let result = args.toString().replace(/\-{1,2}[^-\s]+|(,)/g, ' ').trim()
    if (/-/.test(result)) {
        throw new Error(
            `flags may be used with -{first letter} or --{flag}.
            examples:
            http-status 404 -s
            http-status 404 --status
            http-status bad_gateway --code
            http-status bad_gateway --c
            `
        )
    }
    else return result
}