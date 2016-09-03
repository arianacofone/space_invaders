// console.log(`bullet.js is connected!`);
class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 25;
    this.el = new Image();
    this.el.src = 'http://andrewmadden.com/ahh.png';
  }
  step() {
    this.y -= this.velocity;
  }
}
