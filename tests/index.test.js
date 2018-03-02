const range = require('../dist/range-of-numbers.min.js')
const assert = require('assert')

let timeStart = Number(Date.now().toString())

// check large arrays
assert.equal(range(0, 10000000).length, 10000001)
assert.equal(range(0, 100000)[666], 666)
assert.equal(range(10000000, 0).length, 10000001)
assert.equal(range(100000, 0)[666], 99334)
console.log(`test 'big arrays': (OK)`)

// check step
assert.deepEqual(range(0, 10, 2), [0, 2, 4, 6, 8, 10])
assert.deepEqual(range(-244, 10000, 2234), [-244, 1990, 4224, 6458, 8692])
assert.deepEqual(range(10000, -4422, 4321), [10000, 5679, 1358, -2963])
assert.equal(range(-123, -780, -123), 'Error: Step must be a positive integer')
assert.equal(range(-123, -150, -12), 'Error: Step must be a positive integer')
assert.equal(range(1, 12, -1), 'Error: Step must be a positive integer')
assert.equal(range(17, 10, 0), 'Error: Step must be a positive integer')
console.log(`test 'step amount': (OK)`)

//check silly input
assert.equal(range(1, 10, 'foo'), "Error: All inputs must be of type 'number'")
assert.equal(range('1', 'foo', 'bar'), "Error: All inputs must be of type 'number'")
assert.equal(range('blah', 5, 1), "Error: All inputs must be of type 'number'")
assert.equal(range(null, null, null), "Error: All inputs must be of type 'number'")
assert.equal(range(null, null, 'blah'), "Error: All inputs must be of type 'number'")
assert.equal(range(void 0, false, true), "Error: All inputs must be of type 'number'")
assert.equal(range(10, 10, -1), 'Error: Step must be a positive integer')
assert.equal(range(10, 10, 'foo'), "Error: All inputs must be of type 'number'")
console.log(`test 'silly input': (OK)`)

// check proper input
assert.deepEqual(range(-2, 7), [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7])
assert.deepEqual(range(-5, 5, 2), [-5, -3, -1, 1, 3, 5])
assert.deepEqual(range(10, 5), [10, 9, 8, 7, 6, 5])
assert.deepEqual(range(10, 0, 4), [10, 6, 2])
assert.deepEqual(range(10, 10, 1), [10])
assert.deepEqual(range(10, 10, 2), [10])
assert.deepEqual(range(10, 10, 777), [10])
assert.deepEqual(range(10, 10), [10])

console.log(`test 'proper input': (OK)`)

let timeEnd = Number(Date.now().toString())
console.log(`ALL TESTS DONE: in ${timeEnd - timeStart}ms.\n`)
