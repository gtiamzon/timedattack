const { Track } = require("../models");

Track.deleteMany({}, (error, deletedTracks) => {
  if (error) {
    return console.log(error);
  }
  Track.insertMany (
    [
      {
        name: "Buttonwillow Raceway Park 13CW",
        city: "Buttonwillow",
        state: "California",
        icon: "https://cdn.shopify.com/s/files/1/0167/3466/products/13.image_720x.jpg",
        image: "https://globaltimeattack.com/wp-content/uploads/2020/11/0189-november-14-15-2020-global-time-attack-buttonwillow-raceway-park-cw13-racing.jpg",
        length: 2.68,
      },
      {
        name: "Streets Of Willow Springs CW",
        city: "Rosamond",
        state: "California",
        icon: "https://cdn.shopify.com/s/files/1/0167/3466/products/StreetsExtended.image_460x.jpg",
        image: "https://assets.superstreetonline.com/f/121486377.jpg",
        length: 1.6,
      },
      {
        name: "Big Willow CW",
        city: "Rosamond",
        state: "California",
        icon: "https://cdn.shopify.com/s/files/1/0167/3466/products/BigWillow.image.jpg",
        image: "https://i.imgur.com/3ZeHo2x.jpg",
        length: 2.5,
      },
      {
        name: "Chuckwalla Valley Raceway CW",
        city: "Desert Center",
        state: "California",
        icon: "https://cdn.shopify.com/s/files/1/0167/3466/products/Chuckwalla.image_720x.jpg",
        image: "https://assets.superstreetonline.com/f/104280915.jpg?fit=around%7C1000:625",
        length: 2.68,
      },
      {
        name: "Auto Club Speedway Pro Course ROVAL CCW",
        city: "Desert Center",
        state: "California",
        icon: "https://cdn.shopify.com/s/files/1/0167/3466/products/Chuckwalla.image_720x.jpg",
        image: "https://racer.com/wp-content/uploads/sites/85/2020/09/17fon1rl_5837-1.jpg",
        length: 2.68,
      },
      {
        name: "Laguna Seca",
        city: "Salinas",
        state: "California",
        icon: "https://cdn.shopify.com/s/files/1/0167/3466/products/LagunaSeca.image.jpg",
        image: "https://i1.wp.com/www.theapex.racing/wp-content/uploads/2020/04/Ryan-Hunter-Reay-chases-Will-Power-Laguna-Seca-IndyCar-Corkscrew.jpg",
        length: 2.4,
      },
    ],
    function (error, createdTracks) {
      if (error) {
        return console.log(error);
      };
      console.log("WE SEEDED THE TRACKS HOMIE");
      console.log(createdTracks);
    }
  );
});