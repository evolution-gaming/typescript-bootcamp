const swap = (i: number, j: number, array: number[]): void => {
  const t = array[i]
  array[i] = array[j]
  array[j] = t
}

export function* bubbleSort(sourceArray: number[]) {
  const array = [...sourceArray]

  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array)
        swapped = true
      }
      yield { array, index: j }
    }

    if (!swapped) {
      break
    }
  }

  return array
}