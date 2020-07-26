const digital_root = (n) => n ? n % 9 ? n % 9 : 9 : 0

// Coolest way
function digital_root(n) {
    return (n - 1) % 9 + 1;
}

console.log(digital_root(16), 7)
console.log(digital_root(456), 6)

// function digital_root(n) {
//     return ("" + n).split('').reduce((a, b) => +a + +b)
// }