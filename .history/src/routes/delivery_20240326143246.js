const express = require("express");

const router = express.Router();

router.post("/login", async (req, res) => {
  const user = req.body;
  try {
    const response = await login(user);
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
