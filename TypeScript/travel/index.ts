interface Address {
  streetNumber: string
  streetAddress: string
  stateAndZip: string
}

const r: string =
  '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432'

const travel = (addresses: string, zipcode: string) => {
  if (zipcode.length !== 8) return `${zipcode}:/`
  const fullAddressArray = addresses.split(',')
  const addressList: Address[] = fullAddressArray.map((address) => {
    const fullAddress = address.split(' ')
    const streetNumber = fullAddress[0]
    const streetAddress = fullAddress.slice(1, -2).join(' ')
    const stateAndZip = fullAddress.slice(-2).join(' ')
    return {
      streetNumber,
      streetAddress,
      stateAndZip,
    }
  })
  let matched: Address[] = []

  let streetNumbers: string[] = []
  let streetAddresses: string[] = []
  for (let i of addressList) {
    if (i['stateAndZip'] === zipcode) matched.push(i)
  }
  matched.map((address) => {
    streetNumbers.push(address.streetNumber)
    streetAddresses.push(address.streetAddress)
  })
  return `${zipcode}:${streetAddresses.join(',')}/${streetNumbers.join(',')}`
}

console.log(travel(r, 'OH 43071'))
