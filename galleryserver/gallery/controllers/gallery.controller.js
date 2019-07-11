const all_gallery = require("../models/gallery.model");

exports.images = async function(req, res) {
  const all_images = await all_gallery.find();
  res.json({ data: all_images });
};
