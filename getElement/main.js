function getElement(array, index) {
  return index.reduce((accumulator, current) => {
    return accumulator[current]
  }, array)
}

console.log(getElement([[1, 2], [3, 4], [5, 6]], [0, 0]));
console.log(getElement([[[ 1, 2, 3]]], [ 0, 0, 1 ]));
