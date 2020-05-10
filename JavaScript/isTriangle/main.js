function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((one, two) => one - two)
  return a + b > c
}

console.log(isTriangle(1, 2, 2));
