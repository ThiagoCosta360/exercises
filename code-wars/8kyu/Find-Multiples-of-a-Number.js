function findMultiples(integer, limit) {
    var m = integer
    var arr = []
    while (m <= limit) {
        arr.push(m)
        m += integer
    }
    return arr
}