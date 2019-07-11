const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = {
  src: { type: String, required: true },
  description: { type: String, required: true }
};
const GalleryScheme = new Schema(data);

module.exports = mongoose.model("Gallery", GalleryScheme);
