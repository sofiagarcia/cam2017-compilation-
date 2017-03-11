var mic;

function setup() {
  rectMode(CENTER)
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(192);
  var vol = mic.getLevel();
  console.log(vol);
  var eyeSize = map(vol, 0, 1, 30, 100);
  var mouthSize = map(vol, 0, 1, 30, 100);
  var mouthSize2 = map(vol, 0, 1, 20, 200);
  var pupilSize = eyeSize / 2
  var y = map(vol, 0, 1, 200, 300);
  var red = random(0, 255);
  var green = random(0, 255);
  var blue = random(0, 255);

  //head
  fill(64);
  ellipse(200, y, 200, 200);

  //eyes
  fill(224);
  ellipse(160, y + 50, eyeSize, eyeSize);
  ellipse(240, y + 50, eyeSize, eyeSize);

  //pupils
  fill(red, green, blue);
  ellipse(160, y + 50, pupilSize, pupilSize);
  ellipse(240, y + 50, pupilSize, pupilSize);

  //mouth
  fill(96)
  rect(200, y + 70, mouthSize, mouthSize2);

  //hair
  push();
  fill(red, green, blue);
  translate(230, y - 100);
  rotate(radians(70));
  ellipse(20, 70, 170, 270);
  pop();

  //hair2
  push();
  fill(red, green, blue);
  translate(260, y - 60);
  rotate(radians(-5));
  ellipse(20, 70, 60, 110);
  pop();

}
