const express = require("express");

const router = express.Router();

//fetch controller
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getUserBlog,
  getAllBlogs,
} = require("../controller/BlogHandler");

const { auth, isChecker } = require("../middleware/auth");

router.post("/createBlog", auth, createBlog);
router.post("/updateBlog", updateBlog);
router.post("/deleteBlog", auth, isChecker, deleteBlog);

router.post("/getUserBlog", auth, isChecker, getUserBlog);
router.get("/getAllBlogs", getAllBlogs);

module.exports = router;
