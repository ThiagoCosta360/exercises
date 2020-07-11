function XO(str) {
    let x = 0
    let o = 0
    for (let n of str) {
        if (n === 'x') {
            x++
        } else if (n === 'o') {
            o++
        }
    }
    return x === o
}

console.log(XO("zpzpzpp"))