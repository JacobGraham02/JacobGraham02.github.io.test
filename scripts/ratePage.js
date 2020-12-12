document.addEventListener("DOMContentLoaded", function() {


var timesClicked = 0;
var txtArea = document.getElementById("reviewTxt");

txtArea.addEventListener('click', function() {
    timesClicked += 1;
    if (timesClicked % 2 == 1) {
        txtArea.style.backgroundColor = "red";
    } else {
        txtArea.style.backgroundColor = "white";
    }
});

});