/**
 * 線性搜尋
 */

module.exports = {
  go
}

function go (array, value) {
  for (let i = 0; i < array.length; i++) {
    // 尋找值相同
    if (array[i] === value) {
      return i
    }
  }
  return -1
}
