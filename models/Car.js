const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  tire: {
    type: String,
  },
  modifications: {
    type: [String]
  },
  image: {
    type: String,
  }
},
  {
    timestamps: true,
  });

const Car = mongoose.model("Car", carSchema);

module.exports = Car;