const mongoose = require("mongoose");

const lapTimeSchema = new mongoose.Schema({
  //TODO
  username: {

  },
  car: {

  },
  track: {

  },
  time: {
    type: Number,
  },
  date: {
    type: Date,
  }
});

const LapTime = mongoose.model("LapTime", lapTimeSchema);

module.exports = LapTime;