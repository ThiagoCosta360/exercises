var input = require('fs').readFileSync('/home/thiago/dev/exercises/javascript/basics/stdin.txt', 'utf8');
var lines = input.split('\n');

console.log(`X = ${Number(lines[0])+Number(lines[1])}`)