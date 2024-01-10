const userModel = require("../model/userModel");

const roleguard = async (req, res, next) => {
  let userId = req.userId;
  let userData = await userModel.findById(userId);
  if (userData.isAdmin) {
    next();
  }
  //console.log(userData);
  else {
    res.send("User is not admin");
  }
};

module.exports = roleguard;
