# Space Invaders + Liam Neeson

<p align="center">
  <img src="http://arianadziedzic.com/space_invaders/css/space-invaders-readme.png" width="800"/>
</p>

As a late bloomer to video games, it took an arcade bar and a couple of beers to 
understand the incredibly addictive nature of Space Invaders. Four hours later, 
it became a game that would haunt me forever (Curse you level 2!). Faced with my first 
project as a developer, I knew I had to attempt this beast of a game, but with a 
twist. Liam Neeson.

Enjoy it on my <a href="http://arianadziedzic.com/space_invaders/index.html" target="_blank">website</a>!

## Getting Started
Want to make a Space Invaders version of your own, but with Angelina Jolie as the lead? No problem! 
These instructions will help get your project off the ground with some starting tips. </br>

Using the newest syntax of Javascript, I grouped each component of the game (Liam Neeson, minions, 
bullet, etc) within a class object of their own, looping in the keyboard element in a method of that object.

```
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
```

Tying all of the pieces together in app.js, canvas is the platform where all of the
visual components were rendered using the draw() function, while simultaneously thredding the
overall functionality of the game. Simple enough! 

<p align="center">
  <img src="http://arianadziedzic.com/space_invaders/css/space-invaders-readme2.png" width="800"/>
</p>

For the cherry on top, I got fancy with the splash page to surprise players with the twist. And that's it!

## Built With
* HTML
* CSS
* Vanilla Javascript

## Author
Ariana Dziedzic

## Acknowledgments
My squad leader, Andrew, for keeping the ship sailing when I thought I bit off more than I could chew. </br>
My fiance, who's expertise in old video games helped mold the fluidity and visual components of the game. </br>
My brain for keeping the sanity. </br>
