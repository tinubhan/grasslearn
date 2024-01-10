const express = require("express");
const {
  getAllBlogs,
  addABlog,
  getBlogById,
} = require("../controller/blogController");
const router = express.Router();

router.get("/", getAllBlogs);
router.post("/addblog", addABlog);
router.get("/blogbyid", getBlogById);

module.exports = router;
