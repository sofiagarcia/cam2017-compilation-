var mic;

function setup() {
  rectMode(CENTER);
createCanvas(windowWidth,windowHeight);

mic = new p5.AudioIn();
mic.start();
}

function draw() {
  background('#ee5a50');
var vol =  mic.getLevel();
  var mouthSize = map(vol,0,1,50,150);
  var eyeSize = map(vol,0,1,50,150);
  var y = map(vol,0,1,200,350)
 var blue = map(vol,0,1,100,255);
  var red = map(vol,0,1,255,1);
  //head
  fill(red,60,blue);
  ellipse(windowWidth/2,y,200,200);

  //eyes
  fill(255);
  ellipse(windowWidth/2-50,y-25,eyeSize,eyeSize);
  ellipse(windowWidth/2+50,y-25,eyeSize,eyeSize);

  //mouth
  rect(windowWidth/2-50,y+50,mouthSize,mouthSize);

}
