const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const port = 3000;
const _ = require("lodash");

const UserRoutes = require("./routes/UserRoutes");
const BlogRoutes = require("./routes/BlogRoutes");
const DashboardRoutes = require("./routes/DashboardRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authorizationCheck = require("./middleware/auth");
const roleguard = require("./middleware/admin");
require("dotenv").config();
app.use(bodyParser.json());
app.use(morgan("dev"));

mongoose
  .connect("mongodb://127.0.0.1:27017/Grass_project_v1")
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error));

const users = [
  { id: 1, name: "tinu1", email: "tinu@gmail.com", age: 12 },
  { id: 2, name: "tinu2", email: "tinu2@gmail.com", age: 22 },
  { id: 3, name: "tinu3", email: "tinu3@gmail.com", age: 13 },
];

app.use("/user", UserRoutes);
app.use("/blog", BlogRoutes);
app.use("/dashboard", authorizationCheck, DashboardRoutes);
app.use("/admin", authorizationCheck, roleguard, adminRoutes);
//roleguard is admin.js middleware to check if the user is an admin
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
