const express = require("express");
const router = express.Router();

const { Track, LapTime } = require("../models");

//show home
router.get('/:id', async(req, res, next) => {
  try {
    const foundTrack= await Track.findById(req.params.id);
    const foundLapTimes= await LapTime.find({track: req.params.id}).populate("car user")
    const context = {
      track: foundTrack,
      lapTimes: foundLapTimes
    };
    return res.render("track_show", context);
  } catch(error) {
    console.log(error);
    req.error= error;
    return next()
  }
});





module.exports = router;