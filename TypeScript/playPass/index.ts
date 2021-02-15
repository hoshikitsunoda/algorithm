const playPass = (phrase: string, shift: number) => {
  const split = phrase.split(' ')
  const shiftedPhrase = split
    .map((item) => {
      const shiftedArray = [...item].map((char) => {
        const position = ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        const word = char.match(/[a-z]/i)
          ? String.fromCharCode(position)
          : char.match(/[0-9]/i)
          ? 9 - +char
          : char
        return word
      })
      return shiftedArray.join('')
    })
    .join(' ')

  const result = shiftedPhrase
    .split('')
    .map((char, i) => {
      return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    })
    .reverse()
    .join('')

  return result
}

console.log(playPass('I LOVE YOU!!!', 1))
console.log(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2))
