function highAndLow(numbers) {
    var res = []
    res[0] = numbers.split(' ')[0]
    res[1] = numbers.split(' ')[0]
    numbers.split(' ').forEach(el => {
        if (+el > res[0]) {
            res[0] = +el
        }
        if (+el < res[1]) {
            res[1] = +el
        }
    })
    return res.join(' ')
}

// Coolest way
function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("-1"), "-1 -1")