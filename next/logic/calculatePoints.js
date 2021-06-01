// Returns 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

// TODO: Can there be partial points or should the total be rounded down?
export default (transactionTotal) => {
  const ONE_POINT_THRESHOLD = 50
  const TWO_POINT_THRESHOLD = 100

  let points = 0

  // Points above 100 x2
  const twoX = transactionTotal - TWO_POINT_THRESHOLD
  if (twoX > 0) points = twoX * 2

  // Points above 50 and below 100 1x
  const oneX = transactionTotal - ONE_POINT_THRESHOLD
  if (oneX > 0) points += oneX > ONE_POINT_THRESHOLD ? ONE_POINT_THRESHOLD : oneX

  return points
}
