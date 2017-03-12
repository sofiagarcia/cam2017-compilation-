

function kai() {
    background(0);

  //console.log(vol);
  var eyeSize = map(vol,0, 1, 30, 100);

  var mouthSize = map(vol,0 ,1 ,85 ,375);
  var y = map(vol, 0, 1, windowHeight/2, windowHeight/2+100 );
  //head
  fill("#791DDB");
  ellipse(200, y, 200, 200);

  //eyes
  fill(255);


  ellipse(250, y-25, eyeSize, eyeSize);
  ellipse(150, y-25, eyeSize, eyeSize);


  //mouth
  //ellipse(200, 250, 75, 75);
  rect(200, y+50, mouthSize, mouthSize);
  rect(200, y+50, mouthSize-5,mouthSize-5);
  rect(200, y+50, mouthSize-10, mouthSize-10);
  rect(200, y+50, mouthSize-15, mouthSize-15);
  rect(200, y+50, mouthSize-20, mouthSize-20);
  rect(200, y+50, mouthSize-25, mouthSize-25);
  rect(200, y+50, mouthSize-30, mouthSize-30);
  rect(200, y+50, mouthSize-35, mouthSize-35);
  rect(200, y+50, mouthSize-40, mouthSize-40);
  rect(200, y+50, mouthSize-45, mouthSize-45);
  rect(200, y+50, mouthSize-50, mouthSize-50);
  rect(200, y+50, mouthSize-55, mouthSize-55);
  rect(200, y+50, mouthSize-60, mouthSize-60);
  rect(200, y+50, mouthSize-65, mouthSize-65);
  rect(200, y+50, mouthSize-70, mouthSize-70);
}
