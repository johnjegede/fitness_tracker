const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");

const PORT = process.env.PORT || 4000;

//const User = require("./seeders/seed.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness",
 { useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

  app.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });