function findOdd(A) {
    let count = 0
    for (let n of A) {
        for (let m of A) {
            if (n == m) {
                count++;
            }
        }
        if (count % 2 != 0) {
            return n
        }
        count = 0
    }
}

// Coolest way
const findOdd = (A) => A.reduce((a, b) => a ^ b)