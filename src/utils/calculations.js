export function calculateFee(amount, service) {
  const feeAmount = (amount * service.feePercentage / 100) + service.flatFee
  return parseFloat(feeAmount.toFixed(2))
}

export function calculateRecipientAmount(amount, service) {
  const fee = calculateFee(amount, service)
  const received = amount - fee
  return parseFloat(received.toFixed(2))
}

export function sortServicesByValue(services, amount) {
  return Object.values(services)
    .map(service => ({
      ...service,
      recipientReceives: calculateRecipientAmount(amount, service),
      fee: calculateFee(amount, service)
    }))
    .sort((a, b) => b.recipientReceives - a.recipientReceives)
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}
