// console.log(`bullet.js is connected!`);
class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 25;
    this.el = new Image(2, 2);
    this.el.src = 'css/neeson_punch_02.png';
  }
  step() {
    this.y -= this.velocity;
  }
}
