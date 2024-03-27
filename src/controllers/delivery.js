const { db } = require("../../database");
const { getPricingDetails } = require("../services/delivery");

async function calculateDeliveryCost(param) {
  const { total_distance } = param;
  const pricingDetails = await getPricingDetails(param);

  let total_price = parseInt(pricingDetails.fix_price);
  if (total_distance > pricingDetails.base_distance_in_km) {
    total_price +=
      (total_distance - pricingDetails.base_distance_in_km) *
      pricingDetails.km_price;
  }
  let convertToEuros = total_price;
  return convertToEuros;
}

module.exports = { calculateDeliveryCost };
