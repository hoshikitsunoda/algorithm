function duplicateCount(text: string): number {
  let counts: {
    [key: string]: number
  } = {}
  let result: string[] = []
  const textArray = text.toLowerCase().split('')
  textArray.forEach((item: string) => {
    counts[item] = (counts[item] || 0) + 1
  })
  for (const property in counts) {
    if (counts[property] >= 2) {
      result.push(property)
    }
  }
  return result.length
}

console.log(duplicateCount('aabbcde'))
