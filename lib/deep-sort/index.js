Array.prototype.deepSort = function () {
    let { length } = this
    length -= 1
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            const a = this[j], b = this[j+1]
            if (a[1] > b[1]) {
                ([this[j + 1], this[j]] = [a, b])
            }
        }
    }
    return this
}