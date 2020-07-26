function solution(number) {
    var count3 = 0
    var count5 = 0
    var total = 0
    while (1) {
        if (count3 < count5) {
            count3 += 3
            if (count3 < number) {
                if (count3 != count5) {
                    total += count3
                }

            }
        } else {
            count5 += 5
            if (count5 < number) {
                total += count5

            }
        }
        if (count3 > total && count5 > total) {
            break
        }
    }
    return total
}

// What kind of soluction is this??
function solution(number) {
    var n3 = Math.floor(--number / 3),
        n5 = Math.floor(number / 5),
        n15 = Math.floor(number / 15);
    return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}

// Clean one line way
function solution(number) {
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}

console.log(solution(10), 23)