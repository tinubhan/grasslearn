const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("in admin route");
});

module.exports = router;
