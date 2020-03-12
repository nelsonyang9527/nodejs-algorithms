/**
 * 插入排序
 *
 * 插入排序的原理為每次排一個陣列元素，每次決定位置後插入當下的元素，以此方式建構陣列。
 * 假設第一項元素已經排序了，那麼接下來第二項就會與第一項進行比較，若比第一項大就原地不動，
 * 若比第一項小則移到第一項的前面，以此類推
 */

module.exports = {
  go
}

function go (array) {
  // 依照array長度決定疊代次數
  for (let i = 1; i < array.length; i++) {
    const currentVal = array[i]
    let j = 0
    for (j = i - 1; j > -1; j--) {
      if (currentVal < array[j]) {
        array[j + 1] = array[j]
      } else break
    }
    array[j + 1] = currentVal
  }
  return array
}
