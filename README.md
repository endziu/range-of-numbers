# range-of-numbers
A little module to generate an Array of integer values from <**startIndex**> to <**endIndex**> inclusive. With optional non-negative <**step**> amount.
```js
// range: (n:Int, n:Int, n:Int > 0) -> [n]
range(start, end[, step = 1]) =>  array
```
### Install
```bash
npm install range-of-numbers
```
### Usage
```js
// require
const range = require('range-of-numbers')
// and use
range(0,10)   //=> [0,1,2,3,4,5,6,7,8,9,10]
range(-2,2)   //=> [-2,-1,0,1,2]
range(0,6,2)  //=> [0,2,4,6]
range(15,0,3) //=> [15,12,9,6,3,0]
```
## License
MIT, see [LICENSE.md](http://github.com/endziu/range-of-numbers/blob/master/LICENSE.md) for details.