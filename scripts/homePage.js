// $(document).ready(function() {
//     alert("Hello");
// });

// When the document has loaded
document.addEventListener("DOMContentLoaded", function() {

window.onload = function() {
    loopPictures();
}

var imageElement = document.getElementById("wrapperImg");

var images = ["images/radioImg.png","images/radioImg2.jpg",
"images/radioImg3.png","images/radioImg4.png","images/radioImg5.png","images/radioImg6.png","images/radioImg5.png","images/radioImg6.png"];
// 8 strings; 7 actually because index begins at 0

var i = 0;
function loopPictures() {
    setTimeout(function() {
        imageElement.src = images[i];
        i++;
        if (i >= 8) {
            i = 0;
        }
        loopPictures();
    }, 2000)
}
})
