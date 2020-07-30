function validParentheses(parens) {
    let balance = 0
    let forbid = 0
    parens
        .split('')
        .forEach((el) => {
            if (el == '(') balance++
            else if (el == ')') balance--
            if (balance < 0) forbid++
        })
    return balance == 0 && !forbid
}

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
console.log(validParentheses("()"), true)
console.log(validParentheses(")(()))"), false)
console.log(validParentheses("("), false)
console.log(validParentheses("(())((()())())"), true)
console.log(validParentheses("())("), false)