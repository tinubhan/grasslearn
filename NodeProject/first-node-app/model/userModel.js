const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String, // String is shorthand for {type: String}
    age: Number,
    email: { type: String },
    password: String,
    phone: Number,
    isAdmin: { type: Boolean, default: false },
  },
  { strict: false }
);

const userModel = mongoose.model("versionUser", UserSchema);

module.exports = userModel;
