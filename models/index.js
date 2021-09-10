require("../config/db.connection");
const mongoose = require("mongoose") 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/timedattack') 

module.exports = {
  User: require("./User"),
  Car: require("./Car"),
  Track: require("./Track"),
  LapTime: require("./LapTime"),
};