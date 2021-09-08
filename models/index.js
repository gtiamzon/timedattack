require("../config/db.connection");
const mongoose = require("mongoose") 

mongoose.connect(process.env.MONGODB_URI) //TODO

module.exports = {
  User: require("./Comment"),
  Car: require("./Car"),
  Track: require("./Track"),
  LapTime: require("./LapTime"),
};