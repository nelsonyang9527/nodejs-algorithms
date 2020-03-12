/**
 * 基數排序
 */

module.exports = {
  go
}

function go (arr, maxDigit) {
  var counter = []
  var mod = 10
  var dev = 1
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev)
      if (counter[bucket] == null) {
        counter[bucket] = []
      }
      counter[bucket].push(arr[j])
    }
    var pos = 0
    for (var k = 0; k < counter.length; k++) {
      var value = null
      if (counter[k] != null) {
        while ((value = counter[k].shift()) != null) {
          arr[pos++] = value
        }
      }
    }
  }
  return arr
}
