/**
 * 快速排序
 *
 * 輸入一個未排序陣列並指定一個索引（若沒指定則為 0），返回這個索引指向的元素，在排序過後真正的索引
 * 且以該元素為中心，左半邊的元素皆比該元素小，右邊的元素皆比該元素大
 */

module.exports = {
  go
}

function go (arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start]
  let swapIdx = start
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) { // pivot是否比當前陣列元素還大
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
  function swap (array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  }
}
