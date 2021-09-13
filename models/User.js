const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: [true, "Please provide a first name"],
  },
  lastName:{
    type: String,
    required: [true, "Please provide a last name"],
  },
  email:{
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  avatar: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  }
},
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;