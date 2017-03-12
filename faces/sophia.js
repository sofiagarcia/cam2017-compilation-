var overOne;

function setup() {
  createCanvas(windowWidth,windowHeight);


  mic = new p5.AudioIn();
  mic.start();

  overOne = false;
}


function draw() {

  angleMode(DEGREES);

var vol = mic.getLevel();
vol = vol*30500;
console.log(vol);

// if (vol > 1){
//   overOne = true;
// }

// if (overOne){
//   background(0);
// }


var eyeSize = map(vol,0,1,30,100)
var mouthSize = map(vol,0,1,30,100)

 noStroke();

//hair
fill(54, 12,12);
ellipse(200, 235,290,395);

//head
fill(255, 220, 180);
ellipse(200,200,260,300);

//eyes
fill(0, 0, 0);
triangle(125,176,169,164,116,158);
triangle(229,166,271,184,285,158);

fill(255, 255, 255);
ellipse(150,175,50,eyeSize);
ellipse(250,175,50,eyeSize);

fill(0, 0, 0);
ellipse(150,175,25,25);
ellipse(250,175,25,25);

fill(255, 255, 255);
ellipse(145,171,10,10);
ellipse(152,175,5,5);
ellipse(245,171,10,10);
ellipse(252,175,5,5);


//mouth
strokeWeight(5);
stroke(255, 178, 178);
fill(255, 255, 255);
arc(200,255,100,mouthSize,0,180);
line(150,253,249,253);

//hair2
noStroke();
fill(54, 12,12);
arc(257,54, 214, 169,58,182);
arc(98,89, 150, 111,-39,113);
rect(178,50,48,5);
ellipse(277,110,60,50);
stroke(54, 12,12);
strokeWeight(30);
line(308, 140, 232, 121);
}
