function o(x,y) {
  stroke(0);
  strokeWeight(2);
  fill(220, 100, 100);
  ellipse(x, y, 20, 20);
}
function h(x,y) {
  stroke(0);
  strokeWeight(2);
  fill(100, 100, 200);
  ellipse(x, y, 15, 15);
}
function e(x, y) {
  stroke(0);
  strokeWeight(2);
  fill(0);
  ellipse(x, y, 10, 10);
}
var o1 = {
  x: 70,
  y: 60
};
var o2 = {
  x: 70,
  y: 140
};
var h1 = {
  x: o1.x+10,
  y: o1.y-8,
  charge: '+1'
};
var h2 = {
  x: o2.x+10,
  y: o2.y-8,
  charge: '+1'
};
var e1 = {
  x: 50,
  y: -10
};
var e2 = {
  x: 50,
  y: -10
}
var count;
function setup() {
  createCanvas(600, 300);
  count=0;
  go = false;
  frameRate(20);
}
function draw() {
  background(220);
  push();
  scale(1.5);
  one();
  pop();
}
function one() {
  //the cathode rectangle at the top
  fill(150);
  rect(0,0,canvas.width, 20);
  fill(0);
  noStroke();
  text('Cathode', canvas.width/3, 15);
  //the hydrogen atoms that will move
  h(h1.x, h1.y);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text(h1.charge, h1.x, h1.y - 15);
  h(h2.x, h2.y);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text(h2.charge, h2.x, h2.y - 15);
  //the oh molecule
  h(o1.x-10, o1.y-8);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text('+1', o1.x-10, o1.y-8-15); //first h
  h(o2.x-10, o2.y-8);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text('+1', o2.x-10, o2.y-8-15); //second h
  o(o1.x, o1.y);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text('-2', o1.x, o1.y+23); //first o
  o(o2.x, o2.y);
  fill(0);
  textAlign(CENTER);
  noStroke();
  text('-2', o2.x, o2.y+23); //first o
  //movement of two h's away from oh
  if(h1.x < 200 && count>0) {
    h1.x++;
  }
  if(h2.x < 200 && count>0) {
    h2.x++;
  }
  if(h1.x > e1.x && h1.x < 200 && count>0) { //movement of electrons to the h atoms to combine
    e1.x+=1.2;
    e1.y+=0.5;
    e(e1.x, e1.y);
    textAlign(CENTER);
    noStroke();
    text('-', e1.x, e1.y - 7);
  }else if(h1.x >= 200){ //when they are at the correct place the h1 charge is neutralized
    h1.charge='0';
  }
  if(h2.x > e2.x && h2.x < 200 && count>0) { //movement of electrons to the h atoms to combine
    e2.x+=1.2;
    e2.y+=1.2;
    e(e2.x, e2.y);
    textAlign(CENTER);
    noStroke();
    text('-', e2.x, e2.y - 7);
  }else if(h2.x >= 200) {
    h2.charge='0'; //when they are at the correct place the h2 charge is neutralized
  }
  if(h1.x >= 200 && h1.x < 250 && count>1) { //move the neutral h atoms to combine
    h1.x++;
    h1.y+=0.8;
  }
  if(h2.x >= 200 && h2.x < 262 && count>1) { //move the neutral h atoms to combine
    h2.x +=1.25;
    h2.y -= 0.8;
  }
  if(count == 0) {
    text('These are two water molecules. The hydrogens, have a +1 charge, while the Oxygens have a -2 charge.', canvas.width/4, canvas.height/4, 200, 300);
  }else if(count == 1) {
    text('The electricity breaks the bond in the water leaving a hydrogen ion (H+) and a hydroxide ion (OH-). The hydrogen ions go and combine with an electron due to the opposite charges attracting and become neutral.', canvas.width*2/5, canvas.height/8, 150, 300);
  }else if(count == 2) {
    text('The hydrogens, now neutral are now unstable because it is diatomic and they bond with each other to form an H2 molecule.', canvas.width*1/6, canvas.height/2, 275, 300);
  }else if(count == 3) {
    text('The equation from this is 2H2O + 2e- → 2OH- + H2', canvas.width*1/3, canvas.height*3/5);
  }
}
function mouseClicked() {
  count++;
  if(count > 3) {
    reset();
  }
}
function reset() {
  o1 = {
    x: 70,
    y: 60
  };
  o2 = {
    x: 70,
    y: 140
  };
  h1 = {
    x: o1.x+10,
    y: o1.y-8,
    charge: '+1'
  };
  h2 = {
    x: o2.x+10,
    y: o2.y-8,
    charge: '+1'
  };
  e1 = {
    x: 50,
    y: -10
  };
  e2 = {
    x: 50,
    y: -10
  };
  count=0;
}
 
