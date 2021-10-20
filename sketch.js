// Major Project
// Peter Sparks
// Oct 18 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let character;
let castleLocked;
let grid;
let theSword;
let sword;

function preload() {
  castleLocked = loadImage("assets/backgrounds/castle-room-locked.png");
  grid = loadStrings("assets/rooms/castle-room-locked.txt");
  theSword = loadImage("assets/items/sword.png");
  
}

function setup() {
  createCanvas(960, 540);
  character = new Player(width/2,height/2);
  sword = new Item(900,500,theSword,20,20);
}

function draw() {
  background(castleLocked);
  character.display();
  character.position();
  character.inputHandler();
  sword.display();

}


class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.speed = 10;
    this.posX = this.x/10;
    this.posY = this.y/10;
  }

  display() {
    noStroke();
    fill("red");
    //rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }

  position() {
    this.posX = Math.floor(this.x/10);
    this.posY = Math.floor(this.y/10);
  }

  inputHandler() {
    if (keyIsDown(87)) {
      if (grid[this.posY-1][this.posX] === ".") {
        this.y -= this.speed;
      }
      console.log("Y="+this.y);
    }
    if (keyIsDown(83)) {
      if (grid[this.posY+1][this.posX] === ".") {
        this.y += this.speed;
      }
      console.log("Y="+this.y);
    }
    if (keyIsDown(65)) {
      if (grid[this.posY][this.posX-1] === ".") {
        this.x -= this.speed;
      }
      console.log("X="+this.x);
    }
    if (keyIsDown(68)) {
      if (grid[this.posY][this.posX+1] === ".") {
        this.x += this.speed;
      }
      console.log("X="+this.x);
    }
  }
}

class Enemy {
  constructor(x,y) {
    
  }
}

class Item {
  constructor(x, y, image, sideX, sideY) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
  }
  
  display() {
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.sideX, this.sideY);
  }

  pickup() {
  //   if (this.onGround) {
  //     if (character.x + 1) {
  //       let s = 1;
  //     }
  //   }
  }
}