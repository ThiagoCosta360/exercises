// function squareDigits(num) {
//     total = ''
//     for (let n = num; n > 0; n = Math.floor(n / 10)) {
//         total = (n % 10) ** 2 + total
//     }
//     return +total
// }

// Coolest way
function squareDigits(num) {
  return +("" + num)
    .split("")
    .map((v) => v ** 2)
    .join("");
}

console.log(squareDigits(9119));
