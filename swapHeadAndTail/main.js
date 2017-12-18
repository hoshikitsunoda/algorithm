// swapHeadAndTail takes an array of numbers,
// the head (the first half) of array moves to the end,
// the tail (the second half) moves to the start.
// The middle element (if it exists) leaves on the same position.

function swapHeadAndTail(array) {
  if (array.length == 1) return array
  var n = Math.floor(array.length / 2)
  return array.slice(-n).concat((n * 2 == array.length ? [] : array.slice(n, n + 1)), array.slice(0, n))
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]));
