// Major Project
// Peter Sparks
// Oct 18 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let castle;
let currentBackground;
let castleLocked;
let yellowInt;
let yellowHallway;
let red3Door;
let redHall;
let yellowRoom;
let swCornerYellow;
let nwCornerBlue;
let redCastleLocked;
let redCastleUnlocked;
//.....................................................//
let swordRight;
let swordLeft;
let theCoin;
let squareKey;
let greenDragonRight;
let greenDragonLeft;
//.....................................................//
let intersection;
let hallway;
let hallway3Door;
let swCorner;
let nwCorner;
let castleRedLocked;
let castleRedUnlocked;
let room;
let coinRoom;
let keyHall;
let castleRoomLocked;
//.....................................................//
let grid;
let inventory;
let worldRooms;
let worldBackrounds;
let currentRoom;
let worldPosX;
let worldPosY;
//.....................................................//
let character;
let coin;
let keySquare;
let dirsim;
let tergim;
let sword;

function preload() {
  //load rooms from text files//
  castleRoomLocked = loadStrings("assets/rooms/castle-room-locked.txt");
  room = loadStrings("assets/rooms/room.txt");
  swCorner = loadStrings("assets/rooms/sw-corner.txt");
  nwCorner = loadStrings("assets/rooms/nw-corner.txt");
  coinRoom = loadStrings("assets/rooms/coin-room.txt");
  hallway3Door = loadStrings("assets/rooms/3-door-hall.txt");
  hallway = loadStrings("assets/rooms/hallway.txt");
  intersection = loadStrings("assets/rooms/4-way-int.txt");
  keyHall = loadStrings("assets/rooms/square-key-hall.txt");
  castleRedLocked = loadStrings("assets/rooms/red-castle-locked.txt");
  castleRedUnlocked = loadStrings("assets/rooms/red-castle-unlocked.txt");

  //load backgrounds from assets folder//
  redCastleLocked = loadImage("assets/backgrounds/castle/red-castle-locked.png");
  redCastleUnlocked = loadImage("assets/backgrounds/castle/unlocked-red-castle.png");
  castleLocked = loadImage("assets/backgrounds/castle/castle-room-locked.png");
  yellowInt = loadImage("assets/backgrounds/yellow/yellow-intersection.png");
  yellowHallway = loadImage("assets/backgrounds/yellow/yellow-hallway.png");
  swCornerYellow = loadImage("assets/backgrounds/yellow/yellow-corner-sw.png");
  nwCornerBlue = loadImage("assets/backgrounds/blue/blue-corner-nw.png");
  red3Door = loadImage("assets/backgrounds/red/red-3-door.png");
  redHall = loadImage("assets/backgrounds/red/red-hallway.png");
  yellowRoom = loadImage("assets/backgrounds/yellow/yellow-room.png");
  swordRight = loadImage("assets/items/sword/sword-right.png");
  theCoin = loadImage("assets/items/coin/the-coin.png");
  squareKey = loadImage("assets/items/keys/key-square.png");
  swordLeft = loadImage("assets/items/sword/sword-left.png");
  greenDragonRight = loadImage("assets/enemies/green-dragon-v2.png");
  greenDragonLeft = loadImage("assets/enemies/green-dragon-v2-left.png");
}

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  worldRooms = [
    ["#","#","#",nwCorner,castleRedLocked,castleRoomLocked,"#","#","#","#","#"],
    ["#","#","#",swCorner,hallway,intersection,coinRoom,"#","#","#","#"],
    ["#","#","#","#","#",hallway3Door,keyHall,"#","#","#","#"]
  ];
  worldBackrounds = [
    ["#","#","#",nwCornerBlue,redCastleLocked,castleLocked,"#","#","#","#","#"],
    ["#","#","#",swCornerYellow,yellowHallway,yellowInt,yellowRoom,"#","#","#","#"],
    ["#","#","#","#","#",red3Door,redHall,"#","#","#","#"]
  ];
  worldPosX = 5;
  worldPosY = 0;
  character = new Player(width/2,height/2);
  dirsim = new Enemy(160, 210, greenDragonRight, greenDragonLeft, 5, worldRooms[1][5],false,1,"none","Dirsim");
  tergim = new Enemy(750,160,greenDragonRight,greenDragonLeft,5,worldRooms[0][3],true,1,"square-key","Tergim");
  sword = new Weapon("sword",900,500,swordRight,swordLeft,20,20,worldRooms[0][5]);
  coin = new Item("coin",100,450,theCoin,13,13,worldRooms[1][6]);
  keySquare = new Item("square-key",100,100,squareKey,21,7,worldRooms[2][6]);
  castle = castleLocked;
  currentBackground = castle;
  inventory = new Map();
  inventory.set("discard","none");
}

function draw() {
  updateWorld();
  background(currentBackground);
  character.rooms();
  character.display();
  character.unlock();
  coin.display();
  keySquare.display();
  dirsim.spawn();
  tergim.spawn();
  dirsim.flee();
  tergim.flee();
  dirsim.move();
  tergim.move();
  dirsim.display();
  tergim.display();
  dirsim.killPlayer();
  tergim.killPlayer();
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
    if (keyIsDown(49)) {
      if (inventory.has(1)) {
        inventory.set("holding", inventory.get(1));
      }
    }
    if (keyIsDown(50)) {
      if (inventory.has(2)) {
        inventory.set("holding",inventory.get(2));
      }
    }
    if (keyIsDown(51)) {
      if (inventory.has(3)) {
        inventory.set("holding",inventory.get(3));
      }
    }
    if (keyIsDown(32)) {
      if (inventory.has("holding")) {
        for (let i=1; i<4; i++) {
          if (inventory.get(i) === inventory.get("holding")) {
            inventory.set("discard",inventory.get(i));
            inventory.delete(i);
            inventory.delete("holding");
            return inventory;
          }
        }

      }
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

  unlock() {
    if (inventory.has("holding")) {
      if (inventory.get("holding") === keySquare.id) {
        if (grid === worldRooms[0][4]) {
          if (grid[this.posY-1][this.posX] === "G") {
            worldRooms[0][4] = castleRedUnlocked;
            worldBackrounds[0][4] = redCastleUnlocked;
          }
        }
      }
    }
  }

  death() {
    console.log("you are dead");
    this.alive = false;
  }
}

class Enemy {
  constructor(x,y,image1,image2,speed,room,flee,tier,fear,name) {
    this.x = x;
    this.y = y;
    this.imageRight = image1;
    this.imageLeft = image2;
    this.speed = speed;
    this.spawnRoom = room;
    this.alive = false;
    this.hasBeenKilled = false;
    this.willflee = flee;
    this.fleeing = false;
    this.tier = tier;
    this.fear = fear;
    this.name = name;
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
      if (this.fleeing) {
        if (character.x <= this.x) {
          image (this.imageRight, this.x, this.y, 64, 64);
        }
        else {
          image (this.imageLeft, this.x, this.y, 64, 64);
        }
      }
      else {
        if (character.x >= this.x) {
          image (this.imageRight, this.x, this.y, 64, 64);
        }
        else {
          image (this.imageLeft, this.x, this.y, 64, 64);
        }
      }
    }
  }

  move() {
    if (this.alive) {
      if (this.fleeing) {
        if (character.x + 10 > this.x + 64) {
          this.x -= this.speed/2;
        }
        if (character.y >= this.y + 10) {
          this.y -= this.speed/2;
          
        }
        if (character.x < this.x) {
          this.x += this.speed/2;
        }
        if (character.y < this.y) {
          this.y += this.speed/2;
        }
      }
      else {
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
  }

  flee() {
    if (this.willflee) {
      if (inventory.get("holding") === this.fear) {
        this.fleeing = true;
      }
      else {
        this.fleeing = false;
      }
    }
  }

  killPlayer() {
    if (this.alive) {
      if (character.x+10 > this.x && character.x < this.x +64 && character.y > this.y && character.y < this.y + 64) {
        if (inventory.get("holding") === "sword") {
          this.hasBeenKilled = true;
          console.log(this.name + " has been slain");
        }
        else {
          character.death();
        }
      }
    }
  }
}

class Item {
  constructor(id, x, y, image, sideX, sideY, room) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.image = image;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
    this.room = room;
    this.lastRoom;
  }
  
  display() {
    if (this.onGround) {
      if (grid === this.room) {
        image(this.image, this.x, this.y, this.sideX, this.sideY);
        this.pickup();
      }
      else if (grid === this.lastRoom) {
        image(this.image, this.x, this.y, this.sideX, this.sideY);
        this.pickup();
      }
    }
    else {
      if (inventory.get("holding") === this.id) {
        this.x = character.x;
        this.y = character.y-this.sideY;
        image(this.image,this.x,this.y,this.sideX,this.sideY);
        
      }
      if (inventory.get("discard") === this.id) {
        if (grid[character.posY][character.posX-2] === ".") {
          this.x -= 20;
          this.y = character.y;
          inventory.delete("discard");
          this.lastRoom = grid;
          this.onGround = true;
        }
        else if (grid[character.posY][character.posX+2] === "."){
          this.x += 30;
          this.y = character.y;
          inventory.delete("discard");
          this.lastRoom = grid;
          this.onGround = true;
        }
        else {
          this.y = character.y -= 20;
          inventory.delete("discard");
          this.lastRoom = grid;
          this.onGround = true;
        }
      }
    }
  }

  pickup() {
    for(let i=character.y; i<character.y+10; i++) {
      for(let j=character.x; j<character.x+10; j++) {
        if (i >= this.y && i <this.y+this.sideY ) {
          if (j >= this.x && j < this.x+this.sideX) {
            for (let k=1; k<4; k++) {
              if (inventory.has(k) === false) {
                this.onGround = false;
                inventory.set(k,this.id);
                if (inventory.get(1) === this.id) {
                  inventory.set("holding",this.id);
                }
                return inventory;
              }
            }
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



class Weapon {
  constructor(id, x, y, imageRight, imageLeft, sideX, sideY, room) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.imageRight = imageRight;
    this.imageLeft = imageLeft;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
    this.room = room;
    this.lastRoom;
  }

  display() {
    if (this.onGround) {
      if (grid === this.room) {
        image(this.imageRight, this.x, this.y, this.sideX, this.sideY);
        this.pickup();
      }
      else if (grid === this.lastRoom) {
        image(this.imageRight, this.x, this.y, this.sideX, this.sideY);
        this.pickup();
      }
    }
    else {
      if (inventory.get("holding") === this.id) {
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
      if (inventory.get("discard") === this.id) {
        if (grid[character.posY][character.posX-2] === ".") {
          this.x -= 20;
          this.y = character.y;
          inventory.delete("discard");
          this.lastRoom = grid;
          this.onGround = true;
        }
        else if (grid[character.posY][character.posX+2] === "."){
          this.x += 30;
          this.y = character.y;
          inventory.delete("discard");
          this.lastRoom = grid;
          this.onGround = true;
        }
        else {
          this.y = character.y -= 20;
          inventory.delete("discard");
          this.lastRoom = grid;
          this.onGround = true;
        }
      }
    }
  }

  pickup() {
    for(let i=character.y; i<character.y+10; i++) {
      for(let j=character.x; j<character.x+10; j++) {
        if (i >= this.y && i <this.y+this.sideY ) {
          if (j >= this.x && j < this.x+this.sideX) {
            for (let k=1; k<4; k++) {
              if (inventory.has(k) === false) {
                this.onGround = false;
                inventory.set(k,this.id);
                if (inventory.get(1) === this.id) {
                  inventory.set("holding",this.id);
                }
                return inventory;
              }
            }
          }
        }
      }
    }
  }
}