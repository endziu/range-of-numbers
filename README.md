# range-of-numbers
A little module to generate an Array of integer values from <**startIndex**> to <**endIndex**> inclusive. With optional non-negative <**step**> amount. Also implemented using a promise for use with large arrays(maybe). Work in progress: changes frequently! works with node v.9.5.0


### Install
```bash
npm install range-of-numbers
```
### Usage
```js
const { range, rangePromise } = require('range-of-numbers')

rangePromise(0, 10000000).then(list => list.length).then(console.log) // 100000001
range(-5, 5, 2)     // [-5,-3,-1,1,3,5]
range(10, 18, 3)    // [10,13,16]
range(5)            // [0,1,2,3,4,5]
range(10, 100, 10)  // [10,20,30,40,50,60,70,80,90,100]
```
## License
MIT, see [LICENSE.md](http://github.com/endziu/range-of-numbers/blob/master/LICENSE.md) for details.
