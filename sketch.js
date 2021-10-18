// Major Project
// Peter Sparks
// Oct 18 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let man;

function setup() {
  createCanvas(windowWidth, windowHeight);
  man = new Player(width/2,height/2);
}

function draw() {
  background(220);
  man.display();
  // for (let i=0; i<10; i++) {
  //   rect(50*i,10*i,50,100);
  // }
}

function keyTyped() {
  if (key === "w") {
    man.y -= man.speed;
  }
  else if (key === "s") {
    man.y += man.speed;
  }
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
}