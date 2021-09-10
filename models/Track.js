const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String 
  },
  icon: {
    type: String
  },
  image: {
    type: String
  },
  length: {
    //TODO
    type: Number
  }
},
  {
    timestamps: true,
  });

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;