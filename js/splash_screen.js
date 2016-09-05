console.log(`this works`);

// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// canvas.width = 400;
// canvas.height = 400;
// canvasData = ctx.createImageData(canvas.width, canvas.height);
const parent = document.querySelector('#static');
const child = document.querySelector('#splash-screen');

const title = document.querySelector('#titles');

let letter = 0;
const quote = `Once more into the fray. Into the last good fight I'll ever know. Live and die on this day.Live and die on this day.`;

const quoteNode = document.querySelector('#quote');
const action = document.querySelector('#action');

const titleOne = document.createElement('p');
titleOne.setAttribute('id', 'titleOne');
titleOne.innerHTML = "TAKEN BY";

const titleTwo = document.createElement('p');
titleTwo.setAttribute('id', 'titleTwo');
titleTwo.innerHTML = "SPACE INVADERS";

const titleThree = document.createElement('p');
titleThree.setAttribute('id', 'titleThree');
titleThree.innerHTML = "LIAM NEESON";

document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    child.removeChild(title);

    // function type(el) {
      // document.querySelector('#quote').innerHTML += quote.charAt(letter);
      // letter += 1;
      // let t = setTimeout('type()', 100);
    //   setTimeout(function() {
    //     document.querySelector('#quote').innerHTML += quote.charAt(letter);
    //     letter += 1;
    //   }, 100);
    // };
    // type(document.querySelector('#quote'));

    function fadeOut(el, speed ) {
      let seconds = speed/10000;
      child.style.transition = "opacity "+seconds+"s ease";
      child.style.opacity = 0;
      setTimeout(function() {
        parent.removeChild(child);
      }, speed);
  }
  fadeOut(document.getElementById('child'), 10000);
  // parent.appendChild(quoteWords);
}
});

document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    parent.removeChild(quoteNode);
    parent.removeChild(action);
    parent.appendChild(titleOne);
    parent.appendChild(titleTwo);
    parent.appendChild(titleThree);
  }
});

let delay = null;

document.body.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    if(delay != null) {
      clearTimeout(delay);
    }
    let timeout = setTimeout(function () {
        timeout = undefined;
        window.location = 'index.html';
    }, 2500);

  }
});
