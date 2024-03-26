const express = require("express");
const { calculateDeliveryCost } = require("../controllers/delivery");

const router = express.Router();

router.post('/calculate/delivery/cost', async (req, res) => {
    try {
      const { zone, organization_id, total_distance, item_type } = req.body;

      const total_price = calculateDeliveryCost()
  
      
      res.json({ total_price: (total_price / 100).toFixed(2) }); // Convert back to euros
    } catch (error) {
      console.error('Error calculating delivery cost:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
