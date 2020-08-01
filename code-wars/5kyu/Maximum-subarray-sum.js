var maxSequence = function (arr) {

    for (var i = 1, s = 0, max = 0; i <= arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            s = arr.slice(j, j + i).reduce((a, b) => a + b, 0)
            max = max > s ? max : s
        }
    }
    return max
}


console.log(maxSequence([]), 0)
console.log(maxSequence([-5, -34, -29, -6, -22, -23, 29,
    -11, 21, -36, -3, 2, 45, 23, -22, 5, 32, -22, 21, -5,
    8, 45
]), 132)
console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]), 155)
console.log(7 + 4 + 11 + -11 + 39 + 36 + 10 + -6 + 37 + -10 + -32 + 44 + -26 + -34 + 43 + 43)