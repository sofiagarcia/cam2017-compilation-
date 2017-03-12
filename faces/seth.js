

function seth() {
  background('#ee5a50');
  var mouthSize = map(vol,0,1,50,150);
  var eyeSize = map(vol,0,1,50,150);
  var y = map(vol,0,1,200,350)
 var b = map(vol,0,1,100,255);
  var r = map(vol,0,1,255,1);
  //head
  fill(r,60,b);
  ellipse(windowWidth/2,y,200,200);

  //eyes
  fill(255);
  ellipse(windowWidth/2-50,y-25,eyeSize,eyeSize);
  ellipse(windowWidth/2+50,y-25,eyeSize,eyeSize);

  //mouth
  rect(windowWidth/2-50,y+50,mouthSize,mouthSize);

}
