// isTriangle takes 3 integers, returns true if two are the same number,
// and rest is shorter than those two.

function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((one, two) => one - two)
  return a + b > c
}

console.log(isTriangle(1, 2, 2));
