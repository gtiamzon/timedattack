const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
  },
  lastName:{
    type: String,
  },
  userName:{
    type: String,
  },
  password:{
    type: String,
  },
},
  {
    timstamps: true,
  });

const User = mongoose.model("User", userSchema);

module.exports = User;