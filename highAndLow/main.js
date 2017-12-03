// highAndLow takes a string of numbers and returns
// highest and lowest number.
// Split the string, sort in ascending order,
// return them in array then join with space.

function highAndLow(string) {
  const sorted = string.split(' ').sort((a, b) => b - a)
  return [sorted[0], sorted[sorted.length -1]].join(' ')
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
