var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("You've Reached The Home Page!");
});

app.listen(3000, function () {
  console.log("Server running on 3000!");
});
