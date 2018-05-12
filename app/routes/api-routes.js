var friendData = require('../data/friends.js');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  });

  app.post('/api/friends', function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    var bestFriend = {
      name: '',
      photo: '',
      bestDiff: 1000
    };

    var diff = 0;
    var newScores = newFriend.scores;

    for (var i = 0; i < newScores.length; i++) {
      newScores[i] = parseInt(newScores[i]);
    }

    for (var i = 0; i < friendData.length; i++) {
      for (var j = 0; j < friendData[i].scores.length; j++) {
        diff += Math.abs(friendData[i].scores[j] - newScores[j]);
      }
      if (diff < bestFriend.bestDiff) {
        bestFriend.name = friendData[i].name;
        bestFriend.photo = friendData[i].photo;
      }
    }

    friendData.push(newFriend);
    res.json(bestFriend);
  });
};
