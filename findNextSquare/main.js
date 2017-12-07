// findNextSquare takes number and returns next square.

function findNextSquare(number) {
  const original = Math.sqrt(number)
  return (number > 0 && Math.sqrt(number) % 1 === 0) ? Math.pow(original + 1, 2) : -1
}

console.log(findNextSquare(114));
console.log(findNextSquare(625));
