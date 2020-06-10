type Reservation = unknown

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (destination: string): Reservation
}

let reserve: Reserve = (
  fromOrDest: Date | string,
  toOrDest?: Date | string,
  destination?: string
) => {
  if (
    fromOrDest instanceof Date &&
    toOrDest instanceof Date &&
    destination !== undefined
  ) {
    console.log(
      `reserved your full trip to ${destination} on ${fromOrDest} to ${toOrDest}`
    )
  } else if (fromOrDest instanceof Date && typeof toOrDest === 'string') {
    console.log(`reserved your trip to ${destination} on ${fromOrDest}`)
  } else if (typeof fromOrDest === 'string') {
    console.log(`reserved your trip to ${fromOrDest}`)
  }
}

reserve(new Date(2018, 11, 24), new Date(2018, 11, 30), 'japan')
reserve(new Date(2018, 11, 24), 'japan')
reserve('japan')
