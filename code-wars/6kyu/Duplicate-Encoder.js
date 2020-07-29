function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map((el, i, arr) => arr.indexOf(el) != arr.lastIndexOf(el) ? ')' : '(')
        .join('')
}

//Or
const duplicateEncode = (word) => word.toLowerCase().split('').map((el, i, arr) => arr.indexOf(el) != arr.lastIndexOf(el) ? ')' : '(').join('')


console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())", "should ignore case");
console.log(duplicateEncode("(( @"), "))((");
console.log(duplicateEncode("QQQeQQQHwQQQQ"), ")))()))(())))");
console.log("QQQeQQQHwQQQQ".toLowerCase().indexOf("q"), "QQQeQQQHwQQQQ".toLowerCase().lastIndexOf("q"))