// console.log(`bullet.js is connected!`);

// Bullet Class Object sets up the x/y coordinate, speed, & image
class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 25;
    this.el = new Image(2, 2);
    this.el.src = 'css/neeson_punch_02.png';
  }
  // Step method sets the velocity compared to y access
  step() {
    this.y -= this.velocity;
  }
}
