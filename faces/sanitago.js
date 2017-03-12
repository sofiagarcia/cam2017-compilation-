

function sanitago()  {
 background(0);
var vol= mic.getLevel();
var eyeSize = map(vol, 0,1,30,55)
var mouthSize = map(vol,0,1,90,200);
var y = map(vol,0,1,250,200);
var red= random(0,255);
var green= random(0,255);
var blue= random(0,255);



noStroke();
//head
fill(204, 0, 204);
ellipse(200,y,250,250);
//eyes
stroke(21, 255, 0);
strokeWeight(10);
fill(red, green, blue);
ellipse(150,y-25,eyeSize,eyeSize);//left
ellipse(250,y-25,eyeSize,eyeSize);//right
//mouth
noStroke();
fill(255, 0, 0);
rect(200,y+60,mouthSize,mouthSize);
//unibrow
noStroke();
fill(35, 73, 245);
rect(200,150,mouthSize+20,mouthSize/4);




}
