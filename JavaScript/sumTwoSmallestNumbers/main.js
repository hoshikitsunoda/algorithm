// sumTwoSmallestNumbers takes an array, returns
// two smallest numbers added.

function sumTwoSmallestNumbers(numbers) {
  const result = numbers.sort((x, y) => {
    return x - y
  })
  return result[0] + result[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
