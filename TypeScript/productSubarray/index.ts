// Problem:
// Given an array of integers, find the product of each subarray except itself.

// Examples:
// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// Explanation:
// index 0: 2 * 3 * 4 = 24
// index 1: 1 * 3 * 4 = 12
// index 2: 1 * 2 * 4 = 8
// index 3: 1 * 2 * 3 = 6

const productSubarray = (array: number[]): number[] => {
  let result: number[] = []

  for (let i = 0; i < array.length; i++) {
    const removeTarget: number = array.indexOf(array[i])
    const tempArray: number[] = [
      ...array.slice(0, removeTarget),
      ...array.slice(removeTarget + 1),
    ]
    result.push(tempArray.reduce((a, b) => a * b))
  }
  return result
}

console.log(productSubarray([1, 2, 3, 4]))
console.log(productSubarray([5, 8, 4, 3]))
