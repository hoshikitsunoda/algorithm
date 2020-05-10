function isSquare(number) {
  if (Math.sqrt(number) % 1 === 0) {
    return true
  }
  else {
    return false
  }
}

console.log(isSquare(25));
