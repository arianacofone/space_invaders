console.log(`this works`);

// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// canvas.width = 400;
// canvas.height = 400;
// canvasData = ctx.createImageData(canvas.width, canvas.height);
const parent = document.querySelector('#static');
const child = document.querySelector('#splash-screen');
// function setArrowHandler() {
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    function fadeOut(el, speed ) {
        var seconds = speed/750;
        child.style.transition = "opacity "+seconds+"s ease";
        child.style.opacity = 0;
        setTimeout(function() {
            el.parent.removeChild(child);
        }, speed);
    }
    fadeOut(document.getElementById('child'), 7000);
  }
});
