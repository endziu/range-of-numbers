# range-of-numbers
A little module to generate an Array of integer values from <**startIndex**> to <**endIndex**> inclusive. With optional non-negative <**step**> amount. Also implemented using a promise for use with large arrays(maybe). Work in progress: changes frequently!


### Install
```bash
npm install range-of-numbers
```
### Usage
```js
const { range, rangePromise } = require('../lib/index.js')

rangePromise(0, 10000000).then(list => list.length).then(console.log)
console.log(range(-10, 10, 2).length)
console.log(range(10, 100, 3).length)
console.log(range(-100, 310, 7).length)
console.log(range(11, 410, 13).length)
// => 11
// => 31
// => 59
// => 31
// => 10000001
```
## License
MIT, see [LICENSE.md](http://github.com/endziu/range-of-numbers/blob/master/LICENSE.md) for details.