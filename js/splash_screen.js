// console.log(`this works`);

// CONST DICTIONARY

//Sets up relationship of static parent to splash-screen child for easy deletion on keystroke
const parent = document.querySelector('#static');
const child = document.querySelector('#splash-screen');

// Sets up titles on fake splash screen for easy deletion on keystroke
const title = document.querySelector('#titles');

// Groups titles on splash screen for easy deletion on keystroke
const quoteNode = document.querySelector('#quote');
const action = document.querySelector('#action');

// Three consts for suprise title reveal before game load
const titleOne = document.createElement('p');
titleOne.setAttribute('id', 'titleOne');
titleOne.innerHTML = 'TAKEN BY';

const titleTwo = document.createElement('p');
titleTwo.setAttribute('id', 'titleTwo');
titleTwo.innerHTML = 'SPACE INVADERS';

const titleThree = document.createElement('p');
titleThree.setAttribute('id', 'titleThree');
titleThree.innerHTML = 'LIAM NEESON';

// Initial spacebar keystoke for fake splash page
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    // Removes titles from initial page
    child.removeChild(title);
    // Sets a fadeOut to switch to real splash page from fake splash page
    // fadeOut created for future stylistic element
    function fadeOut(el, speed ) {
      let seconds = speed/10000;
      child.style.transition = "opacity "+seconds+"s ease";
      child.style.opacity = 0;
      setTimeout(function() {
        parent.removeChild(child);
      }, speed);
    }
    fadeOut(document.getElementById('child'), 10000);
  }
});

// Enter keystroke removes quote and causes real titles to be appended
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    parent.removeChild(quoteNode);
    parent.removeChild(action);
    parent.appendChild(titleOne);
    parent.appendChild(titleTwo);
    parent.appendChild(titleThree);
  }
});

// Sets up timer delay from real title real to the game.html pageload
let delay = null;

document.body.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    if (delay != null) {
      clearTimeout(delay);
    }
    let timeout = setTimeout(function () {
        timeout = undefined;
        window.location = 'game.html';
    }, 2500);
  }
});


// FUTURE TO DO LIST WITH CORRESPONDING CODE
// TODO: Set typing feature of the Liam Neeson quote

// CONST BREAKDOWN
// let letter = 0;
// const quote = `Once more into the fray. Into the last good fight I'll ever know. Live and die on this day.Live and die on this day.`;

// FUNCTION BREAKDOWN FOR CONST ABOVE
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
// parent.appendChild(quoteWords);
