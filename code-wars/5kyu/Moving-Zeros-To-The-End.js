// I definitely can't use sort()
// var moveZeros = function (arr) {
//     return arr.sort((a, b) => !a && b ? 1 : a && !b ? -1 : 0)
// }

var moveZeros = function (arr) {
    var zeros = 0
    return arr.filter(el => {
        if (el === 0) {
            zeros++
            return false
        }
        return true
    }).concat(...Array(zeros).fill(0))
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
    [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
console.log(moveZeros([9, 9, 9, 9, 1, 2, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
    [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

console.log(!0)