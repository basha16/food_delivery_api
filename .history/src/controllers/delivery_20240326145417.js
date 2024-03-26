const { db } = require("../../database");
const { getPricingDetails } = require("../services/delivery");

async function calculateDeliveryCost(param) {
    const { zone, organization_id, total_distance, item_type} = param
   const pricingDetails = await getPricingDetails(param)

   let total_price = pricingDetails.fix_price;
   if (total_distance > pricingDetails.base_distance_in_km) {
     total_price += (total_distance - pricingDetails.base_distance_in_km) * pricingDetails.km_price * 100; 
   }
   let convertToEuros = total_price * 100
   return convertToEuros
}

module.exports = { calculateDeliveryCost};