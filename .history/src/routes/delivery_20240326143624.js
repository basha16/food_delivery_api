const express = require("express");
const { calculateDeliveryCost } = require("../controllers/delivery");

const router = express.Router();

router.post("/login", async (req, res) => {
  const user = req.body;
  try {
    const response = await calculateDeliveryCost(user);
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
