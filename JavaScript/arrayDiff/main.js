function arrayDiff(array1, array2) {
  const result = []
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[0]) {
      result.push(array1[i])
    }
  }
  return result
}

function arrayDiff2(array1, array2) {
  return array1.filter(item => array2.indexOf(item) == -1)
}

console.log(arrayDiff([1,2,2,2,3],[2]));
console.log(arrayDiff2([1,2],[1]));
