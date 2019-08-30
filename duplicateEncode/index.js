const duplicateEncode = string => {
  return string
    .toLowerCase()
    .split('')
    .map((value, index, array) =>
      array.indexOf(value) == array.lastIndexOf(value) ? '(' : ')'
    )
    .join('')
}

module.exports = duplicateEncode
