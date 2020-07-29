function duplicateCount(text) {
    var unic = new Set()
    var counted = new Set()
    var t = 0
    text.toLowerCase().split('').forEach(el => {
        if (unic.has(el) && !counted.has(el)) {
            t++
            counted.add(el)
        } else unic.add(el)
    });
    return t
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")