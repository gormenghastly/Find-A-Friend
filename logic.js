var scoreDiff = 0;
var scoreDiffArr = [2, 3, 5];

var checkFriend = function() {
  for (var i = 0; i < friendArr.length; i++) {
    friendArr[i].scores;
    newFriend.scores;
  }
};

//subtract individual scores and add to array
var x = 5;
var y = 3;
var checkScores = function() {
  //var z = x - y;
  var scoreDiff = Math.abs(x - y);
  //scoreDiffArr.push(scoreDiff);
  console.log(scoreDiff);
};
checkScores();

//add contents of array
var totalScore = function() {
  console.log(scoreDiffArr);
  var total = 0;

  for (var i = 0, n = scoreDiffArr.length; i < n; ++i) {
    total += scoreDiffArr[i];
  }
  console.log(total);
};
totalScore();
