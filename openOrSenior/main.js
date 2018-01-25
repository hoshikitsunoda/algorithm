// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data){
  const result = []
  data.forEach(member => {
    return member[0] >= 55 && member[1] > 7
      ? result.push('Senior')
      : result.push('Open')
  })
  return result
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
