// Major Project
// Peter Sparks
// Nov 5 2021

//Declare Global Variables.....................................................//
///State..............................................................///
let playGame;
///...................................................................///
///Backgrounds........................................................///
let castle;
let currentBackground;
let yellowCastleLocked;
let yellowCastleUnlocked;
let castleLocked;
let yellowInt;
let back1_0;
let yellowHallway;
let vertYellowHall;
let red3Door;
let back2_0;
let darkKey;
let back2;
let back1_1;
let back1_2;
let back2_8;
let dark3Door;
let redHall;
let back1Locked;
let back1Unlocked;
let yellowRoom;
let swCornerYellow;
let nwCornerBlue;
let redCastleLocked;
let caveUnlocked;
let back8;
let redCastleUnlocked;
let castleUnlocked;
let blackCastleLocked;
let blackCastleUnlocked;
let caveEntrance;
let blackInside;
let yellowInside;
let castleInside;
let redInside;
let back7;
let chestHall;
let back1_8;
let back1_9;
let back9;
let back_10Locked;
let back_10Unlocked;
let back2_9;
///...................................................................///
///Item and Enemy sprites.............................................///
let swordRight;
let swordLeft;
let sword2Left;
let sword2Right;
let lightSwordRight;
let lightSwordLeft;
let darkSwordRight;
let darkSwordLeft;
let theLantern;
let theCoin;
let squareKey;
let roundKey;
let triangleKey;
let finalKey;
let greenDragonRight;
let greenDragonLeft;
let blueDragonRight;
let blueDragonLeft;
let whiteDragonRight;
let whiteDragonLeft;
let blackDragonRight;
let blackDragonLeft;
///...................................................................///
///Rooms..............................................................///
////Top Row.........////
let room0Locked;
let room0Unlocked;
let room1Locked;
let room1Unlocked;
let room2;
let room3;
let room4Locked;
let room4Unlocked;
let room5Locked;
let room5Unlocked;
let room6Locked;
let room6Unlocked;
let room7;
let room8;
let room9;
let room10Locked;
let room10Unlocked;
////................////
////Middle Row......////
let room1_0;
let room1_1;
let room1_2;
let room1_3;
let room1_4;
let room1_5;
let room1_6;
let room1_7Locked;
let room1_7Unlocked;
let room1_8;
let room1_9;
let room1_10;
////................////
////Bottom Row......////
let room2_0;
let room2_1;
let room2_2;
let room2_3Locked;
let room2_3Unlocked;
let room2_4;
let room2_5;
let room2_6;
let room2_7;
let room2_8;
let room2_9;
let room2_10;
////................////
////Interiors.......////
let redInterior;
let blackInterior;
let yellowInterior;
let castleInterior;
////................////
///...................................................................///


///Music..............................................................///
let music;
let playing = false;
///...................................................................///
///Declare Maps.......................................................///
let inventory;
let intBackgrounds;
let lockedRoom;
let lootItem;
///...................................................................///
///Important Stuff(Arrays&s=Such).....................................///
let grid;
let worldRooms;
let unlockedRooms;
let unlockedBackgrounds;
let worldBackrounds;
let currentRoom;
let worldPosX;
let worldPosY;
let inBuilding = false;
///...................................................................///
///Declare Objects....................................................///
////Player..........////
let character;
////................////
////Coin............////
let coin;
////................////
////Keys............////
let lantern;
let keySquare;
let keyRound;
let keyDark;
let keyTriangle;
let keyFinal;
////................////
////Dragons.........////
let dirsim;
let tergim;
let datheg;
let kezyg;
let gusar;
let ygir;
let andisdud;
////................////
////Swords..........////
let basicSword;
let sturdySword;
let darkSword;
let lightSword;
////................////
///...................................................................///
//...........................................................................//

function preload() {
  //Music//
  music = loadSound("assets/music/BeepBox-Song (1).wav");
  //.....//

  //load rooms from text files//
  //top//
  room0Locked = loadStrings("assets/rooms/top-row/room0-locked.txt");
  room0Unlocked = loadStrings("assets/rooms/top-row/room0-unlocked.txt");
  room1Locked = loadStrings("assets/rooms/top-row/room1-locked.txt");
  room1Unlocked = loadStrings("assets/rooms/top-row/room1-unlocked.txt");
  room2 = loadStrings("assets/rooms/top-row/room2.txt");
  room3 = loadStrings("assets/rooms/top-row/room3.txt");
  room4Locked = loadStrings("assets/rooms/top-row/room4-locked.txt");
  room4Unlocked = loadStrings("assets/rooms/top-row/room4-unlocked.txt");
  room5Locked = loadStrings("assets/rooms/top-row/room5-locked.txt");
  room5Unlocked = loadStrings("assets/rooms/top-row/room5-unlocked.txt");
  room6Locked = loadStrings("assets/rooms/top-row/room6-locked.txt");
  room6Unlocked = loadStrings("assets/rooms/top-row/room6-unlocked.txt");
  room7 = loadStrings("assets/rooms/top-row/room7.txt");
  room8 = loadStrings("assets/rooms/top-row/room8.txt");
  room9 = loadStrings("assets/rooms/top-row/room9.txt");
  room10Locked = loadStrings("assets/rooms/top-row/room10-locked.txt");
  room10Unlocked = loadStrings("assets/rooms/top-row/room10-unlocked.txt");


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
  room1_8 = loadStrings("assets/rooms/mid-row/room-1-8.txt");
  room1_9 = loadStrings("assets/rooms/mid-row/room-1-9.txt");
  room1_10 = loadStrings("assets/rooms/mid-row/room-1-10.txt");
  
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
  room2_8 = loadStrings("assets/rooms/bottom-row/room-2-8.txt");
  room2_9 = loadStrings("assets/rooms/bottom-row/room-2-9.txt");
  room2_10 = loadStrings("assets/rooms/bottom-row/room-2-10.txt");
  
  //interiors//
  redInterior = loadStrings("assets/rooms/interiors/red-interior.txt");
  blackInterior = loadStrings("assets/rooms/interiors/black-interior.txt");
  yellowInterior = loadStrings("assets/rooms/interiors/yellow-interior.txt");
  castleInterior = loadStrings("assets/rooms/interiors/castle-interior.txt");

  //load backgrounds and sprites from assets folder//
  yellowInside = loadImage("assets/backgrounds/castle/yellow-inside.png");
  blackInside = loadImage("assets/backgrounds/castle/black-inside.png");
  back1_0 = loadImage("assets/backgrounds/yellow/background-1-0.png");
  back2 = loadImage("assets/backgrounds/blue/back-2.png");
  back1Locked = loadImage("assets/backgrounds/blue/back-1-locked.png");
  finalKey = loadImage("assets/items/keys/final-key.png");
  back1Unlocked = loadImage("assets/backgrounds/blue/back-1-unlocked.png");
  back2_9 = loadImage("assets/backgrounds/red/back-2-9.png");
  back7 = loadImage("assets/backgrounds/blue/back-0-7-v2.png");
  back1_9 = loadImage("assets/backgrounds/yellow/back-1-9.png");
  back1_1 = loadImage("assets/backgrounds/yellow/background-1-1.png");
  back9 = loadImage("assets/backgrounds/blue/back-0-9.png");
  castleUnlocked = loadImage("assets/backgrounds/castle/castle-room-unlocked.png");
  yellowCastleLocked = loadImage("assets/backgrounds/castle/yellow-castle.png");
  yellowCastleUnlocked = loadImage("assets/backgrounds/castle/yellow-castle-unlocked.png");
  triangleKey = loadImage("assets/items/keys/key-triangle.png");
  back1_2 = loadImage("assets/backgrounds/yellow/background-1-2.png");
  back2_0 = loadImage("assets/backgrounds/red/background-2-0.png");
  dark3Door = loadImage("assets/backgrounds/red/3-door-dark.png");
  redInside = loadImage("assets/backgrounds/castle/red-castle-inside.png");
  redCastleLocked = loadImage("assets/backgrounds/castle/red-castle-locked.png");
  redCastleUnlocked = loadImage("assets/backgrounds/castle/unlocked-red-castle.png");
  blackCastleLocked = loadImage("assets/backgrounds/castle/black-castle-locked.png");
  back2_8 = loadImage("assets/backgrounds/red/back-2-8.png");
  back8 = loadImage("assets/backgrounds/blue/back-0-8.png");
  blackCastleUnlocked = loadImage("assets/backgrounds/castle/black-castle-unlocked.png");
  castleLocked = loadImage("assets/backgrounds/castle/castle-room-locked.png");
  yellowInt = loadImage("assets/backgrounds/yellow/yellow-intersection.png");
  yellowHallway = loadImage("assets/backgrounds/yellow/yellow-hallway.png");
  swCornerYellow = loadImage("assets/backgrounds/yellow/yellow-corner-sw.png");
  caveUnlocked = loadImage("assets/backgrounds/red/cave-room-unlocked-v2.png");
  nwCornerBlue = loadImage("assets/backgrounds/blue/blue-corner-nw.png");
  back_10Locked = loadImage("assets/backgrounds/blue/back-0-10-locked.png");
  back_10Unlocked = loadImage("assets/backgrounds/blue/back-0-10-unlocked.png");
  red3Door = loadImage("assets/backgrounds/red/red-3-door.png");
  redHall = loadImage("assets/backgrounds/red/red-hallway.png");
  back1_8 = loadImage("assets/backgrounds/yellow/back-1-8.png");
  darkKey = loadImage("assets/items/keys/key-dark.png");
  caveEntrance = loadImage("assets/backgrounds/red/cave-room-locked-v2.png");
  vertYellowHall = loadImage("assets/backgrounds/yellow/ns-yellow-hallway-v2.png");
  chestHall = loadImage("assets/backgrounds/yellow/chest-room-v3.png");
  yellowRoom = loadImage("assets/backgrounds/yellow/yellow-room.png");
  theCoin = loadImage("assets/items/coin/the-coin.png");
  squareKey = loadImage("assets/items/keys/key-square.png");
  roundKey = loadImage("assets/items/keys/round-key.png");
  swordRight = loadImage("assets/items/swords/basic-sword/sword-right.png");
  swordLeft = loadImage("assets/items/swords/basic-sword/sword-left.png");
  sword2Left = loadImage("assets/items/swords/sturdy-sword/sword2-left.png");
  sword2Right = loadImage("assets/items/swords/sturdy-sword/sword2-right.png");
  darkSwordRight = loadImage("assets/items/swords/dark-sword/dark-sword-right.png");
  darkSwordLeft = loadImage("assets/items/swords/dark-sword/dark-sword-left.png");
  lightSwordRight = loadImage("assets/items/swords/light-sword/light-sword-right.png");
  lightSwordLeft = loadImage("assets/items/swords/light-sword/light-sword-left.png");
  theLantern = loadImage("assets/items//keys/lantern.png");
  greenDragonRight = loadImage("assets/enemies/green-dragon-v2-right.png");
  greenDragonLeft = loadImage("assets/enemies/green-dragon-v2-left.png");
  blueDragonRight = loadImage("assets/enemies/blue-dragon-right.png");
  blueDragonLeft = loadImage("assets/enemies/blue-dragon-left.png");
  whiteDragonRight = loadImage("assets/enemies/white-dragon-right.png");
  whiteDragonLeft = loadImage("assets/enemies/white-dragon-left.png");
  blackDragonRight = loadImage("assets/enemies/black-dragon-right.png");
  blackDragonLeft = loadImage("assets/enemies/black-dragon-left.png");
}

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  playGame = true;

  unlockedRooms = [
    [room0Unlocked,room1Unlocked,"#","#",room4Unlocked,room5Unlocked,room6Unlocked,"#","#","#",room10Unlocked],
    ["#","#","#","#","#","#","#",room1_7Unlocked,"#","#","#"],
    ["#","#","#",room2_3Unlocked,"#","#","#","#","#","#","#"],
  ];

  unlockedBackgrounds = [
    [blackCastleUnlocked,back1Unlocked,"#","#",redCastleUnlocked,castleUnlocked,yellowCastleUnlocked,"#","#","#",back_10Unlocked],
    ["#","#","#","#","#","#","#",vertYellowHall,"#","#","#"],
    ["#","#","#",caveUnlocked,"#","#","#",vertYellowHall,"#","#","#"],
  ];

  worldRooms = [
    [room0Locked,room1Locked,room2, room3, room4Locked, room5Locked,room6Locked,room7,room8,room9,room10Locked],
    [room1_0,room1_1,room1_2, room1_3, room1_4, room1_5, room1_6,room1_7Locked,room1_8,room1_9,room1_10],
    [room2_0,room2_1,room2_2,room2_3Locked, room2_4, room2_5, room2_6, room2_7,room2_8,room2_9,room2_10]
  ];
  worldBackrounds = [
    [blackCastleLocked,back1Locked,back2,nwCornerBlue,redCastleLocked,castleLocked,yellowCastleLocked,back7,back8,back9,back_10Locked],
    [back1_0,back1_1,back1_2,swCornerYellow,yellowHallway,yellowInt,yellowRoom,chestHall,back1_8,back1_9,vertYellowHall],
    [back2_0,dark3Door,dark3Door,caveEntrance,redHall,red3Door,redHall,red3Door,back2_8,back2_9,back2_8]
  ];
  worldPosX = 5;
  worldPosY = 0;
  character = new Player(width/2,height/2);
  dirsim = new Enemy(160, 210, greenDragonRight, greenDragonLeft, 5, worldRooms[1][5],false,1,"none","Dirsim");
  tergim = new Enemy(750,160,blueDragonRight,blueDragonLeft,5,worldRooms[0][3],true,2,"square-key","Tergim");
  kezyg = new Enemy(100,100,greenDragonRight,greenDragonLeft,5,worldRooms[0][3],true,1,"darkSword","Kezyg");
  datheg = new Enemy(100,100,blueDragonRight,blueDragonLeft,5,worldRooms[1][0],true,2,"coin","Datheg");
  gusar = new Enemy(100,100,greenDragonRight,greenDragonLeft,5,worldRooms[2][8],true,1,"sword2","Gusar");
  ygir = new Boss(100,100,whiteDragonRight,whiteDragonLeft,5,0,10,3,"Ygir, Protector Of The Sky");
  andisdud = new Boss(544,206,blackDragonRight,blackDragonLeft,5,0,1,4,"Andisdud, Champion Of The Darkness");
  basicSword = new Item("sword","weapon",1,900,500,swordRight,swordLeft,20,20,worldRooms[0][5],false);
  coin = new Item("coin","coin",0,100,450,theCoin,theCoin,13,13,worldRooms[1][6],false);
  keySquare = new Item("square-key","key",0,100,100,squareKey,squareKey,21,7,worldRooms[2][6],false);
  keyRound = new Item("round-key","key",0,100,100,roundKey,roundKey,21,7,redInterior,true);
  keyDark = new Item("dark-key","key",0,100,100,darkKey,darkKey,21,7,worldRooms[0][8],false);
  keyTriangle = new Item("triangle-key","key",0,100,100,triangleKey,triangleKey,21,7,worldRooms[0][2],false);
  keyFinal = new Item("final-key","key",0,100,100,finalKey,finalKey,21,7,yellowInterior,false);
  lantern = new Item("lantern","key",0,80,120,theLantern,theLantern,13,13,room1_7Unlocked,false);
  sturdySword = new Item("sword2","weapon",2,100,100,sword2Right,sword2Left,20,19,worldRooms[2][4],false);
  darkSword = new Item("darkSword","weapon",3,100,100,darkSwordRight,darkSwordLeft,20,19,worldRooms[1][1],false);
  lightSword = new Item("lightSword","weapon",4,100,100,lightSwordRight,lightSwordLeft,20,19,blackInterior,false);
  castle = castleLocked;
  currentBackground = castle;
  inventory = new Map();
  lockedRoom = new Map();
  lootItem = new Map();
  intBackgrounds = new Map();
  intBackgrounds.set(redInterior,redInside);
  intBackgrounds.set(blackInterior,blackInside);
  intBackgrounds.set(yellowInterior,yellowInside);
  intBackgrounds.set(castleInterior,blackInside);
  lootItem.set(room1_7Unlocked,lantern);
  lootItem.set(redInterior,keyRound);
  lockedRoom.set(worldRooms[0][0],keyDark);
  lockedRoom.set(worldRooms[0][4],keySquare);
  lockedRoom.set(worldRooms[0][6],keyTriangle);
  lockedRoom.set(worldRooms[1][7],keyRound);
  lockedRoom.set(worldRooms[2][3],lantern);
  lockedRoom.set(worldRooms[0][5],keyFinal);
  lockedRoom.set(redInterior,coin);
  inventory.set("discard","none");
}

function draw() {
  if (playGame) {
    updateWorld();
    background(currentBackground);
    character.rooms();
    character.display();
    coin.display();
    keySquare.display();
    keyRound.display();
    keyDark.display();
    keyTriangle.display();
    lantern.display();
    dirsim.exist();
    tergim.exist();
    kezyg.exist();
    datheg.exist();
    gusar.exist();
    ygir.exist();
    andisdud.exist();
    character.position();
    character.inputHandler();
    basicSword.display();
    sturdySword.display();
    darkSword.display();
    lightSword.display();
    keyFinal.display();
  }
  else {
    background("black");
    fill("red");
    textSize(20);
    text("You Died",480,270);
  }
}

//Player class//
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
  //displays player//
  display() {
    noStroke();
    fill("blue");
    rect(this.x, this.y, this.size, this.size);
  }

  //determines position in the grid//
  position() {
    this.posX = Math.floor(this.x/10);
    this.posY = Math.floor(this.y/10);
  }
  
  //take user input
  inputHandler() {
    if (keyIsPressed) {
      if (playing === false) {
        music.play();
        music.loop();
        playing = true;
      }
    }
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
      this.unlock();
    }
  }

  //change which room in the game world the player is in//
  rooms() {
    if (grid === room4Unlocked && this.posX >= 46 && this.posX <= 51 && this.posY === 14) {
      inBuilding = true;
      this.x = 520;
      grid = redInterior;
    }
    else if (grid === room0Unlocked && this.posX >= 46 && this.posX <= 49 && this.posY <= 27 && this.posY >= 24) {
      inBuilding = true;
      this.x = 520;
      grid = blackInterior;
    }
    else if (grid === room6Unlocked && this.posX >= 46 && this.posX <= 49 && this.posY <= 27 && this.posY >= 24) {
      inBuilding = true;
      this.x = 520;
      grid = yellowInterior;
    }
    else if (grid === redInterior) {
      if (this.y >520) {
        inBuilding = false;
        grid = worldRooms[0][4];
        this.x = 480;
        this.y = 240;
      }
    }
    else if (grid === blackInterior) {
      if (this.y >520) {
        inBuilding = false;
        grid = worldRooms[0][0];
        this.x = 480;
        this.y = 290;
      }
    }
    else if (grid === yellowInterior) {
      if (this.y >520) {
        inBuilding = false;
        grid = worldRooms[0][6];
        this.x = 480;
        this.y = 290;
      }
    }
    else if (grid === room5Unlocked && this.posX >= 46 && this.posX <= 51 && this.posY === 14) {
      inBuilding = true;
      this.x = 520;
      grid = castleInterior;
    }
    else if (grid === castleInterior) {
      text("YOU WIN!",480,270);
      if (this.y >520) {
        inBuilding = false;
        grid = worldRooms[0][5];
        this.x = 480;
        this.y = 240;
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
      if (this.x >= 950) {
        this.x = 20;
        if (worldRooms[worldPosY][worldPosX + 1] !== "#") {
          worldPosX += 1;
        }
      }
      if (this.x === 0) {
        this.x = 930;
        if (worldRooms[worldPosY][worldPosX - 1] !== "#") {
          worldPosX -= 1;
        }
      }

    }
  }


  //unlocks rooms//
  unlock() {
    if (inventory.has("holding")) {
      if (inventory.get("holding") === lockedRoom.get(grid)) {
        if (grid[this.posY-1][this.posX] === "G" || grid[this.posY+1][this.posX] === "G" || grid[this.posY][this.posX-1] === "G" || grid[this.posY][this.posX+1] === "G") {
          worldBackrounds[worldPosY][worldPosX] = unlockedBackgrounds[worldPosY][worldPosX];
          worldRooms[worldPosY][worldPosX] = unlockedRooms[worldPosY][worldPosX];
          if (lootItem.has(grid)) {
            lootItem.get(grid).used = false;
          }
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

  //kills player//
  death() {
    console.log("you are dead");
    this.alive = false;
    playGame = false;
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

  //calls functions//
  exist() {
    this.spawn();
    this.display();
    this.move();
    this.flee();
    this.killOrDie();
  }
  
  //spawns the enemy//
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

  //displays the enemy//
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

  //moves the enemy//
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

  //enemies will flee if frightened//
  flee() {
    if (this.willflee) {
      if (inventory.has("holding")) {
        if (inventory.get("holding").id === this.fear) {
          this.fleeing = true;
        }
        else {
          this.fleeing = false;
        }
      }
    }
  }

  //either the enemy or the player dies
  killOrDie() {
    if (this.alive) {
      if (character.x+10 > this.x && character.x < this.x +64 && character.y > this.y - 5 && character.y < this.y + 64) {
        if (inventory.has("holding")) {
          if (inventory.get("holding").type === "weapon") {
            if (inventory.get("holding").tier >= this.tier) {
              this.hasBeenKilled = true;
              console.log(this.name + " has been slain");
            }
            else {
              character.death();
            }
          }
          else {
            character.death();
          }
        }
        else {
          character.death();
        }
      }
    }
  }
}


class Boss {
  constructor(x,y,imageRight,imageLeft,speed,roomY,roomX,tier,name) {
    this.x = x;
    this.y = y;
    this.imageRight = imageRight;
    this.imageLeft = imageLeft;
    this.speed = speed;
    this.roomX = roomX;
    this.roomY = roomY;
    this.tier = tier,
    this.name = name;
    this.killed = false;
  }

  // calls functions//
  exist() {
    this.spawn();
    this.display();
    this.move();
    this.killOrDie();
  }
  
  //spawns the boss
  spawn() {
    if (!this.killed) {
      if (grid === worldRooms[this.roomY][this.roomX]) {
        this.alive = true;
      }
      else {
        this.alive = false;
      }
    }
    else {
      this.alive = false;
      worldRooms[this.roomY][this.roomX] = unlockedRooms[this.roomY][this.roomX];
      worldBackrounds[this.roomY][this.roomX] = unlockedBackgrounds[this.roomY][this.roomX];
    }
    
  }

  //displays the boss//
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

  //moves the boss//
  move() {
    if (this.alive) {
      if (this.y > 40 && this.y+64 < height-40 && this.x > 40 && this.x+64 < width-40) {
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


  //either the boss or the player dies//
  killOrDie() {
    if (this.alive) {
      if (character.x+10 > this.x && character.x < this.x +64 && character.y > this.y - 5 && character.y < this.y + 64) {
        if (inventory.has("holding")) {
          if (inventory.get("holding").type === "weapon") {
            if (inventory.get("holding").tier >= this.tier) {
              this.killed = true;
              console.log(this.name + " has been slain");
            }
            else {
              character.death();
            }
          }
          else {
            character.death();
          }
        }
      }
    }
  }
}




class Item {
  constructor(id, type, tier, x, y, imageRight, imageLeft, sideX, sideY, room, used) {
    this.id = id;
    this.type = type;
    this.tier = tier;
    this.x = x;
    this.y = y;
    this.imageRight = imageRight;
    this.imageLeft = imageLeft;
    this.sideX = sideX;
    this.sideY = sideY;
    this.onGround = true;
    this.room = room;
    this.used = used;
  }
  
  //displays the item//
  display() {
    if (this.used === false) {
      if (this.onGround) {
        if (grid === this.room) {
          image(this.imageRight, this.x, this.y, this.sideX, this.sideY);
          this.pickup();
        }
      }
      else {
        if (inventory.get("holding") === this) {
          if (this.type === "weapon") {
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
          else {
            this.x = character.x;
            this.y = character.y-this.sideY;
            image(this.imageRight,this.x,this.y,this.sideX,this.sideY);
          }
          
        }
        if (inventory.get("discard") === this) {
          if (grid[character.posY][character.posX-2] === ".") {
            this.x -= 20;
            this.y = character.y;
            inventory.delete("discard");
            this.room = grid;
            this.onGround = true;
          }
          else if (grid[character.posY][character.posX+2] === "."){
            this.x += 30;
            this.y = character.y;
            inventory.delete("discard");
            this.room = grid;
            this.onGround = true;
          }
          else {
            this.y = character.y -= 20;
            inventory.delete("discard");
            this.room = grid;
            this.onGround = true;
          }
        }
      }
    }
  }

  //if there is space in the inventory the item is picked up//
  pickup() {
    if (this.used === false) {
      for(let i=character.y; i<character.y+10; i++) {
        for(let j=character.x; j<character.x+10; j++) {
          if (i >= this.y && i <this.y+this.sideY ) {
            if (j >= this.x && j < this.x+this.sideX) {
              for (let k=1; k<4; k++) {
                if (inventory.has(k) === false) {
                  this.onGround = false;
                  inventory.set(k,this);
                  if (inventory.get(1) === this) {
                    inventory.set("holding",this);
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

//updates the grid and the background//
function updateWorld() {
  if (inBuilding === false) {
    grid = worldRooms[worldPosY][worldPosX];
    currentBackground = worldBackrounds[worldPosY][worldPosX];
  }
  else {
    currentBackground = intBackgrounds.get(grid);
  }
}

//unlocks all the rooms//
function cheatUnlock() {
  for (let y=0; y<3; y++) {
    for (let x=0; x<11; x++) {
      if (unlockedRooms[y][x] !== "#") {
        worldRooms[y][x] = unlockedRooms[y][x];
        worldBackrounds[y][x] = unlockedBackgrounds[y][x];
        
      }
    }
  }
}

//teleports the player between rooms//
function warp(y,x) {
  if (x >=0 && x<= 10 && y >= 0 && y <= 2) {
    worldPosX = x;
    worldPosY = y;
  }
}