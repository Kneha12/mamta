// blog.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/blog.controller");


router.post("/", controller.createBlog);
router.get("/", controller.getAllBlogs);
router.put("/:id", controller.updateBlog);
router.delete("/:id", controller.deleteBlog);

module.exports = router;
