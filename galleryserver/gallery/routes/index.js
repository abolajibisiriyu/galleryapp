var express = require("express");
var router = express.Router();
var gallery = require("../controllers/gallery.controller");

/* GET home page. */
router.get("/", gallery.images);

module.exports = router;
