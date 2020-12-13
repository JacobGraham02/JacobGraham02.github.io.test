document.addEventListener("DOMContentLoaded", function() {

    // When window is loaded, call function
window.onload = function() {
    loopPictures();
}

var imageElement = document.getElementById("wrapperImg");

// 7 different radio images cycle through
var images = ["images/radioImg.png","images/radioImg2.jpg",
"images/radioImg3.png","images/radioImg4.png","images/radioImg5.png","images/radioImg6.png","images/radioImg5.png"];


var i = 0;
// Call internal function that constantly loops through all images in "images" array, displaying each of them every 2 seconds. Reset the counter is it goes over the length of image array
/*
setTimeout() is called instead of setInterval() to prevent potential memory problems 
*/
function loopPictures() {
    setTimeout(function() {
        imageElement.src = images[i];
        i++;
        if (i >= images.length) {
            i = 0;
        }
        loopPictures();
    }, 2000)
}
})
