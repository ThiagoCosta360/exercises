function order(words){
    const ord = []
    words.split(' ').forEach(l => {
        for (let element of l){
            let n = parseInt(element)
            if (n > 0){
                ord[n-1] = l
            }
        }
    })
    return ord.join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))

