const express = require("express");
const router = express.Router();

const { Car, User } = require("../models");
const { create } = require("../models/User");

// show
router.get('/:id', async(req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id);
    const allCars = await Car.find({});
    const context = {
      cars: allCars,
      user: foundUser
    };
    return res.render("profile", context);
  } catch(error) {
    console.log(error);
    req.error =error;
    return next()
  }
});

// create car presentational
router.get('/car/new', (req, res) => {
  const context= {};
  return res.render('new_car', context);
});

// create car functional
router.post('/car', async(req, res) => {
  try{
    const createdCar = await Car.create(req.body);
    console.log("Made a Car", createdCar);
    return res.redirect("/profile");
  } catch (error) {
    const context = {
      error,
    }
    return res.render('/profile', context)
  }
});

// edit route presentational
router.get('/car/:id', (req, res, next) => {
  Car.findById(req.params.id, (error, foundCar) => {
    if(error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      car: foundCar,
    };

    return res.render("edit_car", context);
  });
});

// edit route functional
router.put("/car/:id", (req, res, next) => {
  Car.findByIdAndUpdate(
    req.params.id, {$set: req.body}, { new: true}, (error, updatedCar) => {
      if(error) {
        console.log(error);
        req.error = error;
        return next();
      }
      return res.redirect('/profile')
    }
  );
});

// delete route 
router.delete('/car/:id', async (req, res, next) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    return res.redirect('/profile');
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

//edit route for USER presentational
router.get('/:id/edit', (req, res, next) => {
  User.findById(req.params.id, (error, foundUser) => {
    if(error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      user: foundUser,
    };

    return res.render("edit_user", context);
  });
});

//edit route user functional
router.put("/:id/edit", (req, res, next) =>{
  User.findByIdAndUpdate(
    req.params.id, {$set: req.body}, {new: true}, (error, updatedUser) => {
      if(error) {
        console.log(error);
        req.error = error;
        return next();
      }
      return res.redirect(`/profile/${updatedUser.id}`);
    }
  );
});


module.exports = router;