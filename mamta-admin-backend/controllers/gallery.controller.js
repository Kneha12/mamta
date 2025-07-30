// gallery.controller.js
exports.uploadGalleryItem = (req, res) => {
  res.send("Upload gallery photo or video");
};

exports.getGallery = (req, res) => {
  res.send("Get all gallery items");
};

exports.deleteGalleryItem = (req, res) => {
  res.send("Delete gallery item");
};
