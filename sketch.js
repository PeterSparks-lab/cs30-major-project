// Major Project
// Peter Sparks
// Oct 18 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let character;
let castleLocked;
let grid;

function preload() {
  castleLocked = loadImage("assets/backgrounds/castle-room-locked.png");
  grid = loadStrings("assets/rooms/castle-room-locked.txt");
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
    this.size = 10;
    this.speed = 10;
  }

  display() {
    noStroke();
    fill("red");
    //rectMode(CENTER);
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
      if (grid[this.y][this.x/10-1] === ".") {

        this.x -= this.speed;
      }
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