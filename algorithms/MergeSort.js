/**
 * 合併排序
 *
 * 輸入兩個已排序的陣列，函式執行完後返回一個包含所有元素且已排序的陣列
 */

module.exports = {
  go
}

function go (arr1, arr2) {
  const result = []
  let i = 0
  let j = 0
  // 兩陣列元素做比較
  while (i < arr1.length && j < arr2.length) {
    if (arr2[i] < arr1[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  // 將多出來的元素插入陣列
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}
