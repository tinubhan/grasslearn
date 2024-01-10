const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//const userModel = require("../model/userModel");
const users = [
  { id: 1, name: "tinu1", email: "tinu@gmail.com", age: 12 },
  { id: 2, name: "tinu2", email: "tinu2@gmail.com", age: 22 },
  { id: 3, name: "tinu3", email: "tinu3@gmail.com", age: 13 },
];

const getAllUsers = async (req, res) => {
  let userdata = await userModel.find();
  res.send(userdata);
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    //console.log(userId);
    let userData = await userModel.find({ _id: userId });
    //const userData = users.find((oneObj) => oneObj.id == userId);
    if (userData) {
      res.status(200).send(userData);
    } else {
      res.status(404).send("Please provide correct user Id");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const addAUser = async (req, res) => {
  try {
    const data1 = req.body;
    let isAdmin;
    if (data1.isAdmin) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }

    let saltRounds = 10;
    let hashpassword = await bcrypt.hash(
      data1.password,
      saltRounds
      // function (err, hash) {
      //   // Store hash in your password DB.
      //   if (err) {
      //     res.send("something wrong in add user controller");
      //     return;
      //   } else {
      //     console.log("Data1.password", data1.password);
      //     hashPassword = hash;
      //     console.log("hashpassowrd", hashpassword);
      //   }
      //}
    );
    console.log("HashP", hashpassword);

    let newUser = new userModel({
      name: data1.name,
      age: data1.age,
      email: data1.email,
      password: hashPassword,
      phone: data1.phone,
      isAdmin: isAdmin,
    });

    await newUser.save();
    // console.log(newUser);
    //   data1.id = users.length + 1;
    //   users.push(data1);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(404).send(error);
  }
};

const updateAUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;

    let updatedUser = await userModel.findByIdAndUpdate(userId, userData);
    //console.log(userId);
    //console.log(userData);
    //   const changeData = users.findIndex((oneObj) => oneObj.id == userId);
    //   console.log(users[changeData]);
    //   users[changeData.name] = userData;
    if (updatedUser) {
      res.status(200).send(updatedUser);
    } else {
      res.send("give proper id");
    }
  } catch (error) {
    res.send(error);
  }
};

const deleteAUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    let userDeleted = await userModel.findByIdAndDelete(userId);
    if (userDeleted) {
      res.send(userDeleted);
    }
  } catch (error) {
    res.send(error);
  }
  //   const changeData = users.findIndex((oneObj) => oneObj.id == userId);
  //   res.status(200).send(users[changeData]);
  //   users.splice(changeData, 1);
};

const userLogin = async (req, res) => {
  let userEntry = req.body;
  let userData = await userModel.find({ email: userEntry.email });
  if (userData.length > 0) {
    let databasePassword = userData[0].password;
    if (databasePassword == userEntry.password) {
      let token = jwt.sign(
        {
          data: {
            _id: userData[0]._id,
            name: userData[0].name,
            email: userData[0].email,
          },
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 60 * 60 }
      );

      res.send({ token });
    } else {
      res.send("invalid creds");
    }
  } else {
    res.send("User");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  addAUser,
  updateAUser,
  deleteAUser,
  userLogin,
};
