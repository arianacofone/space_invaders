

// Define instance of liamNeeson object
const liam = new LiamNeeson(450, 500);
liam.setArrowHandler();

// Defines bullet array and connects it with spacebar control
let bullets = [];
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    bullets.push(new Bullet(liam.x, 350));
  }
});

// Defines minion array based on object class. All start on different y axis for variation
let wolfMinions = [];
for (let i = 0; i < 5; i++) {
  wolfMinions.push(new WolfMinion(Math.floor(Math.random()), 20))
}

let thugMinions = [];
for (let i = 0; i < 7; i++) {
  thugMinions.push(new ThugMinion(Math.floor(Math.random()), 120))
}

let thugMinions2 = [];
for (let i = 0; i < 10; i++) {
  thugMinions2.push(new ThugMinion2(Math.floor(Math.random()), 210))
}

// Sets how are apart the DOM elements need to be to get a collision
let collisionThreshold = 20;

// Sets a timer for the amount of time the player has before the minions disappear
setInterval(() => {
  collisionThreshold--;
  console.log(collisionThreshold);
}, 3000);

// Canvas method allows the different objects to render their look and functionality
function draw() {
  // Creates the canvas rectangle where the game will be played
  const canvasContext = document.getElementById('canvas').getContext('2d');
  canvasContext.clearRect(0, 0, 1000, 600);
  canvasContext.globalCompositeOperation = 'destination-over';

  // Draw the liam neeson object on the board along with the size
  canvasContext.drawImage(liam.el, liam.x, liam.y, 100, 100);

  // Creates new array of bullets & based on location delets them
  bullets = bullets.map((bullet) => {
    canvasContext.drawImage(bullet.el, bullet.x, bullet.y, 100, 100);
    bullet.step();

    // Wolf Minion iterator that defines collision Threshold, enthusiam & bullet delete attempt
    wolfMinions.forEach((mini) => {
      if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
        Math.abs(bullet.y - mini.y) < collisionThreshold) {
        wolfMinions.splice(mini, 1);
        liam.enthusiam += 300;
        bullets.splice(bullet, 1);
        // console.log("BOOOM!");
      }
    });
    // Minion iterator that attacks collision Threshold and enthusiam points
    thugMinions.forEach((mini) => {
      if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
        Math.abs(bullet.y - mini.y) < collisionThreshold) {
        thugMinions.splice(mini, 1);
        liam.enthusiam += 200;
        // console.log("BOOOM!");
      }
    });
    // Minion iterator that attacks collision Threshold and enthusiam points
    thugMinions2.forEach((mini) => {
      if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
        Math.abs(bullet.y - mini.y) < collisionThreshold) {
        thugMinions2.splice(mini, 1);
        liam.enthusiam += 100;
        // console.log("BOOOM!");
      }
    });

    // If bullet is past the y-axis at -100px return a value of null to the bullet
    if (bullet.y < -100) {
      return null;
    } else {
      return bullet;
    }
    // Attempt at trying to delete bullet that are labeled null
    bullets.forEach((bullet) => {
      if (bullet === null) {
        bullets.splice(bullet);
      }
    });

    // Attempt at trying to delete bullet upon collision
    bullets.forEach((bullet) => {
      if (Math.abs(bullet.x - wolfMinions.x) < collisionThreshold &&
        Math.abs(bullet.y - wolfMinions.y) < collisionThreshold) {
        bullets.splice(bullet, 1);
        console.log("BAM!");
      }
    });
  });

  bullets = bullets.filter((ele) => ele);

  // Draw the minions and sets their size
  wolfMinions.forEach((mini) => {
    mini.step();
    canvasContext.drawImage(mini.el, mini.x, mini.y, 80, 80);
  });
  // Draw the minions and sets their size
  thugMinions.forEach((mini) => {
    mini.step();
    canvasContext.drawImage(mini.el, mini.x, mini.y, 80, 80);
  });
  // Draw the minions and sets their size 
  thugMinions2.forEach((mini) => {
    mini.step();
    canvasContext.drawImage(mini.el, mini.x, mini.y, 80, 80);
  });
  window.requestAnimationFrame(draw);
}

draw();

// TODO: Work out collisionThreshold size Issue
// // Draw the minions and sets their size comparable to collisionThreshold timer (gets smaller)
// wolfMinions.forEach((mini) => {
//   mini.step();
//   canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold * 2, collisionThreshold * 2);
// });
// // Draw the minions and sets their size comparable to collisionThreshold timer (gets smaller)
// thugMinions.forEach((mini) => {
//   mini.step();
//   canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold * 2, collisionThreshold * 2);
// });
// // Draw the minions and sets their size comparable to collisionThreshold timer (gets smaller)
// thugMinions2.forEach((mini) => {
//   mini.step();
//   canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold * 2, collisionThreshold * 2);
// });

// TODO:
// if (wolfMinions === 0 && thugMinions === 0 && thugMinions2 === 0) {
//   alert(`You won!`);
// };

// TODO: Counter code to work on
// i = 60;
// function onTimer() {
//   document.getElementById('mycounter').innerHTML = i;
//   i--;
//   if (i < 0) {
//     alert('You lose!');
//   }
//   else {
//     setTimeout(onTimer, 1000);
//   }
// }
