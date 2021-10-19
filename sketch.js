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
    noStroke();
    fill("red");
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }

  inputHandler() {
    if (keyIsDown(87)) {
      this.y -= this.speed;
      console.log("Y="+this.y);
    }
    if (keyIsDown(83)) {
      this.y += this.speed;
      console.log("Y="+this.y);
    }
    if (keyIsDown(65)) {
      this.x -= this.speed;
      console.log("X="+this.x);
    }
    if (keyIsDown(68)) {
      this.x += this.speed;
      console.log("X="+this.x);
    }
  }
}

class Enemy {
  constructor(x,y) {
    
  }
}