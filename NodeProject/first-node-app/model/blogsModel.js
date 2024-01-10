const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogsSchema = new Schema(
  {
    title: { type: String }, // String is shorthand for {type: String}
    description: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "versionUser" },
  },
  { timestamps: true }
);

const BlogsModel = mongoose.model("Blog", BlogsSchema);

module.exports = { BlogsModel };
