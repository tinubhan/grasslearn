const express = require("express");
const userModel = require("../model/userModel");
const router = express.Router();

router.get("/", async (req, res) => {
  //res.send("Hey this is your dashboard");
  let id = req.userId;
  let loggedInUserData = await userModel.findById(id);
  res.send(loggedInUserData);
});

module.exports = router;
