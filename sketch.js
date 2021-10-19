// Major Project
// Peter Sparks
// Oct 18 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let character;
let castleLocked;

function preload() {
  castleLocked = loadImage("assets/backgrounds/castle-room-locked.png");
}

function setup() {
  createCanvas(960, 540);
  character = new Player(width/2,height/2);
}

function draw() {
  background(castleLocked);
  character.display();
  character.inputHandler();
}


class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 15;
    this.speed = 5;
  }

  display() {
    fill("red");
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }

  inputHandler() {
    if (keyIsDown(87)) {
      character.y -= character.speed;
    }
    if (keyIsDown(83)) {
      character.y += character.speed;
    }
    if (keyIsDown(65)) {
      character.x -= character.speed;
    }
    if (keyIsDown(68)) {
      character.x += character.speed;
    }
  }
}

class Enemy {
  constructor(x,y) {
    
  }
}