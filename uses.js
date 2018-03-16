const URL = 'https://i1.wp.com/c2.staticflickr.com/6/5286/30070177562_78a17c3060_o.png?resize=991%2C553&ssl=1';
 
var img;
 
function loadImageErrorOverride(errEvt) {
  const pic = errEvt.target;
 
  if (!pic.crossOrigin)  return print('Failed to reload ' + pic.src + '!');
 
  print('Attempting to reload it as a tainted image now...');
  pic.crossOrigin = null, pic.src = pic.src;
}

function setup(){
	
  loadImage(URL,
				function (pic) { print(img = pic), redraw(); },
           loadImageErrorOverride);
createCanvas(600,300);
}
 
function draw() {
		if(click==7){
		click=1;
		}
	background(220);
	textSize(25);
	text("Uses of electrolysis",170,40);
	fill(0);
	text(click+".",50,100)

	if(click==1){
		textSize(20)
		text("Electrolysis results in hydrogen and oxygen molecules. Hydrogen and Oxygen also powers fuel cells, which are like batteries that use hydrogen and oxygen. This is comparable to storing energy from the water into molecules. ",100,100,400)
	}
	if(click==2){
		textSize(20)
		text("Electrolysis is used to purify metals. The chemical reaction causes the impurities on the anode to dissolve, leaving the pure metal behind. ",100,100,400)

	}
	if(click==3){
		textSize(20)
		text("Image of metal purification",150,75,400)

		image(img,100,90,400,200);
	}
	if(click==4){
		textSize(20)
		text("Electrolysis is used industrialy to produce metals and nonmetals such as  aluminium, magnesium, chlorine, and fluorine. How it works is quite complicated however, and beyond the scope of this presentation.",100,100,400)
	}
	if(click==5){
		textSize(20)
		text("Another cool use of electrolysis is electroplating, where it coats a substance in another metal. It is used to coat jewlrey in gold, and to create circuit chips. Without electrolysis, computers would be hard to mass produce and be extremely rare!",100,100,400)
	}
	if(click==6){
		textSize(20)
		text("That's all for now! I hope you learned something about electrolysis!",100,100,400)
	}
}
var click = 1;
document.onclick = function() {
  click++;
  console.log(click);
}; 
