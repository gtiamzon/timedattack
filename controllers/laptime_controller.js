const express = require("express");
const router = express.Router();

const { Track, User, Car } = require("../models");

// laptime create show page
router.get('/new', (req, res) => {
  const context= {};
  return res.render('new_lap', context);
});



module.exports = router;