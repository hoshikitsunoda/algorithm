// Problem:
// Given 2 sorted arrays of integer, merge them into one array.

// Examples:
// Input:
// nums1 = [1, 3, 5]
// nums2 = [2, 4, 7]
// Output:
// [1, 2, 3, 4, 5, 7]

const mergeSortedArrays = (array1: number[], array2: number[]): number[] => {
  return array1.concat(array2).sort((a, b) => a - b)
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 7]))
