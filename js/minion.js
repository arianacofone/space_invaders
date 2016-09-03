// console.log(`minion.js is connected!`);
class Minion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = Math.random() * 10;
    this.el = new Image();
    this.el.src = 'http://andrewmadden.com/face.png';
  }
  step() {
    this.x += this.velocity;
    if (this.x > 800 || this.x < 0) {
      this.velocity *= -1;
    }
  }
}
