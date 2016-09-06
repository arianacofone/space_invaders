// console.log(`liamNeeson.js is connected!`);

// Class Object of Liam Neeson set ups x/y coordinates, enthusiam, and visual
class LiamNeeson {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.el = new Image();
    this.el.src = 'css/neeson_sprite_01.png';
    this.enthusiam = 0;
  }
  // Set Arrow Handler ties in the keystroke commands and movement on x axis
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
