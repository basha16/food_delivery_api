const { db } = require("../../database");

async function getPricingDetails(param) {
  const { zone, organization_id, total_distance, item_type } = param;

  try {
    const query = `
        SELECT base_distance_in_km, km_price, fix_price 
        FROM Pricing 
        WHERE organization_id = $1 
        AND zone = $2 
        AND item_id = (
          SELECT id FROM Item WHERE type = $3
        )
      `;
    const { rows } = await db.query(query, [
      organization_id,
      zone,
      item_type,
    ]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getPricingDetails };
