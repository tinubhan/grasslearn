const jwt = require("jsonwebtoken");

const authorizationCheck = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      // console.log(decoded); // bar
      //console.log(err, "error in middleware");
      if (err) {
        res.send("Not authorized");
      }
      let userId = decoded.data._id;
      console.log(userId);
      req.userId = userId;
      next();
    });
  } catch {
    console.log("no token found");
  }

  //console.log(token);
};

module.exports = authorizationCheck;
