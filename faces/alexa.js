function alexa() {
  // var x = map(vol, 0, 1, 200, 350);
  //   var y = map(vol, 0, 1, 138, 350);
var x =200;
var y =138;

var mouthSize = map(vol,0,1,30,100)
var leftArm = map(vol, 0, 1, 238, 175);
var rightArm = map(vol, 0, 1, 322, 355);
var eyeSize = map(vol, 0, 1, 25, 100);
var pupil = map(vol, 0, 1, 10, 26);

background(255, 0, 179);

strokeWeight(2);
stroke(13, 12, 12);
line(x+-58,y+187,55,leftArm); //left arm
line(x+148,y+109,270,rightArm); //right arm
stroke(0, 0, 0);
fill(56,40,3);
ellipse(x+0,y+40,225,328); //hair
noStroke();
fill(255, 255, 0);
triangle(x+143, y+265, x-6, y+66, x-139, y+265);//dress
stroke(8, 8, 8);
fill(227, 183, 79);
ellipse(x,y,174,207); //face
fill(250, 247, 247);
ellipse(x-35,y-20,eyeSize,eyeSize); //left eye
ellipse(x+35,y+-20,eyeSize,eyeSize); //right eye
fill(56, 40, 3);
ellipse(x+35,y+-16,15,pupil);//right pupil
ellipse(x+-36,y+-16,15,pupil); //left pupil
fill(217, 70, 70);
noStroke();
arc(x,y+35,63,mouthSize,4,181); //mouth


}
