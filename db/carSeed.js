const { Car } = require("../models");

Car.deleteMany({}, (error, deletedCars) =>{
  if (error) {
    return console.log(error);
  }
  Car.insertMany(
    [
      {
      username: "geraldo",
      make: "Scion",
      model: "FRS",
      tire: "Kumho V730",
      modifications: ["Suspension", "Wheels"],
      image: "public/assets/50105554668_0a0a863153_o.png"
      }
    ],
    function (error, createdCars) {
      if(error) {
        return console.log(error);
      }
      console.log("SEED FOR CARS COMPLETE");
      console.log(createdCars);
    }
  );
});