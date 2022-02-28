
 let gameArray = [];
 let selectedType = "";


let GameObject = function (pTitle, pYear, pCreator) {
    this.title = pTitle;
    this.year = pYear;
    this.creator = pCreator;
}

// //A very real game with a very real creator
// // Also planning to remove year and creator with something else
// gameArray.push(new GameObject("A real game", "2022", "A real creator"));
// gameArray.push(new GameObject("Something creative", "2014", "A gamer"));
// gameArray.push(new GameObject("Play vid game", "2018", "Someone"));
//  console.log(gameArray);

document.addEventListener("DOMContentLoaded", function (event) {
$.get("/getAllVideoGames", function(data, status){  // AJAX get
    gameArray = data;  // put the returned server json data into our local array


    });


    document.getElementById("buttonAdd").addEventListener("click", function () {
 
        gameArray.push(new GameObject(document.getElementById("title").value, document.getElementById("year").value, document.getElementById("creator")));
        //console.log(gameArray);
 
         document.getElementById("title").value = "";
         document.getElementById("year").value = "";
         document.getElementById("creator").value = "";
        
        
    });
    // add a button event for adding new notes on Add page
    document.getElementById("newNote").addEventListener("click", function () {
        // use constructor, build new object and put it in array
        //
        let newNote =  new Note( document.getElementById("title").value, 
        document.getElementById("detail").value,
        document.getElementById("priority").value  );


        $.ajax({
            url : "/AddNote",
            type: "POST",
            data: JSON.stringify(newNote),
            contentType: "application/json; charset=utf-8",

            success: function (result) {
                alert(result);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }    
        });
    })
    
 });

 
//  $(document).on('pagebeforeshow', '#add', function () {
//     document.getElementById("title").value = ""; 
//     document.getElementById("year").value = ""; 
//     document.getElementById("creator").value  = ""; 
// });