const { db } = require("../../database");
const { getPricingDetails } = require("../services/delivery");

async function calculateDeliveryCost() {
   const pricingDetails = getPricingDetails()
}

module.exports = { calculateDeliveryCost};