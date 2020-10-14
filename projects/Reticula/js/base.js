// initializing materialize objects
document.addEventListener("DOMContentLoaded", function() { M.AutoInit(); });

/*
Querying all HTMLDivElements with card-panel class and
for each element we are binding an action listener
*/
document.querySelectorAll(".semestres").forEach(cardpanel => {
    cardpanel.addEventListener("click", function() {
        console.log("clicked " + parseInt(cardpanel.id, 10) + " semestre");
        switch (parseInt(cardpanel.id, 10)) {
            case 1:
                viewORhide("primersemestre")
                break;
            case 2:
                viewORhide("primersemestre")
                break;
            case 3:
                viewORhide("primersemestre")
                break;
            case 4:
                viewORhide("primersemestre")
                break;
            case 5:
                viewORhide("primersemestre")
                break;
            case 6:
                viewORhide("primersemestre")
                break;
            case 7:
                viewORhide("primersemestre")
                break;
            case 8:
                viewORhide("primersemestre")
                break;
            case 9:
                viewORhide("primersemestre")
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