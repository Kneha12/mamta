// gallery.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/gallery.controller");

router.post("/", controller.uploadGalleryItem);
router.get("/", controller.getGallery);
router.delete("/:id", controller.deleteGalleryItem);

module.exports = router;
