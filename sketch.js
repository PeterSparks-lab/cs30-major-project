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
let enemy;
let castleLocked;
let hallway1;
let hallway2;
let hallway3;
let deadEnd1;
let hallwayRoom1;
let hallwayRoom2;
let hallwayRoom3;
let deadEndRoom1;
let castleRoomLocked;
let grid;
let swordRight;
let swordLeft;
let sword;
let greenDragonRight;
let greenDragonLeft;
let inventory;
let worldRooms;
let worldBackrounds;
let worldPosX;
let worldPosY;

function preload() {
  //load rooms from text files//
  castleRoomLocked = loadStrings("assets/rooms/castle-room-locked.txt");
  deadEndRoom1 = loadStrings("assets/rooms/dead-end-room-1.txt");
  hallwayRoom3 = loadStrings("assets/rooms/hallway-3.txt");
  hallwayRoom2 = loadStrings("assets/rooms/hallway-2.txt");
  hallwayRoom1 = loadStrings("assets/rooms/hallway-1.txt");

  //load backgrounds from assets folder//
  castleLocked = loadImage("assets/backgrounds/castle-room-locked.png");
  hallway1 = loadImage("assets/backgrounds/hallway-1.png");
  hallway2 = loadImage("assets/backgrounds/hallway-2.png");
  hallway3 = loadImage("assets/backgrounds/hallway-3.png");
  deadEnd1 = loadImage("assets/backgrounds/dead-end-1.png");
  swordRight = loadImage("assets/items/sword/sword-right.png");
  swordLeft = loadImage("assets/items/sword/sword-left.png");
  greenDragonRight = loadImage("assets/enemies/green-dragon-v2.png");
  greenDragonLeft = loadImage("assets/enemies/green-dragon-v2-left.png");
}

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  worldRooms = [
    ["#","#","#","#","#",castleRoomLocked,"#","#","#","#","#"],
    ["#","#","#","#",hallwayRoom2,hallwayRoom1,deadEndRoom1,"#","#","#","#"],
    ["#","#","#","#","#",hallwayRoom3,"#","#","#","#","#"]
  ];
  worldBackrounds = [
    ["#","#","#","#","#",castleLocked,"#","#","#","#","#"],
    ["#","#","#","#",hallway2,hallway1,deadEnd1,"#","#","#","#"],
    ["#","#","#","#","#",hallway3,"#","#","#","#","#"]
  ];
  worldPosX = 5;
  worldPosY = 0;
  character = new Player(width/2,height/2);
  enemy = new Enemy(160, 210, greenDragonRight, greenDragonLeft, 5, hallwayRoom1);
  sword = new Item("sword",900,500,swordRight,swordLeft,20,20,castleRoomLocked);
  castle = castleLocked;
  currentBackground = castle;
  inventory = new Map();
}

function draw() {
  updateWorld();
  background(currentBackground);
  character.rooms();
  character.display();
  enemy.spawn();
  enemy.move();
  enemy.display();
  enemy.killPlayer();
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
      if (worldRooms[worldPosY + 1][worldPosX] !== "#") {
        worldPosY += 1;
      }
    }
    if (this.y-5 < 1) {
      this.y = 520;
      if (worldRooms[worldPosY - 1][worldPosX] !== "#") {
        worldPosY -= 1;
      }
    }
    if (this.x === 950) {
      this.x = 20;
      if (worldRooms[worldPosY][worldPosX + 1] !== "#") {
        worldPosX += 1;
      }
    }
    if (this.x === 0) {
      this.x = 940;
      if (worldRooms[worldPosY][worldPosX - 1] !== "#") {
        worldPosX -= 1;
      }
    }
  }

  death() {
    console.log("you are dead");
    this.alive = false;
  }
}

class Enemy {
  constructor(x,y,image1,image2,speed,room) {
    this.x = x;
    this.y = y;
    this.imageRight = image1;
    this.imageLeft = image2;
    this.speed = speed;
    this.spawnRoom = room;
    this.alive = false;
    this.hasBeenKilled = false;
  }

  spawn() {
    if (!this.hasBeenKilled) {
      if (grid === this.spawnRoom) {
        this.alive = true;
      }
      else {
        this.alive = false;
      }
    }
    else {
      this.alive = false;
    }
    
  }

  display() {
    if (this.alive) {
      if (character.x >= this.x) {
        image (this.imageRight, this.x, this.y, 64, 64);
      }
      else {
        image (this.imageLeft, this.x, this.y, 64, 64);
      }
    }
  }

  move() {
    if (this.alive) {
      if (character.x + 10 > this.x + 64) {
        this.x += this.speed;
      }
      if (character.y >= this.y + 10) {
        this.y += this.speed;
      }
      if (character.x < this.x) {
        this.x -= this.speed;
      }
      if (character.y < this.y) {
        this.y -= this.speed;
      }
    }
  }

  killPlayer() {
    if (this.alive) {
      if (character.x+10 > this.x && character.x < this.x +64 && character.y > this.y && character.y < this.y + 64) {
        if (inventory.get("holding") === "sword") {
          this.hasBeenKilled = true;
        }
        else {
          character.death();
        }
      }
    }
  }
}

class Item {
  constructor(id,x, y, image1, image2, sideX, sideY, room) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.imageRight = image1;
    this.imageLeft = image2;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
    this.room = room;
  }
  
  display() {
    if (this.onGround) {
      if (grid === this.room) {
        image(this.imageRight, this.x, this.y, this.sideX, this.sideY);
        this.pickup();
      }
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
            inventory.set("holding",this.id);
            inventory.set(1,this.id);
          }
        }
      }
    }
  }
}

function updateWorld() {
  grid = worldRooms[worldPosY][worldPosX];
  currentBackground = worldBackrounds[worldPosY][worldPosX];
}