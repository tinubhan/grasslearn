const { Schema } = require("mongoose");
const { BlogsModel } = require("../model/blogsModel");
const userModel = require("../model/userModel");

const getAllBlogs = async (req, res) => {
  try {
    // let blogdata = await BlogsModel.find().populate("userId");
    let blogdata = await BlogsModel.find();
    let newData = await Promise.all(
      blogdata.map(async (eachobj) => {
        let data = await userModel.findById(eachobj.userId);

        return { ...eachobj.toObject(), userData: data };
      })
    );
    res.send(newData);
  } catch (error) {
    res.send(error);
  }
};

const addABlog = async (req, res) => {
  let blogBody = req.body;
  let datablog = new BlogsModel({
    title: blogBody.title,
    description: blogBody.description,
    userId: blogBody.userId,
  });
  await datablog.save();
  res.send(datablog);
};

const getBlogById = async (req, res) => {
  try {
    let blogAllData = await BlogsModel.find();
    let data = awai;
    console.log(blogAllData);
    res.send(blogAllData);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { getAllBlogs, addABlog, getBlogById };
