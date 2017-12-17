// swapHeadAndTail takes an array of numbers,
// the head (the first half) of array moves to the end,
// the tail (the second half) moves to the start.
// The middle element (if it exists) leaves on the same position.

function swapHeadAndTail(array) {
  return array.splice(0, 2)
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]));
