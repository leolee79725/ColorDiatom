function setup() {
	createCanvas(windowWidth, windowHeight);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(1, 75, 100,20);
	frameRate(5);
	fill(mouseX,mouseY,random(255));
	noStroke();
	var diameter=windowHeight/10;
	
	for(var i=0; i< width/diameter; i=i+1){
		for(var j=0; j<height/diameter; j=j+1){
			ellipse(
				diameter/2 + i * diameter,
				diameter/2 + j * diameter,
				diameter * random(),
				diameter* random()
			);
			
		}
	}
}