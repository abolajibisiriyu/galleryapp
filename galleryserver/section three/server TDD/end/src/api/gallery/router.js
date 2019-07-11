var express = require("express");
var router = express.Router();
var gallery = require("./controller");

router.get("/api", gallery.images);

module.exports = router;
