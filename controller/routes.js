var express = require("express");
var path = require("path");
const Workout = require("../models/workout.js");
//const mongojs = require("mongojs");

var router = express.Router();

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;
