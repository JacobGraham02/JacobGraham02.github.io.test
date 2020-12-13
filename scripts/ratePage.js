document.addEventListener("DOMContentLoaded", function() {

// Document node
var txtArea = document.getElementById("siteReview");

// Variable in function
var timesClicked = 0;
txtArea.addEventListener('click', function() {
    // Same as radiopage: every other time textarea is clicked on, the background will slightly darken to indicate it is selected
    timesClicked += 1;
    if (timesClicked % 2 == 1) {
        txtArea.style.backgroundColor = "whitesmoke";
    } else {
        txtArea.style.backgroundColor = "white";
    }
});

});