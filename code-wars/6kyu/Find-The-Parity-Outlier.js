function findOutlier(integers) {
    var odd = 0
    var even = 0
    integers.forEach((el) => {
        if (el % 2) {
            odd++
        } else {
            even++
        }
    })
    return odd < even ? integers.find((el) => el % 2 != 0) : integers.find((el) => el % 2 == 0)
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)