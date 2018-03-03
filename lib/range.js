/**
 *
 * A function to produce an Array of integer values from 's' to 'e' inclusive.
 * With optional step amount.
 *
 * @sig (n,n,n) -> [n]
 * @param {Number} : [s] start index
 * @param {Number} : [e] end index
 * @param {Number} : [st] step amount
 * @return {Array} A new array with Integer values
 * @example
 *   range(-2,7)    //=> [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 *   range(-5,5, 2) //=> [-5, -3, -1, 1, 3, 5]
 *   range(10,5)    //=> [10, 9, 8, 7, 6, 5]
 *   range(10,0,4)  //=> [10, 6, 2]
 *   range(0,10000000).length //=> 10000001
 *
 */

export default (s, e, st = 1) => {
  let oneArg = false
  if (typeof s !== 'number' || typeof st !== 'number') {
    return Error("All inputs must be of type 'number'")
  } else if (typeof e !== 'number') {
    oneArg = true
  }

  if (st < 1) return Error('Step must be a positive integer')

  const start = parseInt(s)
  const end = parseInt(e)
  const step = parseInt(st)

  const fillArr = function(s, e) {
    let result = Array(Math.floor((e - s) / step) + 1)
    for (let i = s; i <= e; i += step) {
      const idx = Math.floor((i - s) / step)
      result[idx] = i
    }
    return result
  }

  const fillArrRev = function(s, e) {
    let result = Array(Math.floor((s - e) / step) + 1)
    for (let i = s, num = 0; i >= e; i -= step) {
      result[num++] = i
    }
    return result
  }

  if (start < end) {
    return fillArr(start, end)
  } else if (start > end) {
    return fillArrRev(start, end)
  } else if (oneArg) {
    return fillArr(0, start)
  } else {
    return [start]
  }
}
