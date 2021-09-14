const express = require("express");
const router = express.Router();

const { Track, User, Car } = require("../models");

// laptime create show page
router.get('/new', async (req, res, next) => {
  try {
    const foundCars = await Car.find({username: req.session.currentUser.id});
    const allTracks = await Track.find({});
    const context = {
      cars: foundCars,
      tracks: allTracks
    };
    return res.render('new_lap', context);
  } catch(console) {
    console.log(error);
    req.error = error;
    return next();
  }
});

//LAPTIME FUNCTIONAL create
// router.post('/new', (req, res) => {
//   try {

//   } catch (error) {
//     const context = {error},
//     return res.render('/laptime/new', context)
//   }
// });

module.exports = router;