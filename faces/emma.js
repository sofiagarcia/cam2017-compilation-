
function emma() {
  strokeWeight(1);
  background(250, 0,127);
  var eyeSize = map(vol,0,1,30,100);
  var mouthSize = map(vol,0,1, 75, 150);
  var y = map(vol, 0, 1, 150, 350);

  //body
  fill(250,250,250);
  ellipse(200,y+80,150,150);

  //head
  fill(250,250,250);
  ellipse(200,y-50,150,150);

  //left eye
  ellipse(150, y-100, eyeSize, eyeSize);

  //right eye
  ellipse(250, y-100, eyeSize, eyeSize);
  fill(55,154,101);
  //pupil left
  ellipse(150,y-100,20,20);
  //pupil right
  ellipse(250, y-100,20,20);
  //mouth
  ellipse(200,y-50,mouthSize,mouthSize);

  }
