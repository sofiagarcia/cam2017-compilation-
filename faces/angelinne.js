function setup() {
  rectMode(CENTER);
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var vol = mic.getLevel();
  //console.log(vol);
  background(255);
  var eyeSizeX = map(vol, 0, 1, 35, 100);
  var eyeSizeY = map(vol, 0, 1, 25, 75);
  var mouthSizeX = map(vol, 0,1, 65, 115);
  var mouthSizeY = map(vol, 0, 1, 40, 90);
  var y = map(vol, 0, 1, 250, 200);
  var x = 200;

  //headhair
  fill(""#231102"");
  ellipse(x, y+20, 250, 250);
  ellipse(x-50, y+50, 200, 200);
  ellipse(x+50, y+50, 200, 200);

    //necc
  fill(244, 216, 190);
  rect(200, 300, 50, 200);


  //head
  //fill = map(vol, 0, 1, ""#f4d8be"", ""#eda6a6"") ;
  red = map(vol, 0, 1, 244, 219);
  green = map(vol, 0, 1, 216, 129);
  blue = map(vol, 0, 1, 190, 122)
  fill(red, green, blue);
  ellipse(x, y, 200, 200);

  //bang
  fill("#231102");
  ellipse(x-10, y-70, 150, 60);

  //fleek
  fill(""#331105"");
  ellipse(150, y-50, 50, 10);
  ellipse(250, y-50, 50, 10);


  //eyes
  fill(255, 255, 255);
  ellipse(x-50, y-25, eyeSizeX, eyeSizeY);
  ellipse(x+50, y-25, eyeSizeX, eyeSizeY);

  //mouth
  fill(""#471908"");
  ellipse(x, y+50, mouthSizeX, mouthSizeY);
 // rect(200, 250, 75, 75);

  //idek

}
