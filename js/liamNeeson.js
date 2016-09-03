// console.log(`liamNeeson.js is connected!`);

class LiamNeeson {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.el = new Image();
    this.el.src = 'css/neeson_sprite_01.png';
    this.enthusiam = 0;
  }
  setArrowHandler() {
    document.body.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        this.x -= 30;
      } else if (e.keyCode === 39) {
        this.x += 30;
      }
    });
  }
}
