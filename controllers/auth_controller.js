const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

//register presentational
router.get("/register", (req, res) => {
  const context = {error: null}
  return res.render("auth/register", context);
});

//register functional 
router.post("/register", async (req,res) => {
  try{
    const foundUser = await User.exists({$or:[{username: req.body.username}, {email: req.body.email}]});
 
    if(foundUser) {
      throw new Error ("Username or Email already exists.")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;

    const newUser = await User.create(req.body);

    return res.redirect("/login")
  } catch (error) {
    console.log(error); 
    const context = { error }
    return res.render('auth/register', context );
  }
});

//login presentational 
router.get("/login", (req, res) => {
  const context = {error: null}
  return res.render("auth/login", context);
});

//login functional
router.post("/login", async (req,res) => {
  try{
    const foundUser = await User.findOne({email: req.body.email});
    if(!foundUser) {
      throw new Error ("Email or Password is incorrect. Sign up if you dont have an account.")
    }
    
    const match = await bcrypt.compare(req.body.password, foundUser.password);

    if(!match) {
      throw new Error ("Email or Password is incorrect. Sign up if you dont have an account.")
    };

    req.session.currentUser = {
      id: foundUser._id,
      email: foundUser.email,
    };

    return res.redirect("/home")
  } catch (error) {
    console.log(error); 
    const context = { error }
    return res.render('auth/login', context );
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