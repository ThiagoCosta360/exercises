function queueTime(customers, n) {
    var tills = Array(n).fill(0)
    let time = 0
    while (customers.length) {
        tills = tills.map( v => v === 0 ? customers.shift() : v)
        tills = tills.map( v => --v )            
        time++
    }
    return time + tills.reduce((a, b) => b > a ? b : a)
}

console.log(queueTime([1,2,3,4,5], 100))
