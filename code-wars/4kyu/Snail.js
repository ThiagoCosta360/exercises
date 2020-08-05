snail = function (array) {

    let size = array[0].length

    let direction = 0 // 0 = right, 1 = down, 2 = left, 3 = up
    let limits = [size, size, 0, 0]
    console.log(limits)
    const newDirection = (dir) => dir == 3 ? 0 : ++dir

    let newArray = []
    let i = 0; // columns
    let j = 0; // rows

    while (newArray.length < size ** 2) {
        newArray.push(array[i][j])
        if (direction == 0) {
            if (j + 1 >= limits[direction]) {
                limits[direction]--
                direction++
                i++
            } else {
                j++
            }
        } else if (direction == 1) {
            if (i + 1 >= limits[direction]) {
                limits[direction]--
                direction++
                j--
            } else {
                i++
            }

        } else if (direction == 2) {
            if (j - 1 < limits[direction]) {
                limits[direction]++
                direction++
                i--
            } else {
                j--
            }
        } else if (direction == 3) {
            if (i - 1 <= limits[direction]) {
                limits[direction]++
                direction = 0
                j++
            } else {
                i--
            }
        }
    }
    return newArray
}

// console.log(snail([
//     []
// ]), []);
// console.log(snail([
//     [1]
// ]), [1]);
// console.log(snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
//           , [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
console.log(snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]));
// console.log(snail([
//     [1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11]
// ]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);