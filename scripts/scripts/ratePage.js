document.addEventListener("DOMContentLoaded", function() {


var timesClicked = 0;
var txtArea = document.getElementById("siteReview");

txtArea.addEventListener('click', function() {
    timesClicked += 1;
    if (timesClicked % 2 == 1) {
        txtArea.style.backgroundColor = "whitesmoke";
    } else {
        txtArea.style.backgroundColor = "white";
    }
});

});