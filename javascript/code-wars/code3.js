function findOdd(A) {
    let count = 0
    for (let n of A) {
        for (let m of A) {
            if (n == m) {
                count++;
            }
        }
        if (count%2 != 0){
            return n
        }
        count = 0
    }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))