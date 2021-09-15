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
    let endDate= new Date(req.body.date.valueOf());
    endDate.setDate(endDate.getDate() + 1);
    console.log(endDate);
    req.body.date = endDate
    const createdLapTime = await LapTime.create({
      user: req.body.user,
      car: req.body.car,
      track: req.body.track,
      seconds: Number(req.body.minutes * 60) + Number(req.body.seconds),
      date: req.body.date
    });
    console.log("MADE A LAP", createdLapTime);
    res.redirect(`/profile/car/${req.body.car}`)
  } catch (error) {
    const context = {error}
    return res.send(error)
  }
});

//EDIT LAPTIME presentational
router.get('/edit/:id', async (req, res, next) => {
  try{
    const foundLapTimes= await LapTime.findById(req.params.id);
    let foundLapTime = foundLapTimes;
    let convertedMinutes= Math.floor(foundLapTime.seconds/60);
    let remSeconds= foundLapTime.seconds%60
    console.log(convertedMinutes);
    console.log(remSeconds)
    const context = {
      lapTime: foundLapTime,
      minutes: convertedMinutes,
      seconds: remSeconds
    };
    return res.render("edit_lap", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});
module.exports = router;

//EDIT LAPTIME FUNCTIONAL
router.put("/edit/:id", (req, res, next) => {
  let endDate= new Date(req.body.date.valueOf());
  endDate.setDate(endDate.getDate() + 1);
  console.log(endDate);
  req.body.date = endDate
  LapTime.findByIdAndUpdate(
    req.params.id, {$set:
      { 
        user: req.body.user,
        car: req.body.car,
        track: req.body.track,
        seconds: Number(req.body.minutes * 60) + Number(req.body.seconds),
        date: req.body.date
      }}, { new: true}, (error, updatedLapTime) => {
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