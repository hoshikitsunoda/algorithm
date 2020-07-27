function mostFrequentDays(year: number): string[] {
  let tempArray: any[] = []
  let result: string[] = []
  let highest: number = 0
  const dayCount: any = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  }
  const daysInWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  for (let i = 1; i <= 12; i++) {
    const numOfDays: number = new Date(year, i, 0).getDate()
    for (let j = 1; j <= numOfDays; j++) {
      let day: number | string = new Date(year, i - 1, j).getDay()

      day = daysInWeek[day]

      switch (day.toLowerCase()) {
        case 'monday':
          dayCount.monday++
          break
        case 'tuesday':
          dayCount.tuesday++
          break
        case 'wednesday':
          dayCount.wednesday++
          break
        case 'thursday':
          dayCount.thursday++
          break
        case 'friday':
          dayCount.friday++
          break
        case 'saturday':
          dayCount.saturday++
          break
        case 'sunday':
          dayCount.sunday++
          break
      }
    }
  }
  for (let key in dayCount) {
    tempArray.push([key, dayCount[key]])
    if (dayCount[key] > highest) {
      highest = dayCount[key]
    }
  }
  const days: string[][] = tempArray.filter((item) => item[1] >= highest)
  days.forEach((item) =>
    result.push(item[0].charAt(0).toUpperCase() + item[0].slice(1))
  )
  return result
}

console.log(mostFrequentDays(2860))
console.log(mostFrequentDays(1770))
