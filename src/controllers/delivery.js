const { db } = require("../../database");
const { getPricingDetails } = require("../services/delivery");

async function calculateDeliveryCost(param) {
  const { total_distance } = param;
  const pricingDetails = await getPricingDetails(param);
  console.log(pricingDetails,'pricingDetails')

  let total_price = pricingDetails.fix_price;
  if (total_distance > pricingDetails.base_distance_in_km) {
    total_price +=
      (total_distance - pricingDetails.base_distance_in_km) *
      pricingDetails.km_price *
      100;
  }
  let convertToEuros = (total_price * 100).toFixed(2);
  console.log(total_price,'total_price')
  return convertToEuros;
}

module.exports = { calculateDeliveryCost };
