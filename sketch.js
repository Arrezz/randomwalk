function setup() {
  frameRate(10);
  width = 1000;
  height = 1000;
  createCanvas(width,height);
  pos = createVector(width/2,height/2);
  prev = pos.copy();
  background(51);
}

function draw() {
  rand = random(3,75);
  leviJump = floor(random(100));
  randColour = floor(rand * 10);
  randColour1 = random(0,255);
  randColour2 = random(0,255);
  randColour3 = random(0,255);
  stroke(color(randColour1,randColour2,randColour3));
  line(pos.x, pos.y, prev.x, prev.y);
  prev = pos.copy();
  strokeWeight((1/rand)*75);


  var step = p5.Vector.random2D();
  step.mult(rand);
  // step.mult(3)
  //
  // if (leviJump < 3) {
  //   step.mult(25)
  // }

  pos.add(step)
  if (pos.x > height) {
         pos.x = height
  }
  if (pos.y > width) {
         pos.y = width
  }
  if (pos.x < 0) {
         pos.x = 0
  }
  if(pos.y < 0) {
         pos.y = 0
  }

  //var r = floor(random(4));
  //
  // switch (r) {
  //   case 0:
  //     if (leviJump < 3) {
  //         pos.x = pos.x + 10 * rand;
  //     }
  //     else {pos.x = pos.x + 1 * rand;}
  //     if (pos.x > height) {
  //       pos.x = height
  //     }
  //     break;
  //   case 1:
  //     if (leviJump < 3) {
  //       pos.x = pos.x - 10 * rand;
  //     }
  //     else {pos.x = pos.x - 1 * rand;}
  //     if (pos.x < 0) {
  //       pos.x = 0
  //     }
  //     break;
  //   case 2:
  //     if (leviJump < 3) {
  //       pos.y = pos.y + 10 * rand;
  //     }
  //     else {pos.y = pos.y + 1 * rand;}
  //     if (pos.y > width) {
  //       pos.y = width
  //     }
  //     break;
  //   case 3:
  //     if (leviJump < 3) {
  //       pos.y = pos.y - 10 * rand;
  //     }
  //     else {pos.y = pos.y - 1 * rand;}
  //     if(pos.y < 0) {
  //       pos.y = 0
  //     }
  //     break;
  // }
}
