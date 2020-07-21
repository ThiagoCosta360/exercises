function checkExam(array1, array2) {
    var total = 0
    array1.forEach((el, i) => {
        if (el === array2[i]) {
            total += 4
        } else if (array2[i] != "") {
            total--
        }
    })
    return total < 0 ? 0 : total
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) == 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) == 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) == 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) == 0);