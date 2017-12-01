function descendingOrder(number) {
  return parseInt(number
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join(''))
}

console.log(descendingOrder(123456789));
