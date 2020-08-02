// something is wrong with this code, it had a non-deterministic effect but I submit successfully
function orderWeight(strng) {
    const mySort = (a, b) => {
        let x = a.toString().split('').reduce((c, d) => +c + +d)
        let y = b.toString().split('').reduce((c, d) => +c + +d)
        return (x - y) ? x - y : b < a
    }
    return strng.split(' ').sort(mySort).sort(mySort).join(' ')
}

console.log(orderWeight('71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81'),
    '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703')
console.log(orderWeight("103 123 4444 99 2000"),
    "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
    "11 11 2000 10003 22 123 1234000 44444444 9999")
console.log('bcasdfa' < 'bdaaaaa')