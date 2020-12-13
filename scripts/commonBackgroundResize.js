document.addEventListener("DOMContentLoaded", function() {

// Select the document itself
var doc = document.documentElement;
doc.style.backgroundSize = "100vw 100vh";

// When window is resized, call a function
window.addEventListener('resize', changeBackgroundSize);

// Resizes the webpage background to fit the screen size
function changeBackgroundSize() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    // 100% of viewport width and height
    doc.style.backgroundSize = "100vw 100vh";
}

});