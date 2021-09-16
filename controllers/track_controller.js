const express = require("express");
const router = express.Router();

const { Track, LapTime } = require("../models");

//show home
router.get('/:id', async(req, res, next) => {
  try {
    const foundTrack= await Track.findById(req.params.id);
    const allLapTimes= await LapTime.find({track: req.params.id}).sort({seconds: 1}).populate("car user")
    let foundLapTimes = allLapTimes
    let convertedTime= []
    foundLapTimes.forEach((lapTime, index) => {
      let seconds= lapTime.seconds
      let minutes= Math.floor(seconds /60);
      let remSecond= seconds %60;
      lapTime.convertedTime= (`${minutes}:${remSecond}`)
      foundLapTimes[index].seconds= (parseFloat(convertedTime).toFixed(2))
    })
    const context = {
      track: foundTrack,
      lapTimes: allLapTimes,
      times: convertedTime,
    };
    return res.render("track_show", context);
  } catch(error) {
    console.log(error);
    req.error= error;
    return next()
  }
});





module.exports = router;