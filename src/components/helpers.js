export function findDiscount (oldPrice, newPrice) {
  const saved = oldPrice - newPrice
  const savedPercent = parseInt(saved / oldPrice * 100)
  return {
    saved,
    savedPercent
  }
}