function findMissingLetter(array) {
    n = array.map(a => a.charCodeAt(0))
    return String.fromCharCode(((n[0]+n[n.length-1])*((n.length+1)/2) - n.reduce((a,b) => a+b)))
}

console.log(findMissingLetter(['a','b','c','d','f']))