const numerology = (date: Date) => {
  const year = date.getUTCFullYear().toString().split('')
  const month = (date.getUTCMonth() + 1).toString().split('')
  const day = date.getUTCDate().toString().split('')
  const dateArray = [...year, ...month, ...day]

  const toSingleDigit = (data: string[] | number) => {
    const array = Array.isArray(data) ? data : data.toString().split('')
    return array.reduce((a, b) => +a + +b, 0)
  }

  const result = toSingleDigit(dateArray)
  return result >= 10 ? toSingleDigit(result) : result
}

console.log(numerology(new Date('10/13/1964')))
console.log(numerology(new Date('06/14/2010')))
