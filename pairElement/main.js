// pairElement takes a string as argument,
// take each character, find a pair("AT","CG") then return result as 2nd array.
// Create empty array variable, split the string,
// go thru each letter and find a pair then push to the array.

function pairElement(string) {
  const paired = []
  const splitString = string.split('')
  splitString.map(character => {
    if(character === 'A') {
      paired.push(['A', 'T'])
    }
    else if(character === 'T') {
      paired.push(['T', 'A'])
    }
    else if(character === 'G') {
      paired.push(['G', 'C'])
    }
    else {
      paired.push(['C', 'G'])
    }
  })
  return paired
}

function pairElement2(string) {
  const map = { T:'A', A:'T', G:'C', C:'G' }
  const splitString = string.split('')
  for(let i = 0; i < splitString.length; i++) {
    splitString[i] = [splitString[i], map[splitString[i]]]
  }
  return splitString
}

console.log(pairElement("GCG"))
console.log(pairElement("CTCTA"))
