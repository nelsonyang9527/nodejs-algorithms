/**
 * 雞尾酒排序 (搖晃排序法)
 */

module.exports = {
  cocktailSort, cocktailSortDesc
}

/**
 * 雞尾酒排序法(遞增)。
 */
function cocktailSort (array) {
  const length = array.length
  const lengthDec = length - 1

  for (let i = lengthDec; i > 0; --i) {
    let sorted = true

    const s = lengthDec - i

    for (let j = s; j < i; ++j) {
      const jj = j + 1

      if (array[j] > array[jj]) {
        const temp = array[j]
        array[j] = array[jj]
        array[jj] = temp

        sorted = false
      }
    }

    if (sorted) {
      break
    }

    sorted = true

    for (let j = i - 2; j >= s; --j) {
      const jj = j + 1

      if (array[j] > array[jj]) {
        const temp = array[j]
        array[j] = array[jj]
        array[jj] = temp

        sorted = false
      }
    }

    if (sorted) {
      break
    }
  }

  return array
}

/**
* 雞尾酒排序法(遞減)。
*/
function cocktailSortDesc (array) {
  const length = array.length
  const lengthDec = length - 1

  for (let i = lengthDec; i > 0; --i) {
    let sorted = true

    const s = lengthDec - i

    for (let j = s; j < i; ++j) {
      const jj = j + 1

      if (array[j] < array[jj]) {
        const temp = array[j]
        array[j] = array[jj]
        array[jj] = temp

        sorted = false
      }
    }

    if (sorted) {
      break
    }

    sorted = true

    for (let j = i - 2; j >= s; --j) {
      const jj = j + 1

      if (array[j] < array[jj]) {
        const temp = array[j]
        array[j] = array[jj]
        array[jj] = temp

        sorted = false
      }
    }

    if (sorted) {
      break
    }
  }

  return array
}
