const friendsData = require("../data/friends");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
  
    let userMatch = {
      name: "",
      photo: "",
      difference: 1000
    };

    console.log(req.body);

    let userData = req.body;
    let userScore = userData.scores;
    let difference = 0;

    for (i = 0; friendsData.length; i++) {
      console.log(friendsData[i]);
      difference = 0;
    }
 
    for (j = 0; j < userScore.length; j++) {
      difference += Math.abs(userScore[j] - friendsData[i].scores[j]);

      if (difference <= userMatch.difference) {
        userMatch.name = friendsData[i].name;
        userMatch.photo = friendsData[i].photo;
        userMatch.difference = difference;
      }
    }
  }
  console.log(userMatch);
  friendsData.push(userData);
  res.json(userMatch);
  });
};