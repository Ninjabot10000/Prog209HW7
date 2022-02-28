var express = require('express');
var router = express.Router();

let gameArray = [];


let GameObject = function (pTitle, pYear, pCreator) {
    this.title = pTitle;
    this.year = pYear;
    this.creator = pCreator;
}

//A very real game with a very real creator
// Also planning to remove year and creator with something else
gameArray.push(new GameObject("A real game", "2022", "A real creator"));
gameArray.push(new GameObject("Something creative", "2014", "A gamer"));
gameArray.push(new GameObject("Play vid game", "2018", "Someone"));


console.log(gameArray);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html');
});


//shows all game data
router.get('/getAllVideoGames', function(req, res) {
  res.status(200).json(gameArray);
});

//add a video game
router.post('/#add', function(req, res) {
  const newVideoGame = req.body;  // get object from req object sent from browser
  console.log(newVideoGame);
  gameArray.push(newVideoGame); //adds to the array  
  
  //prepares a reply to the browser
  var response = {
    status  : 200,
    success : 'This has been updated successfully'
  }
  res.end(JSON.stringify(response)); // sends a reply
});

module.exports = router;
