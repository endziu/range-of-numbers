const { range, rangePromise } = require('../range-of-numbers.js')

rangePromise(0, 10000000).then(list => list.length).then(console.log)
console.log(range(-10, 10, 2).length)
console.log(range(10, 100, 3).length)
console.log(range(-100, 310, 7).length)
console.log(range(11, 410, 13).length)
