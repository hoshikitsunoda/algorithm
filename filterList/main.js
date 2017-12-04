// filterList takes an array, filter out the strings
// returns the new array with only the non-negative integers.

function filterList(array) {
  const result = []
  array.forEach(item => {
    if(typeof item != 'string') {
      result.push(item)
    }
  })
  return result
}

function filterList2(array) {
  return array.filter(item => typeof item != 'string')
}

console.log(filterList([1,2,'a','b']));
