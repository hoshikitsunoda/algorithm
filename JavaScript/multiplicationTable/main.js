function multiplicationTable(row, col) {
  const result = []
  for(let i = 0; i < row; i++) {
    result.push([])
    for(let j = 0; j < col; j++) {
      result[i].push((j + 1) * (i + 1))
    }
  }
  return result
}

console.log(multiplicationTable(3,3));
