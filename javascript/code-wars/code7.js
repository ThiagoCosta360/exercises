const isValidWalk = (walk) => walk.length === 10 && walk.filter(n => n === 'n').length === walk.filter(n => n === 's').length && walk.filter(n => n === 'w').length === walk.filter(n => n === 'e').length

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))