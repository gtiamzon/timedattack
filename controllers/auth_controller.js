const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

//register presentational
router.get("/register", (req, res) => {
  return res.render("auth/register");
});

//register functional 
router.post("/register", async (req,res) => {
  try{
    const foundUser = await User.exists({email: req.body.email});
    
    if(foundUser) {
      return res.redirect("/login");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    const newUser = await User.create(req.body);

    return res.redirect("/login")
  } catch (error) {
    console.log(error); 
    return res.send(error);
  }
});

//login presentational 
router.get("/login", (req, res) => {
  return res.render("auth/login");
});

//login functional
router.post("/login", async (req,res) => {
  try{
    const foundUser = await User.findOne({email: req.body.email});
    if(!foundUser) 
      return res.redirect("/register");
    
    const match = await bcrypt.compare(req.body.password, foundUser.password);

    if(!match) return res.send("password invalid");

    req.session.currentUser = {
      id: foundUser._id,
      email: foundUser.email,
    };

    return res.redirect("/home")
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});


//logout 
router.get("/logout", async (req, res) => {
  try {
    await req.session.destroy();
    return res.redirect("/")
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});













module.exports = router;