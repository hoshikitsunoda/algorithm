function DNAStrand(string) {
  let result = ''
  const split = string.split('')
  for(let i = 0; i < split.length; i++) {
    switch(split[i]) {
      case 'A':
        result += 'T'
        break
      case 'T':
        result += 'A'
        break
      case 'G':
        result += 'C'
        break
      case 'C':
        result += 'G'
    }
  }
  return result
}

console.log(DNAStrand('AAAA'));
console.log(DNAStrand("ATTGC"));
