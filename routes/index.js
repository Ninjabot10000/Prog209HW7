var express = require('express');
var router = express.Router();

let ServerGameArray = [];

// Changed GameObject to VideoGame
let VideoGame = function (pTitle, pYear, pCreator) {
    this.title = pTitle;
    this.year = pYear;
    this.creator = pCreator;
}

//A very real game with a very real creator
// Also planning to remove year and creator with something else
ServerGameArray.push(new VideoGame("A real game", "2022", "A real creator"));
ServerGameArray.push(new VideoGame("Something creative", "2014", "A gamer"));
ServerGameArray.push(new VideoGame("Play vid game", "2018", "Someone"));


console.log(ServerGameArray);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html');
});


//shows all game data
router.get('/getAllVideoGames', function(req, res) {
  res.status(200).json(ServerGameArray);
});

//add a video game
router.post('/#add', function(req, res) {
  const newGame = req.body;  // get object from req object sent from browser
  console.log(newGame);
  ServerGameArray.push(newGame); //adds to the array  
  
  //prepares a reply to the browser
  var response = {
    status  : 200,
    success : 'This has been updated successfully'
  }
  res.end(JSON.stringify(response)); // sends a reply
});

module.exports = router;
