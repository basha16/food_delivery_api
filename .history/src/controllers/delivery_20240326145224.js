const { db } = require("../../database");
const { getPricingDetails } = require("../services/delivery");

async function calculateDeliveryCost() {
   const pricingDetails = getPricingDetails()

   let total_price = pricingDetails.fix_price;
   if (total_distance > pricingDetails.base_distance_in_km) {
     total_price += (total_distance - pricingDetails.base_distance_in_km) * pricingDetails.km_price * 100; // Convert to cents
   }
   let convertToEuros = total_price * 100
   return convertToEuros
}

module.exports = { calculateDeliveryCost};