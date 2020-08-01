// over time=
// var sum_pairs = function (ints, s) {
//   let pair = [0, 0, ints.length, 0];
//   for (let i = 0; i < ints.length; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if (ints[i] + ints[j] == s && j < pair[2])
//         pair = [ints[i], ints[j], j, 1];
//     }
//   }
//   return pair[3] ? pair.slice(0, 2) : undefined;
// };
// var sum_pairs = function (ints, s) {
//     let j = -1;
//     for (let i = 1; i < ints.length; i++) {
//         j = ints.slice(0, i).findIndex((el) => el + ints[i] == s)
//         if (j >= 0) return [ints[j], ints[i]]
//     }
//     return undefined
// };


var sum_pairs = function (ints, s) {
    let m = new Map()
    for (let i = 0; i < ints.length; i++) {
        if (m.has(s - ints[i])) return [s - ints[i], ints[i]]
        m.set(ints[i])
    }
    return undefined
};

// console.log(sum_pairs([11, 3, 7, 5], 10))
// console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10))
console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8))