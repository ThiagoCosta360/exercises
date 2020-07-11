function longestConsec(strarr, k) {
    if (k<=0 || !strarr.length || k>strarr.length)  return ''
    let arr = strarr.map(e => e.length)
    let i = 0
    let imax = 0
    let max = 0
    while (i + k < arr.length + 1) {
        let value = arr.slice(i, i + k).reduce((a, b) => a + b)
        if (value > max) {
            max = value
            imax = i
        }
        i++
    }
    return strarr.slice(imax, imax + k).reduce((a, b) => a + b)
}

console.log(longestConsec([], 2))