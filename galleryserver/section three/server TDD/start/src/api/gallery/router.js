const express = require("express");
const router = express.Router();
const gallery = require("./controller");

router.get("/api", gallery.images);

module.exports = router;
