const { range, rangePromise } = require('../range-of-numbers.js')

rangePromise(0, 10000000).then(list => list.length).then(console.log)
console.log(range(-5, 5, 2))
console.log(range(10, 18, 3))
console.log(range(5))
console.log(range(10, 100, 10))

