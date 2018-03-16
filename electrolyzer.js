// MAKE GROWING EVERY TIME
function setup() {
	e1.x = 515;
	e1.y = 245;
	e2.x = 485;
	e2.y = 245;

	createCanvas(600, 300);
	frameRate(60);
	addgas(185, 100);
	addgas(510, 100);
	addbubbles(200, 200, 5);
	addbubbles(510, 200, 5);
	fram = floor(frameCount / 20);
	leftdone=1;
	rightdone=1;
}
var pressx=300;
var pressy=150;
function draw() {
	translate(pressx-test*pressx,pressy-test*pressy);
	push();
	scale(test);
	focus();
	pop();
	if(click==1 && test<2){
		test+=0.04;
	} else if(click==0 && test>1){
		test-=0.04
	}
}
var zoom=1;
/*
THIS IS THE DRAW LOOP
*/
var click=0
function mousePressed(){
	if(click===0){
		click=1;
		pressx=mouseX;
	pressy=mouseY;
		console.log(click)
	} else {
		click=0;
		console.log(click)
	}
}
function o(x, y, f, s) {
	stroke(0);
	strokeWeight(s);
	fill(220, 100, 100, f);
	ellipse(x, y, 12);
}
function h(x, y, f, s) {
	stroke(0);
	strokeWeight(s);
	fill(100, 100, 200, f);
	ellipse(x, y, 8);
}
function e(x, y) {
	stroke(0);
	strokeWeight(1);
	fill(255, 226, 38);
	ellipse(x, y, 4);
}
var fram;
var count = 0;
function addbubbles(x, y, c) {
	for (i = 0; i < c; i++) {
		bubbles.add(
			random(x, x + 20),
			random(y, y + 20),
			random(4, 15),
			random(120, 200)
		);
	}
}
function addgas(x, y) {
	for (i = 0; i < 10; i++) {
		gas.add(
			random(x, x + 50),
			random(y, y + 50),
			random(20, 70),
			random(80, 150)
		);
	}
}
var o1 = {
	x: 0,
	y: 0,
	charge: "-2"
};
var o2 = {
	x: 0,
	y: 0,
	charge: "-2"
};
var h1 = {
	x: -7,
	y: -4.5,
	charge: "+1"
};
var h2 = {
	x: 7,
	y: -4.5,
	charge: "+1"
};
var h3 = {
	x: -7,
	y: -4.5,
	charge: "+1"
};
var h4 = {
	x: 7,
	y: -4.5,
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
var e5 = {
	x: 0,
	y: 0,
	charge: "-"
};
var e6 = {
	x: 0,
	y: 0,
	charge: "-"
};
var test = 1;
var fade1 = 1;
function molecule1(x, y) {
	h(h2.x + x, h2.y + y, faderight, fade1);
	h(h1.x + x, h1.y + y, fadeleft, fade1);
	o(o1.x + x, o1.y + y, fadeleft, fade1);
}
function molecule2(x, y) {
	h(h3.x + x, h3.y + y, fadeleft, fade1);
	h(h4.x + x, h4.y + y, faderight, fade1);
	o(o2.x + x, o2.y + y, fadeleft, fade1);
}
function electrolyzer(x, y) {
	noFill();
	stroke(100);
	strokeWeight(3);
	rect(100 + x, 50 + y, 75, 225);
	rect(175 + x, 175 + y, 250, 100);
	rect(425 + x, 50 + y, 75, 225);
	noStroke(); //outline

	fill(130, 177, 255);
	rect(102 + x, 177 + y, 397, 97);
	noStroke();
	rect(102 + x, 100 + y, 72, 80);
	rect(427 + x, 140 + y, 72, 50); //water

	strokeWeight(5);
	stroke(255, 0, 0);
	line(250 + x, 110 + y, 250 + x, 195 + y);
	line(250 + x, 195 + y, 140 + x, 195 + y);
	line(140 + x, 195 + y, 140 + x, 170 + y);
	stroke(0);
	line(350 + x, 110 + y, 350 + x, 195 + y);
	line(350 + x, 195 + y, 450 + x, 195 + y);
	line(450 + x, 195 + y, 450 + x, 170 + y);
	fill(180); //power lines

	strokeWeight(3);
	rect(220 + x, 60 + y, 160, 80, 30);
	noStroke();
	fill(198, 32, 23);
	textSize(40);
	text("+", 250 + x, 120 + y);
	fill(0); //power

	textSize(15);
	text("Anode", 240 + x, 85 + y);
	textSize(40);
	text("-", 335 + x, 115 + y);
	textSize(15);
	text("Cathode", 310 + x, 85 + y); //text
}

function makegas() {
	fill(255, 255, 255, 100);
	for (i = 0; i < gas.length; i++) {
		fill(255, 255, 255, gas[i].o);
		gas[i].r =
			gas[i].r * (noise(gas[i].x * 1000 + frameCount / 10) / 10 - 0.05 + 1);
		gas[i].r = constrain(gas[i].r, 15, 80);
		gas[i].o = gas[i].o * (noise(gas[i].x * 1000 + frameCount / 5) - 0.1 + 1);
		gas[i].o = constrain(gas[i].o, 75, 150);
		ellipse(gas[i].x, gas[i].y, gas[i].r);
	}
}
function Gas(x, y, r, o) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.o = o;
}
var gas = [];
gas.add = function(x, y, r, o) {
	gas.push(new Gas(x, y, r, o));
};
 
function Bubble(x, y, r, o) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.o = o;
}
var bubbles = [];
bubbles.add = function(x, y, r, o) {
	bubbles.push(new Bubble(x, y, r, o));
};
var shrink=0
function makebubbles() {
	for (i = 0; i < bubbles.length; i++) {
		fill(255, 255, 255, bubbles[i].o);
		ellipse(bubbles[i].x, bubbles[i].y, bubbles[i].r);
		bubbles[i].y -= 0.5;
		if (bubbles[i].y < 120) {
			bubbles.splice(i, 1);
		}
	}
}
var grow=0.01;
var shrink=0;



function focus(){
	background(230);
	textSize(28);
	fill(0);
	noStroke();
	text("Electrolyzer", 220, 50);
	textSize(15);
	text("Oxygen gas →", 20, 100);
	text("← Hydrogen gas", 470, 100);
	scale(0.8);
	electrolyzer(70, 50);
	if (floor(frameCount / 50) > fram) {
		fram = floor(frameCount / 50);
		addbubbles(200, 200, 1);
		addbubbles(510, 200, 1);
	}
	makegas();
	makebubbles();
	if (leftdone == 1 && rightdone == 1) {
		shrink++
		if(shrink==1){
    grow=0.01;
		}
		h2 = {
			x: 7,
			y: -4.5,
			charge: "+1"
		};
		h4 = {
			x: 7,
			y: -4.5,
			charge: "+1"
		};

		o1 = {
			x: 0,
			y: 0,
			charge: "-2"
		};
		o2 = {
			x: 0,
			y: 0,
			charge: "-2"
		};

		h3 = {
			x: -7,
			y: -4.5,
			charge: "+1"
		};
		h1 = {
			x: -7,
			y: -4.5,
			charge: "+1"
		};
			e1.x = 515;
	e1.y = 245;
	e2.x = 485;
	e2.y = 245;

			fadeleft = 200;
		faderight=200;
		fade1=1;
		if(grow<1){
		grow+=0.02;
		push()
		translate(370-grow*370,285-grow*285)
		push();
		scale(grow);
	  molecule1(370, 270);
	  molecule2(370, 300);
		pop();
			pop();
		} else {
			leftdone=0;
		  rightdone=0
		  shrink=0;
		}
	} else {
	molecule1(370, 270);
	molecule2(370, 300);
		move();
	}
}

var faderight = 200;
var fadeleft = 200;
var leftdone = 0;
var rightdone = 0;
function move() {
	fade = 0;
	if (h2.x < 165) {
		h2.x += 1.3;
		h4.x += 1.3;
	} else if (e1.x < 535) {
		e(e1.x, e1.y);
		e(e2.x, e2.y);
		e1.y += 0.4;
		e1.x += 0.4;
		e2.y += 1;
		e2.x += 1;
	} else {
		if (Math.abs(h2.y - h4.y) < 25) {
			h2.y += 0.5;
			h4.y -= 0.5;
		} else if (h2.y > -145) {
			h2.y -= 0.75;
			h4.y -= 0.75;
			faderight -= 1;
			fade1 -= 0.0048;
		} else {
			rightdone = 1;
		}
	} //moveleft

	if (h1.x > -170) {
		h1.x -= 1.7;
		h3.x -= 1.7;
		o1.x -= 1.5;
		o2.x -= 1.5;
		e3.x = o1.x + 370;
		e3.y = o1.y + 270;
		e4.x = o1.x + 370;
		e4.y = o1.y + 270;

		e5.x = o2.x + 370;
		e5.y = o2.y + 300;
		e6.x = o2.x + 370;
		e6.y = o2.y + 300;
	} else if (e3.y > 245) {
		e(e3.x, e3.y);
		e(e4.x, e4.y);
		e(e5.x, e5.y);
		e(e6.x, e6.y);
		e3.y -= 0.5;
		e3.x += 0.25;
		e4.y -= 0.5;
		e4.x += 0.5;
		e5.y -= 1.1;
		e5.x += 0.75;
		e6.y -= 1.1;
		e6.x += 1;
	} else if (Math.abs(o1.y - o2.y) < 23) {
		o1.y += 0.6;
		o2.y -= 0.6;
	} else if (o1.y > -130) {
		fadeleft -= 1;
		o1.y -= 0.7;
		o2.y -= 0.7;
	} else {
		leftdone = 1;
	}
}
