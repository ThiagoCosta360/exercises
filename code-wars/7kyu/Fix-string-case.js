// function solve(s) {
//     var ma = 0
//     var mi = 0

//     s.split("").forEach((el) => {
//         el = el.charCodeAt(0);

//         if (el >= 65 && el <= 90) ma++;
//         else if (el >= 97 && el <= 122) mi++;
//     });
//     return ma > mi ? s.toUpperCase() : s.toLowerCase()
// }

// Cooler way
const solve = s => s.replace(/[A-Z]/g, '').length < s.length / 2 ? s.toUpperCase() : s.toLowerCase()

console.log(solve("code"), "code");