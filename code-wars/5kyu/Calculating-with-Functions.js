const zero = (f) => f ? f(0) : 0,
    one = (f) => f ? f(1) : 1,
    two = (f) => f ? f(2) : 2,
    three = (f) => f ? f(3) : 3,
    four = (f) => f ? f(4) : 4,
    five = (f) => f ? f(5) : 5,
    six = (f) => f ? f(6) : 6,
    seven = (f) => f ? f(7) : 7,
    eight = (f) => f ? f(8) : 8,
    nine = (f) => f ? f(9) : 9,
    plus = (n) => (m) => m + n,
    minus = (n) => (m) => m - n,
    times = (n) => (m) => m * n,
    dividedBy = (n) => (m) => Math.floor(m / n)



console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);