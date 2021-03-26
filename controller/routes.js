var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });