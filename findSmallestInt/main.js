function findSmallestInt(array) {
  return array.sort((x, y) => x - y)[0]
}

console.log(findSmallestInt([78,56,232,12,8]));
