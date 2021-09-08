const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  city: {
    type: String
  },
  state: {
    type: String 
  },
  country: {
    type: String
  },
  length: {
    //TODO
    type: Number
  }
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;