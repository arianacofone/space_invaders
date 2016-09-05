// let el = document.querySelector('#start-button')[0].addEventListener('click', ((e) => {
//   .fadeOut(500);
//    console.log('Button clicked');
// });

//Define instance of liamNeeson object
const liam = new LiamNeeson(450, 500);
liam.setArrowHandler();

//Defines bullet array and connects it with spacebar control
let bullets = [];
document.body.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    bullets.push(new Bullet(liam.x, 350));
  } console.log(`press`);
});

//Defines minion array
// let minions = [new Minion(20, 20), new Minion(70, 20), new Minion(40, 20)];
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

let collisionThreshold = 30;

setInterval(() => {
  collisionThreshold--;
  console.log(collisionThreshold);
}, 3000);

function draw() {
  const canvasContext = document.getElementById('canvas').getContext('2d');
  canvasContext.clearRect(0, 0, 1000, 600);

  canvasContext.globalCompositeOperation = 'destination-over';
  canvasContext.drawImage(liam.el, liam.x, liam.y, 100, 100);


  bullets = bullets.map((bullet) => {
    //TODO: Remove any bullets past 0 in the y axis?
    canvasContext.drawImage(bullet.el, bullet.x, bullet.y, 100, 100);
    bullet.step();

    wolfMinions.forEach((mini) => {
      if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
        Math.abs(bullet.y - mini.y) < collisionThreshold) {
        wolfMinions.splice(mini, 1);

        liam.enthusiam += 300;
        console.log("BOOOM!");
      }
    });

    thugMinions.forEach((mini) => {
      if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
        Math.abs(bullet.y - mini.y) < collisionThreshold) {
        thugMinions.splice(mini, 1);
        bullet.delete();
        liam.enthusiam += 200;
        console.log("BOOOM!");
      }
    });

    thugMinions2.forEach((mini) => {
      if (Math.abs(bullet.x - mini.x) < collisionThreshold &&
        Math.abs(bullet.y - mini.y) < collisionThreshold) {
        thugMinions2.splice(mini, 1);
        liam.enthusiam += 100;
        console.log("BOOOM!");
      }
    });

    if (bullet.y < -100) {
      return null;
    } else {
      return bullet;
    }
  });

  bullets = bullets.filter((ele) => ele);

  // Make the min's move
  wolfMinions.forEach((mini) => {
    mini.step();
    canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold * 2, collisionThreshold * 2);
  });

  thugMinions.forEach((mini) => {
    mini.step();
    canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold * 2, collisionThreshold * 2);
  });

  thugMinions2.forEach((mini) => {
    mini.step();
    canvasContext.drawImage(mini.el, mini.x, mini.y, collisionThreshold * 2, collisionThreshold * 2);
  });

  window.requestAnimationFrame(draw);
}

draw();

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


// Previous App Functionality
// const canvas = document.querySelector('#app');
// const screen = canvas.getContext('2d');
// const size = { x: 15, y: 15};
// const gameXY = { x: canvas.width, y: canvas.height };
//
//   // App is the hub that ties in all object status updates
// class App {
//   constructor(canvas, gameXY) {
//     this.canvas = canvas;
//     this.gameXY = gameXY
//     this.liamNeeson = new LiamNeeson(this.canvas, this.gameXY);
//     this.liamNeeson.render();
//   }
//   tick() {
//     this.canvas.update();
//     this.canvas.draw(screen, gameXY)
//     update() {
//
//     }
//     draw(screen, gameXY) {
//       screen.fillscreen.fillRect(30,30,40,40);
//     }
//   }
// }
//
//
// //Space Invaders status is updated each time the page is refreshed
// const appUpdate = new App(canvas, gameXY);
// // appUpdate.tick();
//
// //Calls window to render updates, therefore the App Object
// function appLoop() {
//   window.requestAnimationFrame(() => {
//     console.log(`test`);
//     appUpdate.tick();
//     appLoop();
//   });
// }
// //
// appLoop();
