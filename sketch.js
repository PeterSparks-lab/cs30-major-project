// Major Project
// Peter Sparks
// Oct 18 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let castle;
let currentRoom;
let currentBackground;
let character;
let castleLocked;
let hallway1;
let hallwayRoom;
let castleRoomLocked;
let grid;
let swordRight;
let swordLeft;
let sword;

function preload() {
  castleLocked = loadImage("assets/backgrounds/castle-room-locked.png");
  hallway1 = loadImage("assets/backgrounds/hallway-1.png");
  castleRoomLocked = loadStrings("assets/rooms/castle-room-locked.txt");
  hallwayRoom = loadStrings("assets/rooms/hallway-1.txt");
  swordRight = loadImage("assets/items/sword/sword-right.png");
  swordLeft = loadImage("assets/items/sword/sword-left.png");
  
}

function setup() {
  createCanvas(960, 540);
  grid = castleRoomLocked;
  character = new Player(width/2,height/2);
  sword = new Item(900,500,swordRight,swordLeft,20,20);
  castle = castleLocked;
  currentBackground = castle;
}

function draw() {
  background(currentBackground);
  character.rooms();
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
    this.leftOrRight;
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
      this.leftOrRight = "left";
      console.log("X="+this.x);
    }
    if (keyIsDown(68)) {
      if (grid[this.posY][this.posX+1] === ".") {
        this.x += this.speed;
      }
      this.leftOrRight = "right";
      console.log("X="+this.x);
    }
  }

  rooms() {
    if (this.y === 530) {
      this.y = 20;
      grid = hallwayRoom;
      currentBackground = hallway1;
    }
    if (this.y-5 < 1) {
      this.y = 530;
      grid = castleRoomLocked;
      currentBackground = castle;
    }
  }
}

class Enemy {
  constructor(x,y) {
    
  }
}

class Item {
  constructor(x, y, image1, image2, sideX, sideY) {
    this.x = x;
    this.y = y;
    this.imageRight = image1;
    this.imageLeft = image2;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
  }
  
  display() {
    if (this.onGround) {
      image(this.imageRight, this.x, this.y, this.sideX, this.sideY);
      this.pickup();
    }
    else {
      if (character.leftOrRight === "right") {
        image(this.imageRight, this.x, this.y, this.sideX, this.sideY);
        this.x = character.x+10;
      }
      else {
        image(this.imageLeft, this.x, this.y, this.sideX, this.sideY);
        this.x = character.x-20;
      }
      this.y = character.y-5;
    }
  }

  pickup() {
    for(let i=character.y; i<character.y+10; i++) {
      for(let j=character.x; j<character.x+10; j++) {
        if (i >= this.y && i <this.y+this.sideY ) {
          if (j >= this.x && j < this.x+this.sideX) {
            this.onGround = false;
          }
        }
      }
    }
  }
}