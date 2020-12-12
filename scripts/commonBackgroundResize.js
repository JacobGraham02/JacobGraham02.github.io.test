document.addEventListener("DOMContentLoaded", function() {

var doc = document.documentElement;
doc.style.backgroundSize = "100vw 100vh";

window.addEventListener('resize', changeBackgroundSize);

// Resizes the webpage background to fit the screen size
function changeBackgroundSize() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    doc.style.backgroundSize = "100vw 100vh";
}

});