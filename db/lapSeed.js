const { LapTime } = require("../models");

Time.deleteMany({}, (error, deletedTimes) =>{
  if (error) {
    return console.log(error);
  }
  Time.insertMany(
    [
      {

      }
    ],
    function (error, createdTimes) {
      if(error) {
        return console.log(error);
      }
      console.log("SEED FOR LAPTIMES COMPLETE");
      console.log(createdTimes);
    }
  );
});