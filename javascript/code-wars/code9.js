function deleteNth(arr, n) {
    return arr.filter((v, i, arr) => {
        let count = 1
        for (let aux = 0; aux<i; aux++) {
            arr[aux] === v ? count++ : null
        }
        return count <= n
    })
}

console.log(deleteNth([20,37,20,21], 1))