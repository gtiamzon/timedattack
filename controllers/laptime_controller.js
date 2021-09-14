const express = require("express");
const router = express.Router();

const { Track, User, Car, LapTime } = require("../models");

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
router.post('/new', async (req, res) => {
  try {
    const createdLapTime = await LapTime.create(req.body);
    console.log("MADE A LAP", createdLapTime);
    res.redirect(`/profile/car/${req.body.car}`)
  } catch (error) {
    const context = {error}
    return res.send(error)
  }
});

//EDIT LAPTIME FUNCTIONAL
router.get('/edit/:id', (req, res, next) => {
  LapTime.findById(req.params.id, (error, foundLapTime) => {
    if(error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      lapTime: foundLapTime,
    };

    return res.render("edit_lap", context);
  });
});
module.exports = router;

//EDIT LAPTIME FUNCTIONAL
router.put("/edit/:id", (req, res, next) => {
  LapTime.findByIdAndUpdate(
    req.params.id, {$set: req.body}, { new: true}, (error, updatedLapTime) => {
      if(error) {
        console.log(error);
        req.error = error;
        return next();
      }
      return res.redirect(`/profile/car/${req.body.car}`)
    }
  );
});

//LAPTIME DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedLapTime = await LapTime.findByIdAndDelete(req.params.id);
    return res.redirect(`/profile/${deletedLapTime.user}`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});