const mongoose = require("mongoose");

const lapTimeSchema = new mongoose.Schema({
  //TODO
  user: {
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
  seconds: {
    type: Number,
  },
  date: {
    type: Date,
  }
},
  {
    timestamps: true,
  });

const LapTime = mongoose.model("LapTime", lapTimeSchema);

module.exports = LapTime;