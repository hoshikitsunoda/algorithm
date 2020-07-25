const stockPrices = (array: number[]): number => {
  const highest: number = Math.max(...array)
  const lowest: number = Math.min(...array)
  let result: number = 0

  if (array.indexOf(highest) < array.indexOf(lowest)) {
    result = 0
  } else {
    result = highest - lowest
  }

  return result
}

console.log(stockPrices([1, 5, 8, 2]))
console.log(stockPrices([3, 2, 1]))
