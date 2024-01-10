const express = require("express");
const {
  getAllUsers,
  getUserById,
  addAUser,
  updateAUser,
  deleteAUser,
  userLogin,
} = require("../controller/userController");
const router = express.Router();
const users = [
  { id: 1, name: "tinu1", email: "tinu@gmail.com", age: 12 },
  { id: 2, name: "tinu2", email: "tinu2@gmail.com", age: 22 },
  { id: 3, name: "tinu3", email: "tinu3@gmail.com", age: 13 },
];

///user
router.get("/", getAllUsers);

router.get("/:userId", getUserById);

router.post("/addUser", addAUser);

router.post("/login", userLogin);

router.put("/:userId", updateAUser);

router.delete("/:userId", deleteAUser);

module.exports = router;
