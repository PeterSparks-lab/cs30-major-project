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
let back1_0;
let yellowHallway;
let vertYellowHall;
let red3Door;
let back2_0;
let back1_1;
let back1_2;
let dark3Door;
let redHall;
let yellowRoom;
let swCornerYellow;
let nwCornerBlue;
let redCastleLocked;
let caveUnlocked;
let redCastleUnlocked;
let blackCastleLocked;
let blackCastleUnlocked;
let caveEntrance;
let redInside;
let chestHall;
//.....................................................//
let swordRight;
let swordLeft;
let theLantern;
let theCoin;
let squareKey;
let roundKey;
let greenDragonRight;
let greenDragonLeft;
let blueDragonRight;
let blueDragonLeft;
//.....................................................//
let room1_5;
let room1_4;
let room1_0;
let room1_1;
let room1_2;
let room1_3;
let room0Locked;
let room0Unlocked;
let room3;
let room4Locked;
let room4Unlocked;
let room2;
let room1_6;
let room1_7Locked;
let room1_7Unlocked;
let room2_6;
let room5Locked;
let redInterior;
let room2_0;
let room2_1;
let room2_2;
let room2_3Locked;
let room2_3Unlocked;
let room2_4;
let room2_5;
let room2_7;
//.....................................................//
let grid;
let inventory;
let lockedRoom;
let lootItem;
let worldRooms;
let unlockedRooms;
let unlockedBackgrounds;
let worldBackrounds;
let currentRoom;
let worldPosX;
let worldPosY;
let inBuilding = false;
//.....................................................//
let character;
let coin;
let lantern;
let keySquare;
let keyRound;
let dirsim;
let tergim;
let sword;

function preload() {
  //load rooms from text files//
  //top//
  room0Locked = loadStrings("assets/rooms/top-row/room0-locked.txt");
  room0Unlocked = loadStrings("assets/rooms/top-row/room0-unlocked.txt");
  room2 = loadStrings("assets/rooms/top-row/room2.txt");
  room3 = loadStrings("assets/rooms/top-row/room3.txt");
  room4Locked = loadStrings("assets/rooms/top-row/room4-locked.txt");
  room4Unlocked = loadStrings("assets/rooms/top-row/room4-unlocked.txt");
  room5Locked = loadStrings("assets/rooms/top-row/room5-locked.txt");

  //mid//
  room1_0 = loadStrings("assets/rooms/mid-row/room-1-0.txt");
  room1_1 = loadStrings("assets/rooms/mid-row/room-1-1.txt");
  room1_2 = loadStrings("assets/rooms/mid-row/room-1-2.txt");
  room1_3 = loadStrings("assets/rooms/mid-row/room-1-3.txt");
  room1_4 = loadStrings("assets/rooms/mid-row/room-1-4.txt");
  room1_5 = loadStrings("assets/rooms/mid-row/room-1-5.txt");
  room1_6 = loadStrings("assets/rooms/mid-row/room-1-6.txt");
  room1_7Locked = loadStrings("assets/rooms/mid-row/room-1-7-locked.txt");
  room1_7Unlocked = loadStrings("assets/rooms/mid-row/room-1-7-unlocked.txt");
  
  //bottom//
  room2_0 = loadStrings("assets/rooms/bottom-row/room-2-0.txt");
  room2_1 = loadStrings("assets/rooms/bottom-row/room-2-1.txt");
  room2_2 = loadStrings("assets/rooms/bottom-row/room-2-2.txt");
  room2_3Locked = loadStrings("assets/rooms/bottom-row/room-2-3-locked.txt");
  room2_3Unlocked = loadStrings("assets/rooms/bottom-row/room-2-3-unlocked.txt");
  room2_4 = loadStrings("assets/rooms/bottom-row/room-2-4.txt");
  room2_5 = loadStrings("assets/rooms/bottom-row/room-2-5.txt");
  room2_6 = loadStrings("assets/rooms/bottom-row/room-2-6.txt");
  room2_7 = loadStrings("assets/rooms/bottom-row/room-2-7.txt");
  
  //interiors//
  redInterior = loadStrings("assets/rooms/interiors/red-interior.txt");


  //load backgrounds from assets folder//
  back1_0 = loadImage("assets/backgrounds/yellow/background-1-0.png");
  back1_1 = loadImage("assets/backgrounds/yellow/background-1-1.png");
  back1_2 = loadImage("assets/backgrounds/yellow/background-1-2.png");
  back2_0 = loadImage("assets/backgrounds/red/background-2-0.png");
  dark3Door = loadImage("assets/backgrounds/red/3-door-dark.png");
  redInside = loadImage("assets/backgrounds/castle/red-castle-inside.png");
  redCastleLocked = loadImage("assets/backgrounds/castle/red-castle-locked.png");
  redCastleUnlocked = loadImage("assets/backgrounds/castle/unlocked-red-castle.png");
  blackCastleLocked = loadImage("assets/backgrounds/castle/black-castle-locked.png");
  blackCastleUnlocked = loadImage("assets/backgrounds/castle/black-castle-unlocked.png");
  castleLocked = loadImage("assets/backgrounds/castle/castle-room-locked.png");
  yellowInt = loadImage("assets/backgrounds/yellow/yellow-intersection.png");
  yellowHallway = loadImage("assets/backgrounds/yellow/yellow-hallway.png");
  swCornerYellow = loadImage("assets/backgrounds/yellow/yellow-corner-sw.png");
  caveUnlocked = loadImage("assets/backgrounds/red/cave-room-unlocked.png");
  nwCornerBlue = loadImage("assets/backgrounds/blue/blue-corner-nw.png");
  red3Door = loadImage("assets/backgrounds/red/red-3-door.png");
  redHall = loadImage("assets/backgrounds/red/red-hallway.png");
  caveEntrance = loadImage("assets/backgrounds/red/cave-room-locked.png");
  vertYellowHall = loadImage("assets/backgrounds/yellow/ns-yellow-hallway.png");
  chestHall = loadImage("assets/backgrounds/yellow/chest-room.png");
  yellowRoom = loadImage("assets/backgrounds/yellow/yellow-room.png");
  swordRight = loadImage("assets/items/sword/sword-right.png");
  theCoin = loadImage("assets/items/coin/the-coin.png");
  squareKey = loadImage("assets/items/keys/key-square.png");
  roundKey = loadImage("assets/items/keys/round-key.png");
  swordLeft = loadImage("assets/items/sword/sword-left.png");
  theLantern = loadImage("assets/items//keys/lantern.png");
  greenDragonRight = loadImage("assets/enemies/green-dragon-v2.png");
  greenDragonLeft = loadImage("assets/enemies/green-dragon-v2-left.png");
  blueDragonRight = loadImage("assets/enemies/blue-dragon-right.png");
  blueDragonLeft = loadImage("assets/enemies/blue-dragon-left.png");
}

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);

  unlockedRooms = [
    [room0Unlocked,"#","#","#",room4Unlocked,"#","#","#","#","#","#"],
    ["#","#","#","#","#","#","#",room1_7Unlocked,"#","#","#"],
    ["#","#","#",room2_3Unlocked,"#","#","#","#","#","#","#"],
  ];

  unlockedBackgrounds = [
    [blackCastleUnlocked,"#","#","#",redCastleUnlocked,"#","#","#","#","#","#"],
    ["#","#","#","#","#","#","#",vertYellowHall,"#","#","#"],
    ["#","#","#",caveUnlocked,"#","#","#",vertYellowHall,"#","#","#"],
  ];

  worldRooms = [
    [room0Locked,"#",room2, room3, room4Locked, room5Locked,"#","#","#","#","#"],
    [room1_0,room1_1,room1_2, room1_3, room1_4, room1_5, room1_6,room1_7Locked,"#","#","#"],
    [room2_0,room2_1,room2_2,room2_3Locked, room2_4, room2_5, room2_6, room2_7,"#","#","#"]
  ];
  worldBackrounds = [
    [blackCastleLocked,"#","#",nwCornerBlue,redCastleLocked,castleLocked,"#","#","#","#","#"],
    [back1_0,back1_1,back1_2,swCornerYellow,yellowHallway,yellowInt,yellowRoom,chestHall,"#","#","#"],
    [back2_0,dark3Door,dark3Door,caveEntrance,redHall,red3Door,redHall,red3Door,"#","#","#"]
  ];
  worldPosX = 5;
  worldPosY = 0;
  character = new Player(width/2,height/2);
  dirsim = new Enemy(160, 210, greenDragonRight, greenDragonLeft, 5, worldRooms[1][5],false,1,"none","Dirsim");
  tergim = new Enemy(750,160,blueDragonRight,blueDragonLeft,5,worldRooms[0][3],true,2,"square-key","Tergim");
  sword = new Weapon("sword",900,500,swordRight,swordLeft,20,20,worldRooms[0][5],"none");
  coin = new Item("coin",100,450,theCoin,13,13,worldRooms[1][6],false);
  keySquare = new Item("square-key",100,100,squareKey,21,7,worldRooms[2][6],false);
  keyRound = new Item("round-key",100,100,roundKey,21,7,redInterior,true);
  lantern = new Item("lantern",80,120,theLantern,13,13,room1_7Unlocked,false);
  castle = castleLocked;
  currentBackground = castle;
  inventory = new Map();
  lockedRoom = new Map();
  lootItem = new Map();
  lootItem.set(room1_7Unlocked,lantern);
  lockedRoom.set(worldRooms[2][3],lantern.id);
  lockedRoom.set(worldRooms[0][4],keySquare.id);
  lockedRoom.set(worldRooms[1][7],keyRound.id);
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
  keyRound.display();
  if (worldRooms[1][7] === unlockedRooms[1][7]) {
    lantern.display();
  }
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
    if (keyIsDown(69)) {
      if (inventory.has("holding")) {
        if (inventory.get("holding") === "coin") {
          if (grid[this.posY][this.posX-1] === "$" || grid[this.posY+1][this.posX] === "$") {
            for (let i=1; i<4; i++) {
              if (inventory.get(i) === inventory.get("holding")) {
                inventory.set("discard",inventory.get(i));
                inventory.delete(i);
                inventory.delete("holding");
                coin.spent = true;
                keyRound.spent = false;
                return inventory;
              }
            }
          }
        }
      }
    }
  }

  rooms() {
    if (grid === room4Unlocked) {
      if (this.posX >= 48 && this.posX <= 51 && this.posY === 14) {
        inBuilding = true;
        this.x = 520;
        grid = redInterior;
        currentBackground = redInside;
      }
      else if (this.x === 0) {
        this.x = 940;
        if (worldRooms[worldPosY][worldPosX - 1] !== "#") {
          worldPosX -= 1;
        }
      }
    }
    else if (grid === redInterior) {
      if (this.y >520) {
        inBuilding = false;
        this.x = 480;
        this.y = 240;
        grid = worldRooms[0][4];
        currentBackground = worldBackrounds[0][4];
      }
    }
    else {
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
  }

  unlock() {
    if (inventory.has("holding")) {
      if (inventory.get("holding") === lockedRoom.get(grid)) {
        if (grid[this.posY-1][this.posX] === "G" || grid[this.posY+1][this.posX] === "G" || grid[this.posY][this.posX-1] === "G" || grid[this.posY][this.posX+1] === "G") {
          worldBackrounds[worldPosY][worldPosX] = unlockedBackgrounds[worldPosY][worldPosX];
          worldRooms[worldPosY][worldPosX] = unlockedRooms[worldPosY][worldPosX];
          for (let i=1; i<4; i++) {
            if (inventory.get(i) === inventory.get("holding")) {
              inventory.delete(i);
              inventory.delete("holding");
              return inventory;
            }
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
        if (this.y > 40 && this.y+64 < height-40 && this.x > 40 && this.x+64 < width-40) {

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
  constructor(id, x, y, image, sideX, sideY, room, onStart) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.image = image;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
    this.room = room;
    this.lastRoom;
    this.spent = onStart;
  }
  
  display() {
    if (this.spent === false) {
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
  }

  pickup() {
    if (this.spent === false) {
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
}

function updateWorld() {
  if (inBuilding === false) {
    grid = worldRooms[worldPosY][worldPosX];
    currentBackground = worldBackrounds[worldPosY][worldPosX];
  }
}



class Weapon {
  constructor(id, x, y, imageRight, imageLeft, sideX, sideY, room, previous) {
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
    this.previous = previous;
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
              if (inventory.has(k) && inventory.get(k) === this.previous) {
                inventory.set(k,this.id);
                if (inventory.get(1) === this.id) {
                  inventory.set("holding", this.id);
                }
              }
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