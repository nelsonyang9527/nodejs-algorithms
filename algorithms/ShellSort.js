/**
 * 希爾排序
 *
 * 希爾排序法 (Shell Sort) 是插入排序法 (Insertion Sort) 的改良版，因為簡單、效率不錯，在實際應用上的接受度頗高
 * Shell Sort 提出的概念是──將整個陣列依照預先指定的間隔長度 d，交錯分割成數個小陣列，並以插入排序的方式將這些小陣列個別排序，然後逐漸縮小間隔長度 d ，直到 d 等於 1。
 * 此時再作最後一次插入排序。
 */

module.exports = {
  go
}

function go (arr) {
  var len = arr.length
  var temp
  var gap = 1
  while (gap < len / 3) { // 動態定義間隔序列
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i]
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}
