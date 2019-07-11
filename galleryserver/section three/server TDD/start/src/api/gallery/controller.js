const all_gallery = require("./model");

exports.images = async function(req, res) {
  const projection = { _id: 0, __v: 0 };
  const all_images = await all_gallery.find({}, projection);
  res.json(all_images);
};
