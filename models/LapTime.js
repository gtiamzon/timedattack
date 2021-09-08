const mongoose = require("mongoose");

const lapTimeSchema = new mongoose.Schema({
  //TODO
  username: {
    type: mongoose.Types.ObjectId,
		ref: "User",
  },
  car: {
    type: mongoose.Types.ObjectId,
		ref: "Car",
  },
  track: {
    type: mongoose.Types.ObjectId,
		ref: "Track",
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