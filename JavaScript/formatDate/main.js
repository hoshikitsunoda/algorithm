function formatDate(userDate){
  const split = userDate.split('/')
  let month = split[0]
  let day = split[1]
  const year = split[2]
  if(month.length == 1) month = 0 + month
  if(day.length == 1) day = 0 + day
  return year + month + day
}

console.log(formatDate("12/31/2014"))
console.log(formatDate("2/1/2014"))
