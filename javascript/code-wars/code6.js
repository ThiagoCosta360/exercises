function solution(str) {
    let v = []
    let p = 0
    let a = ''
    for (let s of str) {
        if (s == "_") {
            a = ""
        } else if (a.length <= 1) {
            a = a.concat(s)
        } else {
            v[p++] = a
            a = s
        }
    }
    if (a.length == 1) {
        a = a.concat('_')
    }
    a ? v[p++] = a : null
    return v
}
console.log(solution("_"))