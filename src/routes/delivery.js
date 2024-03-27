const express = require("express");
const { calculateDeliveryCost } = require("../controllers/delivery");

const router = express.Router();

router.post("/cost/calculate", async (req, res) => {
  try {
    const total_price = await calculateDeliveryCost(req.body);
    res.json({ total_price });
  } catch (error) {
    console.error("Error calculating delivery cost:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
