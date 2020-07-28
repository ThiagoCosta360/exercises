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

// JS way
function findOutlier(int) {
    var even = int.filter(a => a % 2 == 0);
    var odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)