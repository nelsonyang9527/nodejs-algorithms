/**
 * 選擇排序
 *
 * 在資料結構中找到最小值放到第一位，接著找第二小值放到第二位，以此類推
 */

module.exports = {
  go
}

function go (array) {
  // 依照Array長度決定疊代次數
  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) { // 下一項比當前小時,覆蓋索引
        lowest = j
      }
    }
    // 避免已排序時重複執行交換程式碼
    if (i !== lowest) {
      const temp = array[i]
      array[i] = array[lowest] // 找到最小元素後,做交換
      array[lowest] = temp
    }
  }
  return array
}
