// initializing materialize objects
document.addEventListener("DOMContentLoaded", function() { M.AutoInit(); });

/*
Querying all HTMLDivElements with card-panel class and
for each element we are binding an action listener
*/
document.querySelectorAll(".card-panel").forEach(cardpanel => {
    cardpanel.addEventListener("click", function() {
        console.log("clicked " + parseInt(cardpanel.id, 10) + " semestre");
    });
});