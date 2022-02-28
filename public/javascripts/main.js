//let selectedType = "";

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function () {
 
        gameArray.push(new GameObject(document.getElementById("title").value, document.getElementById("year").value, document.getElementById("creator")));
        //console.log(gameArray);
 
        // document.getElementById("title").value = "";
        // document.getElementById("year").value = "";
        // document.getElementById("creator").value = "";
        
        
    });
    $(document).on('pagebeforeshow', '#add', function () {
        document.getElementById("title").value = ""; 
        document.getElementById("year").value = ""; 
        document.getElementById("creator").value  = ""; 
    });
 });