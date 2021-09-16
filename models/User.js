const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    max:20,
  },
  lastName:{
    type: String,
    required: true,
    max:20,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  password: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    unique: true,
    required: true
  },
},
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;