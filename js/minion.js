// console.log(`minion.js is connected!`);

// Below is a breakdown of every minion object
// Supplying x/y coordinate attributes & visual appearance

class WolfMinion {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = Math.random() * 10;
    this.el = new Image();
    this.el.src = 'css/wolf_sprite_01.png';
  }
  // The step method sets the width page boundaries for object
  step() {
    this.x += this.velocity;
    if (this.x > 800 || this.x < 0) {
      this.velocity *= -1;
    }
  }
}

// The following two Class objects, I would like to make into
// Extending classes, but it proved more difficult than
// Originally thought
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

// TODO:Set up class object as extension of WolfMinion
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

//TODO: Set up class object as extension of WolfMinion
// class ThugMinion2 extends WolfMinion {
//   constructor (options) {
//     // super (options);
//     this.el = new Image();
//     this.el.src = 'css/thug_sprite_01.png';
//   }
// }
