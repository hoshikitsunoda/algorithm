function songDecoder(string) {
  return string.split('WUB').filter(space => space != '').join(' ')
}

console.log(songDecoder("AWUBBWUBC"));
console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));
