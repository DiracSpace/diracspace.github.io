// initializing materialize objects
document.addEventListener("DOMContentLoaded", function() { M.AutoInit(); });

// home function
document.getElementById('Home').addEventListener("click", function() { window.location.href = "./index.html"; });
document.getElementById('Home-sidebar').addEventListener("click", function() { window.location.href = "./index.html"; });

/*
Querying all HTMLDivElements with card-panel class and
for each element we are binding an action listener
*/
document.querySelectorAll(".semestres").forEach(cardpanel => {
    cardpanel.addEventListener("click", function() {
        //console.log("clicked " + parseInt(cardpanel.id, 10) + " semestre");
        switch (parseInt(cardpanel.id, 10)) {
            case 1:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiasprimero");
                break;
            case 2:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiassegundo");
                break;
            case 3:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiastercero");
                break;
            case 4:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiascuarto");
                break;
            case 5:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiasquinto");
                break;
            case 6:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiassexto");
                break;
            case 7:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiasseptimo");
                break;
            case 8:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiasoctavo");
                break;
            case 9:
                console.log("Show info for: " + cardpanel.id);
                viewORhide("materiasnoveno");
                break;
        }
    });
});

function viewORhide(id) {
    var element = document.getElementById(id), style = window.getComputedStyle(element), property = style.getPropertyValue('display');
    if (property == 'none') {
        document.getElementById(id).style.display = 'block';
        document.getElementById('semestres').style.display = 'none';
    } else {
        document.getElementById(id).style.display = 'none';
        document.getElementById('semestres').style.display = 'block';
    }
}