// songDecoder takes a string, removes WUB from the string,
// then returns the remainder.

function songDecoder(string) {
  return string.split('WUB').filter(space => space != '').join(' ')
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
