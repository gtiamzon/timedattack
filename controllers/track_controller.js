const express = require("express");
const router = express.Router();

const { Track } = require("../models");

//show
router.get('/', async(req, res, next) => {
  try {
    const allTracks = await Track.find({});
    const context = {
      tracks: allTracks
    };
    return res.render("index", context);
  } catch(error) {
    console.log(error);
    req.error= error;
    return next()
  }
});

module.exports = router;