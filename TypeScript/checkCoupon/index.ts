function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  )
}
