var canvas; //center canvas
var loadProg = 0; //promjenljiva koja sluzi za loading bar

function setup() {
  
	//create the canvas for drawing
	canvas = createCanvas(600, 400); //canvas size equals half of the screen
	canvas.position(windowWidth/4, windowHeight/4); //position is center
	canvas.class("loadingScreen"); //canvas class
	background(50, 50, 104);
	fill(204,204,230);
	ellipse(300, 200, 600, 400);
	
	
	//Smart Home WebApp
	textSize(40);
	fill(0, 102, 153);
	text("Smart Home WebApp", 110, 100);
	
	//loading bar
	loadImage("/images/loadingHouse.jpg", function(img){
		image(img, 100, 200);
	});
	
	//Start the webapp
	textSize(40);
	Fill(0,102,153);
	text("Pokreni Web Aplikaciju!", 200, 200);
}

function draw() {
	
	
}

/*
function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}
*/