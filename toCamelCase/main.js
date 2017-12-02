function toCamelCase(string) {
  if(!string) return ''
  const split = string.split(/[ \-_]+/)
  if(split[0][0] === split[0][0].toUpperCase()){
    return split.map(word => {
      return word[0].toUpperCase() + word.substring(1, word.length)
    }).join('')
  }
  else {
    const capitalized = split.map(word => {
      return word[0].toUpperCase() + word.substring(1, word.length)
    }).join('')
    return capitalized[0].toLowerCase() + capitalized.substring(1, capitalized.length)
  }
}

function toCamelCase2(string) {
  return string.replace(/[-_](.)/g, (match) => match.charAt(1).toUpperCase())
}

console.log(toCamelCase("the_stealth_warrior"));
