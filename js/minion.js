// console.log(`minion.js is connected!`);
class WolfMinion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = Math.random() * 10;
    this.el = new Image();
    this.el.src = 'css/wolf_sprite_01.png';
  }
  step() {
    this.x += this.velocity;
    if (this.x > 800 || this.x < 0) {
      this.velocity *= -1;
    }
  }
}

class ThugMinion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = Math.random() * 10;
    this.el = new Image();
    this.el.src = 'css/thug_sprite_01.png';
  }
  step() {
    this.x += this.velocity;
    if (this.x > 800 || this.x < 0) {
      this.velocity *= -1;
    }
  }
}

// class ThugMinion extends WolfMinion
//   constructor (options) {
//    super (options);
//     this.el = new Image();
//     this.el.src = 'css/thug_sprite_01.png';
//   }
// }

class ThugMinion2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = Math.random() * 10;
    this.el = new Image();
    this.el.src = 'css/thug_sprite_01.png';
  }
  step() {
    this.x += this.velocity;
    if (this.x > 800 || this.x < 0) {
      this.velocity *= -1;
    }
  }
}

// class ThugMinion2 extends WolfMinion {
//   constructor (options) {
//     // super (options);
//     this.el = new Image();
//     this.el.src = 'css/thug_sprite_01.png';
//   }
// }
