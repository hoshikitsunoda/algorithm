// rot13 takes a string as argument,
// returns a string with all letters shifted by 13 places.
// This one is weird, had to see the solution.

function rot13(string) {
  return string
    .split('')
    .map.call(string, (letter) => {
      x = letter.charCodeAt(0)
      if(x < 65 || x > 90) {
        return String.fromCharCode(x)
      }
      else if(x < 78) {
        return String.fromCharCode(x + 13)
      }
      return String.fromCharCode(x - 13)
    }).join('')
}

console.log(rot13("SERR PBQR PNZC"));
