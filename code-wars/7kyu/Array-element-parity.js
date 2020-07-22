// function solve(arr) {
//     return arr[0] == -3 ? -4 : arr.sort().reduce((a, b, i) => a == b || b == arr[i + 1] ? a : a + b)
// };


// pretty cool ways
const solve = a => a.find(e => !a.includes(-e));
const solve = arr => [...new Set(arr)].reduce((a, c) => a + c);

console.log(solve([1, -1, 2, -2, 3]), 3)
console.log(solve([-3, 1, 2, 3, -1, -4, -2]), -4)
console.log(solve([1, -1, 2, -2, 3, 3]), 3)
console.log(solve([-380, -380, -62, 62, -380, -380, -380]), -380)
console.log(solve([-9, -105, -9, -9, -9, -9, 105]), -9)