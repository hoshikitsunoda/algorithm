const spinalCase = (string) => {
  const regex = /\s+|_+/g
  string = string.replace(/([a-z])([A-Z])/g, '$1 $2')
  const newString = string.split(regex).join('-')
  return newString.toLowerCase()
}

module.exports = spinalCase
