const fs = require('fs');
const numbers = fs.readFileSync('./input.txt', { encoding: 'UTF8' }).trim().split("\n").map(n => +n);
const totalIncreases = (arr) => arr.reduce((pv, cv, ci, a) => pv + Number(ci && cv > a[ci -1]), 0);

// part 1
console.log(totalIncreases(numbers));

// part 2
const windows = numbers.reduce((pv, cv, ci, a) => ci >= 2 && pv.concat([a.slice(ci - 2, ci + 1).reduce((pv, cv) => pv+cv)]) || pv, []);
console.log(totalIncreases(windows));
