/**
 * 冒泡排序法
 *
 * 對一個資料結構進行迭代，比較當前元素及後一個元素，若後面的元素小於當前的元素
 * 則兩元素進行交換。較大的元素會往資料結構後方移動，而較小的元素會往前方移動
 */

module.exports = {
  go
}

function go (array) {
  // 依照Array長度決定疊代次數
  for (let i = array.length - 1; i > 0; i--) {
    // 依序進行比較
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        // 交換參數位置
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
