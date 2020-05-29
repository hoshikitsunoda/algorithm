function duplicateEncode(word: string) {
  let counts: {
    [key: string]: number
  } = {}
  let result: string[] = []
  const textArray = word.toLowerCase().split('')
  textArray.forEach((item: string) => {
    counts[item] = (counts[item] || 0) + 1
  })
  textArray.map((item: string) => {
    if (counts[item] >= 2) {
      result.push(')')
    } else {
      result.push('(')
    }
  })
  return result.join('')

  // Clever Solution:
  // return word
  //   .toLowerCase()
  //   .split('')
  //   .map((a, i, w) => {
  //     return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  //   })
  //   .join('')
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede')) //"()()()"
