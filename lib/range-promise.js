/**
 *
 * A function to produce an Array of integer values from 's' to 'e' inclusive.
 * With optional step amount. Implemented using a Promise
 *
 * @sig (n,n,n) -> [n]
 * @param {Number} : [s] start index
 * @param {Number} : [e] end index
 * @param {Number} : [st] step amount
 * @return A Promise of an {Array} with Integer values or {Error}
 * @example
 *   const lt100 = arr => arr.filter(el => el < 100)
 *   const gtNeg100 = arr => arr.filter(el => el > -100)
 *   const multOf7 = arr => arr.filter(el => el % 7 === 0)
 *   const evens = arr => arr.filter(el => el % 2 === 0)
 *   range(-80, 100, 3)
 *     .then(lt100)
 *     .then(gtNeg100)
 *     .then(evens)
 *     .then(multOf7)
 *     .then(console.log)  //=> [-56, -14, 28, 70]
 *     .catch(console.log)
 *
 */

const rangePromise = (start, end, step = 1) => {
  let _start = parseInt(start)
  let _end = parseInt(end)
  let _step = parseInt(step)

  const fillArr = function(s, e, st) {
    let result = Array(Math.floor((e - s) / st) + 1)
    for (let i = s; i <= e; i += st) {
      const idx = Math.floor((i - s) / st)
      result[idx] = i
    }
    return result
  }

  const fillArrRev = function(s, e, st) {
    let result = Array(Math.floor((s - e) / st) + 1)
    for (let i = s, num = 0; i >= e; i -= st) {
      result[num++] = i
    }
    return result
  }

  return new Promise((resolve, reject) => {
    try {
      if (_step < 1) {
        throw Error('Step must be a positive integer')
      }

      if (isNaN(_start)) {
        throw Error("All inputs must be of type 'number'")
      } else if (isNaN(_end)) {
        _end = _start
        _start = 0
      }
      //console.log('start/end', _start, _end)
      if (_start < _end) {
        resolve(fillArr(_start, _end, _step))
      } else if (_start > _end) {
        resolve(fillArrRev(_start, _end, _step))
      } else if (_start === _end) {
        resolve([_start])
      } else {
        throw Error('something bad.')
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = rangePromise
