const express = require("express");
const router = express.Router();

const { Car, User, LapTime } = require("../models");
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
    req.body.username = req.session.currentUser.id
    const createdCar = await Car.create(req.body);
    console.log("Made a Car", createdCar);
    return res.redirect(`/profile/${req.session.currentUser.id}`);
  } catch (error) {
    const context = {
      error,
    }
    return res.render(`/profile/${req.session.currentUser.id}`, context)
  }
});

// edit route presentational
router.get('/car/edit/:id', (req, res, next) => {
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
router.put("/car/edit/:id", (req, res, next) => {
  Car.findByIdAndUpdate(
    req.params.id, {$set: req.body}, { new: true}, (error, updatedCar) => {
      if(error) {
        console.log(error);
        req.error = error;
        return next();
      }
      return res.redirect(`/profile/${updatedCar.username}`)
    }
  );
});

// delete route 
router.delete('/car/:id', async (req, res, next) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    return res.redirect(`/profile/${deletedCar.username}`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// NOTE CAR SHOW ROUTES

router.get('/car/:id', async (req, res, next) => {
  try {
    const foundCar= await Car.findById(req.params.id).populate("username");
    const allLapTimes = await LapTime.find({car: req.params.id}).populate("track");
    let foundLapTimes = allLapTimes
    let convertedTime= []
    foundLapTimes.forEach((lapTime, index) => {
      let seconds= lapTime.seconds
      let minutes= Math.floor(seconds /60);
      let remSecond= {}
      if(seconds %60 < 10) {
        remSecond = `0${seconds %60}`
      } else {
        remSecond = seconds %60
      };
      lapTime.convertedTime= (`${minutes}:${remSecond}`)
      console.log(convertedTime)
    })
      const context = {
        car: foundCar,
        lapTimes: allLapTimes,
      };
      return res.render("car_show", context);
    } catch (error) {
      console.log(error);
      req.error = error;
      return next();
  };
});


//NOTE USER ROUTES

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

// DELETE ACCOUNT
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    const deletedCar = await Car.deleteMany({username: req.params.id});
    const deletedLapTime = await LapTime.deleteMany({user: req.params.id})
    await req.session.destroy();
    return res.redirect(`/`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;