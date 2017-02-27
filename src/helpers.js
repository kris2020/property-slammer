export function formatPrice(amount) {
  var price = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${price}`;
}
