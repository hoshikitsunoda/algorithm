// isSquare takes number, returns true if number is
// square, false if it isn't.
// Use Math.sqrt and if it can be devided by 1 true, else false.

function isSquare(number) {
  if (Math.sqrt(number) % 1 === 0) {
    return true
  }
  else {
    return false
  }
}

console.log(isSquare(25));
