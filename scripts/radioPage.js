document.addEventListener("DOMContentLoaded", function() {

// Document nodes
var paragraph = document.getElementById("asideRadioDesc");
var sideBtn = document.getElementById("asideBtn");

// Variable used in function
var timesClicked = 0;
sideBtn.addEventListener('click', function() {
    // Switch between either hiding or displaying the "how radios work" paragraph, if people are interested in seeing that
    timesClicked += 1;
    if (timesClicked % 2 == 1) {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

});
