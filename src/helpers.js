export function formatPrice(amount) {
  // limit number to two decimal places and add commas for every 000
  return (isNaN(amount) ? 0 : amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

export function getValuation(selection, houses, size) {
  // calculate the valuation
  let valuation = 0;
  Object
    .keys(selection) // for each house in the selection, get its price and size
    .map(key => valuation += (houses[key].price / houses[key].floor_area));
  // divide by the number of houses in the selection
  return (valuation * size) / Object.keys(selection).length;
}
