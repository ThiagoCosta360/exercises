function filter_list(l) {
    new_list = []
    for (let el of l) {
        if ((typeof el) != (typeof 'l')) {
            new_list.push(el)
        }
    }
    return new_list
}

console.log(filter_list([1,2,'a','b']))