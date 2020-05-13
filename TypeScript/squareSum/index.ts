function squareSum(numbers: number[]): number {
  return numbers.reduce((a, b) => {
    return a + b * b
  }, 0)
}

console.log(squareSum([1, 2]))
console.log(squareSum([0, 3, 4, 5]))
