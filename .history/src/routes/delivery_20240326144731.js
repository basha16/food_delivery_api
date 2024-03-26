const express = require("express");
const { calculateDeliveryCost } = require("../controllers/delivery");

const router = express.Router();

router.post('/calculate/delivery/cost', async (req, res) => {
    try {
      const { zone, organization_id, total_distance, item_type } = req.body;

      const response = calculateDeliveryCost()
  
      // Fetch pricing details from the database
      const query = `
        SELECT base_distance_in_km, km_price, fix_price 
        FROM Pricing 
        WHERE organization_id = $1 
        AND zone = $2 
        AND item_id = (
          SELECT id FROM Item WHERE type = $3
        )
      `;
      const { rows } = await pool.query(query, [organization_id, zone, item_type]);
  
      // Calculate total cost
      let total_price = rows[0].fix_price;
      if (total_distance > rows[0].base_distance_in_km) {
        total_price += (total_distance - rows[0].base_distance_in_km) * rows[0].km_price * 100; // Convert to cents
      }
  
      // Return the response
      res.json({ total_price: (total_price / 100).toFixed(2) }); // Convert back to euros
    } catch (error) {
      console.error('Error calculating delivery cost:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
