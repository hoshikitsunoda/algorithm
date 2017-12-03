// countCharacters takes string, count the character
// and returns a object with character as key and count as value.

function countCharacters(string) {
  if(!string) return {}
  const count = {}
  string.split('').forEach(letter => {
    count[letter] ? count[letter]++ : count[letter] = 1
  })
  return count
}

function countCharacters2(string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}

console.log(countCharacters('aba'));
console.log(countCharacters(''));
