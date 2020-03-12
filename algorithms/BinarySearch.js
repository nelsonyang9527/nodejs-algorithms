/**
 * 二分搜尋
 */

module.exports = {
  go
}

function go (array, value) {
  // 起始索引
  let left = 0
  // 結束索引
  let right = array.length - 1

  while (left <= right) {
    // 取得中間索引
    const middle = Math.floor((left + right) / 2)
    // 中間值比搜索值大
    if (array[middle] > value) {
      right = middle - 1
    } else if (array[middle] < value) { // 中間值比搜索值小
      left = middle + 1
    } else { // 找到元素返回索引
      return middle
    }
  }

  return -1
}
