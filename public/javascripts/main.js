
 let gameArray = [];

 // let selectedType = "";
 
 //Changed GameObject to VideoGame
 let VideoGame = function (pTitle, pYear, pCreator) {
     this.title = pTitle;
     this.year = pYear;
     this.creator = pCreator;
     //this.playtime = 0;
 }
 //PLAN FOR ADDING PLAYTIME
 //Adding the inital playtime counter will be with the other inputs
 //UPDATING the playtime can possibly be on the List all video games when clicked on a specific game
 
 
 
 
 // //A very real game with a very real creator
 // // Also planning to remove year and creator with something else
 // gameArray.push(new GameObject("A real game", "2022", "A real creator"));
 // gameArray.push(new GameObject("Something creative", "2014", "A gamer"));
 // gameArray.push(new GameObject("Play vid game", "2018", "Someone"));
 //  console.log(gameArray);
 
 document.addEventListener("DOMContentLoaded", function (event) {

     document.getElementById("newGame").addEventListener("click", function () {
         // use constructor, build new object and put it in array
         //
         let newGame = new VideoGame ( 
         document.getElementById("title").value, 
         document.getElementById("year").value,
         document.getElementById("creator").value);
 
             
         $.ajax({
             url : "/add",
             type: "POST",
             data: JSON.stringify(newGame),
             contentType: "application/json; charset=utf-8",
 
             success: function (result) {
                 console.log(result);
             }, 
         });

         //Clearing data that was inputted
         document.getElementById("title").value = "";
         document.getElementById("year").value = "";
         document.getElementById("creator").value = "";
     });

     //page before show
    $(document).on('pagebeforeshow', '#list', function () {
        createList();
    });
});

//Reference from MovieNode
 function createList(){
     $.get("/getAllVideoGames", function(data, status){  // AJAX get
        gameArray = data;  // put the returned server json data into our local array


     let gameList = document.getElementById("gameList");
     while (gameList.firstChild) {    // remove any old data so don't get duplicates
        gameList.removeChild(gameList.firstChild);
     };
 
     let ul = document.createElement('ul');
 
     gameArray.forEach(function (element,) {   // use handy array forEach method
        let li = document.createElement('li');
        // adding a class name to each one as a way of creating a collection
        li.classList.add('oneGame'); 
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        //li.setAttribute("data-parm");
        //add ID later
        li.innerHTML = element.title + " was made in " + element.year +" by " + element.creator;
        ul.appendChild(li);
    }); 
     gameList.appendChild(ul)
    });
 }
 
 
  
 //  $(document).on('pagebeforeshow', '#add', function () {
 //     document.getElementById("title").value = ""; 
 //     document.getElementById("year").value = ""; 
 //     document.getElementById("creator").value  = ""; 
 // });