const toFixed = (number, precision) => Number(number).toFixed(precision)

export const numberWithCommas = (number) => {
  const split = number.toString().split('.')
  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return split.join('.')
}

export const formatCurrency = (number, precision = 2, round = false) =>
  '$' +
  (!round
    ? numberWithCommas(toFixed(number, precision))
    : numberWithCommas(parseFloat(toFixed(number, precision))))
