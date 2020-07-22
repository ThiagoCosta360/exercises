function countWays(n, k) {
    var res = []
    var temp = 0;
    res[0] = 1;
    for (let i = 1; i <= n; i++) {
        let s = i - k - 1;
        let e = i - 1;
        if (s >= 0) {
            temp -= res[s];
        }
        temp += res[e]
        res[i] = temp
    }
    return res[n]
}



console.log(countWays(1, 3), 1);
console.log(countWays(3, 3), 4);
console.log(countWays(2, 3), 2);
console.log(countWays(5, 3), 13);
console.log(countWays(4, 3), 7);
console.log(countWays(10, 6), 492);
console.log(countWays(14, 7), 7936);

// broken formula
// return k == 1 ? 1 : countWays(n, --k) + ((n - ((k - 1) + z)) / 2) * z

// another broken
// total = 2 ** --n

// for (let i = 0; i <= (n - k); i++) {
//     total -= 2 ** i
// }
// return total