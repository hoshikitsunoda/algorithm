const absentVowel = string => {
  let index = 0
  const split = string.split('')
  if (split.indexOf('a') === -1) {
    index = 0
  } else if (split.indexOf('e') === -1) {
    index = 1
  } else if (split.indexOf('i') === -1) {
    index = 2
  } else if (split.indexOf('o') === -1) {
    index = 3
  } else if (split.indexOf('u') === -1) {
    index = 4
  }

  return index
}

module.exports = absentVowel
