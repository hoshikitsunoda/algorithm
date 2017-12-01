// descendingOrder takes number and returns
// the number in descending order.
// Split the number then sort in descending order.

function descendingOrder(number) {
  return parseInt(number
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join(''))
}

console.log(descendingOrder(123456789));
