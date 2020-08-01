const pigIt = str => str.split(' ').map((el) => el != '!' && el != '?' ? el.slice(1) + el[0] + 'ay' : el).join(' ')


console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay')