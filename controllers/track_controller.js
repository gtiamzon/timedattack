const express = require("express");
const router = express.Router();

const { Track } = require("../models");

//show home
router.get('/:id', async(req, res, next) => {
  try {
    const foundTrack= await Track.findById(req.params.id);
    const context = {
      track: foundTrack,
    };
    return res.render("track_show", context);
  } catch(error) {
    console.log(error);
    req.error= error;
    return next()
  }
});

//



module.exports = router;