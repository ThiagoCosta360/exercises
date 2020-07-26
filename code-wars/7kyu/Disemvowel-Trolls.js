// function disemvowel(str) {
//     return str.split('').filter(el => el != 'a' && el != 'e' && el != 'i' && el != 'o' && el != 'u').join('')
// }

function disemvowel(str) {
    return str.match(/[^aeiou]/ig).join('')
}



console.log(disemvowel("thiago"))