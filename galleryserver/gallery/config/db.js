const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mydb";

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Yipee!! db connected!");
});
