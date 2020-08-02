function productFib(prod) {
    const fib = (n) => n == 0 ? 0 : n == 1 ? 1 : fib(n - 1) + fib(n - 2)
    var p = 0
    for (n = 0; p < prod; n++) {
        p = fib(n) * fib(n + 1)
    }
    return [fib(n - 1), fib(n), p == prod]
}

console.log(55 * 89)
console.log(productFib(4895), [55, 89, true])
console.log(productFib(5895), [89, 144, false])
console.log(productFib(74049690), [6765, 10946, true])
console.log(productFib(84049690), [10946, 17711, false])
console.log(productFib(193864606), [10946, 17711, true])
console.log(productFib(447577), [610, 987, false])
console.log(productFib(602070), [610, 987, true])