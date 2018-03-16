function setup() {
  createCanvas(600, 300);
  count = 1;
  frameRate(30);
  setwave();
}
function setwave() {
  waveloc = [];
  for (i = 0; i < 15; i++) {
    waveloc.push(new Wave(400, 0, 0 - i * 80));
  }
}
function o(x, y) {
  stroke(0);
  strokeWeight(2);
  fill(220, 100, 100);
  ellipse(x, y, 20, 20);
}
function h(x, y) {
  stroke(0);
  strokeWeight(2);
  fill(100, 100, 200);
  ellipse(x, y, 15, 15);
}
function e(x, y) {
  stroke(0);
  strokeWeight(2);
  fill(255, 226, 38);
  ellipse(x, y, 8);
}
var o1 = {
  x: 70,
  y: 50,
  charge: "-2"
};
var o2 = {
  x: 70,
  y: 125,
  charge: "-2"
};
var h1 = {
  x: o1.x + 10,
  y: o1.y - 8,
  charge: "+1"
};
var h2 = {
  x: o2.x + 10,
  y: o2.y - 8,
  charge: "+1"
};
var e1 = {
  x: 0,
  y: 0,
  charge: "-"
};
var e2 = {
  x: 0,
  y: 0,
  charge: "-"
};
var e3 = {
  x: 0,
  y: 0,
  charge: "-"
};
var e4 = {
  x: 0,
  y: 0,
  charge: "-"
};

var count;

function draw() {
  scale(1.5);
  background(220);
  one();
  if (click == 7) {
    click = 0;
    setwave();
    o1 = {
      x: 70,
      y: 50,
      charge: "-2"
    };
    o2 = {
      x: 70,
      y: 125,
      charge: "-2"
    };
    h1 = {
      x: o1.x + 10,
      y: o1.y - 8,
      charge: "+1"
    };
    h2 = {
      x: o2.x + 10,
      y: o2.y - 8,
      charge: "+1"
    };
    e1 = {
      x: 0,
      y: 0,
      charge: "-"
    };
    e2 = {
      x: 0,
      y: 0,
      charge: "-"
    };
    e3 = {
      x: 0,
      y: 0,
      charge: "-"
    };
    e4 = {
      x: 0,
      y: 0,
      charge: "-"
    };
  }
  if (click == 0) {
    noStroke();
    text("Two Negative Hydroxide ions", 220, 80);
    text("after two hydrogen ions broke off", 225, 100);
  }
  if (h1.x < 250 && click == 1) {
    h1.x += 2;
    h2.x += 2;
  }
  if (click == 1) {
    callwave();
  }
  if (o1.y < 80 && click == 3) {
    o1.y++;
    o2.y--;
  }
  if (click == 3) {
     noStroke();
    text("The oxygen ions join and bond", 220, 80);
  }
  if (click == 2) {
     noStroke();
    text("The hydrogen ions are", 200, 80);
    text("seperated by the electric field", 205, 100);
  }
  if (click == 4) {
     noStroke();
    text("The oxygen molecule emits", 220, 80);
    text(" 4 electrons to stabalize it's charge", 225, 100);
  }
  if (click == 4 && e1.x < 100) {
    e1.x += 1;
    e1.y -= 0.5;

    e2.x += 1;
    e2.y += 0.75;

    e3.x += 1;
    e3.y -= 0.5;

    e4.x += 1;
    e4.y += 0.75;

    o1.charge = "0";
    o2.charge = "0";
  }
  if (click == 5) {
    e1.y += 2;
    e2.y += 1;
    e3.y += 2;
    e4.y += 1;
    fill(0);
     noStroke();
    text("The electrons get absorbed", 220, 80);
    text("by the Anode, completing the circuit", 225, 100);
    fill(200);
    stroke(0);
    rect(0, 180, 398, 30);
    fill(0);
    text("Anode(+)", 200, 195);
  }
  fill(200);
  if (click == 6) {
    fill(0);
     noStroke();
    text("We are left with one O2 molecule and two hydrogen ions.", 200, 20);
    text("2OH⁻ → O2 + 2H+  + 4e⁻", 200, 180);
    stroke(0);
    strokeWeight(1);
    fill(100, 100, 200);
    ellipse(137, 159, 6);
    ellipse(152, 159, 6); 
    fill(220, 100, 100);
    ellipse(141.5, 162, 9);
    ellipse(156.5, 162, 9);
    ellipse(187, 162, 9);
    ellipse(193, 162, 9);
    fill(100, 100, 200);
    ellipse(215, 162, 6);
    ellipse(225, 162, 6);
    fill(255, 226, 38);
    ellipse(250, 162, 3.5);
    ellipse(255, 162, 3.5);
    ellipse(260, 162, 3.5);
    ellipse(265, 162, 3.5);
  }
}
function one() {
  if (click >= 4) {
    e(o1.x + e1.x, o1.y + e1.y);
    fill(0);
    textAlign(CENTER);
    strokeWeight(1);
    text(e1.charge, o1.x + e1.x, o1.x + e1.y); //electron1

    e(o1.x + e2.x, o1.y + e2.y);
    fill(0);
    textAlign(CENTER);
    strokeWeight(1);
    text(e2.charge, o1.x + e2.x, o1.x + e2.y); //electron2

    e(o2.x + e3.x, o2.y + e3.y);
    fill(0);
    textAlign(CENTER);
    strokeWeight(1);
    text(e3.charge, o2.x + e3.x, o2.x + e3.y); //electron3

    e(o2.x + e4.x, o2.y + e4.y);
    fill(0);
    textAlign(CENTER);
    strokeWeight(1);
    text(e4.charge, o2.x + e4.x, o2.x + e4.y); //electron4
  }
  h(h1.x, h1.y);
  fill(0);
  textAlign(CENTER);
  strokeWeight(1);
  text(h1.charge, h1.x + 20, h1.y); //molecule1 2nd hydrogen

  h(h2.x, h2.y);
  fill(0);
  textAlign(CENTER);
  strokeWeight(1);
  text(
    h2.charge,
    h2.x + 20,
    h2.y
  ); /*h(o1.x-10, o1.y-8);
  fill(0);
  textAlign(CENTER);
  text(h1.charge, o1.x-10, o1.y-8-15);//molecule1 1st hydrogen
  
  h(o2.x-10, o2.y-8);
  fill(0);
  textAlign(CENTER);
  text('+1', o2.x-10, o2.y-8-15);//molecule2 1st hydrogen
  */ //molecule2 2nd hydrogen

  o(o1.x, o1.y);
  fill(0);
  textAlign(CENTER);
  strokeWeight(1);
  text(o1.charge, o1.x - 5, o1.y - 14); //molecule1 oxygen

  o(o2.x, o2.y);
  fill(0);
  textAlign(CENTER);
  strokeWeight(1);
  text(o2.charge, o2.x, o2.y + 23); //molecule2 oxygen
}
click = 0;
document.onclick = function() {
  click++;
  console.log(click);
};
var waveloc = [];

function Wave(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}
waveloc.add = function(x, y, r) {
  waveloc.push(new Wave(x, y, r));
};
function callwave() {
  noFill();
  stroke(221, 203, 88);
  strokeWeight(4);
  for (i = 0; i < waveloc.length; i++) {
    if (waveloc[i].r >= 0) {
      ellipse(waveloc[i].x, waveloc[i].y, waveloc[i].r);
    }
    waveloc[i].r += 15;
  }
}
