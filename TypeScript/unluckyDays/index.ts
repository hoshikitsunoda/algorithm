function unluckyDays(year: number): number {
  let dayCount: number = 0
  const daysInWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  for (let i = 0; i <= 11; i++) {
    const numOfDays: number = new Date(year, i, 0).getDate()
    for (let j = 1; j <= numOfDays; j++) {
      const day: number = new Date(year, i, j).getDay()
      if (j === 13 && daysInWeek[day] === 'Friday') {
        dayCount++
      }
    }
  }
  return dayCount
}

console.log(unluckyDays(2015))
console.log(unluckyDays(2016))
console.log(unluckyDays(2017))
