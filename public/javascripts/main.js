
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
    })
    
    $(document).on('pagebeforeshow', '#home', function () {
        $.get("/getAllVideoGames", function(data, status){  // AJAX get
            gameArray = data;  // put the returned server json data into our local array


        });
    });
    // !!
    // buttonAdd has been CHANGED to newGame
    // !!

    //  document.getElementById("newGame").addEventListener("click", function () {
 
    //     let newGame = new VideoGame(document.getElementById("title").value, document.getElementById("year").value, document.getElementById("creator"));
    //      console.log(gameArray);
 
    //       document.getElementById("title").value = "";
    //       document.getElementById("year").value = "";
    //      document.getElementById("creator").value = "";
        
        
    //  });
     
    
 });

 
//  $(document).on('pagebeforeshow', '#add', function () {
//     document.getElementById("title").value = ""; 
//     document.getElementById("year").value = ""; 
//     document.getElementById("creator").value  = ""; 
// });