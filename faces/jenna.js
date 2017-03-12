var mic;
function setup() {
	noStroke();
	rectMode(CENTER);
	createCanvas(400, 400);
	background(166, 200, 255);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
	background(166, 200, 255);
	var vol = mic.getLevel();
;
	var eyeSize = map(vol, 0, 1, 30, 100);
	var mouthSize = map(vol, 0, 1, 30, 50);
	var y = 200;
	var w = map(vol, 0, 1, 30, 75);
	var tophatX = 15;
   var tophatY = 15;
	//hair
    fill(143, 100, 20);
    ellipse(200, y+14, w+251, w+332);
	//head
	fill(""#FFEBC9"");
	ellipse(200, y, 200+w, 250+w);
	/*
	//hair bangs
    fill(143, 100, 20);
    arc(200, 107, 29, 66, -15, 183);
    */
	 //eyes
	 fill(0);
	//Or #915C00 which is brown
	 ellipse(150, y-15, eyeSize, eyeSize);
	 ellipse(250, y-15, eyeSize, eyeSize);
	//mouth
	 fill(255, 115, 115);
    ellipse(200, 250, mouthSize, mouthSize);
    //rect(200, y+50, mouthSize, mouthSize);
    //arc(202, 247, 29, 66, 169.5, 210.5);
    //tophat
    fill(0, 0, 0);
    rect(tophatX, tophatY+3, 15, 21);
    fill(0, mouseX, mouseY);
    rect(tophatX, tophatY+16, 15, 5);
    fill(0, 0, 0);
    rect(tophatX, tophatY+22, 20, 7 );

}
