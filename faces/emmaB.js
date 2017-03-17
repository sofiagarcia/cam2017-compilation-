function emmaB() {
var mouthSize = map(vol,0,1,30,100)

background(137, 205, 250);

//the sun Prt#2
fill(255, 190, 13);
ellipse(380,19,300,300);


//the sun Prt#1
fill(255, 255, 0);
ellipse(389,24,193,179);

//grass
fill(22, 133, 16);
rect(198,391,571,215,90);

//grass hill#1
arc(62,294,210,122,-183,-5);

//grass hilL#2
arc(339,289,180,46,181,358);

//hair
fill(0, 0, 0);
arc(128,214,77,-184,-60,235);
arc(139,224,60,162,-233,41);
arc(142,241,38,122,485,675);
arc(270,207,46,179,469,784);
arc(281,196,56,188,114,426);
arc(200,145,218,146,204,638);

// left ear
fill(217, 165, 83);
ellipse(91,166,25,53);

//right ear
ellipse(309,166,25,53);

//body
fill(250, 250, 250);
rect(197,373,196,128,42);

//left shoulder
fill(0, 0, 0);
rect(109,331,93,46,69);

//colar
ellipse(199,331,84,38);

//right shoulder
rect(287,331,93,46,69);

//left arm
rect(96,386,69,148,20);

//right arm
rect(300,386,69,148,20);

//neck
fill(217, 165, 83);
rect(198,298,77,87,20);

// face
fill(217, 165, 83);
ellipse(200, 196,194, 211);

//hair part#2
fill(0, 0, 0);
arc(253,151,113,117,248,360);

//left eye
fill(250, 250, 250);
ellipse(162,155,36,32);

//right eye
ellipse(242,155,36,32);

//hair Prt#3
fill(0, 0, 0);
arc(248,119,106,923,1,12);
arc(117,180,36,99,505,641);
arc(134,100,90,119,340,492);

//left pupil
fill(5, 0, 0);
ellipse(163,155,20,17);

//right pupil
fill(5 ,0 ,0);
ellipse(242,155,20,17);

//mouth
fill(3, 0, 0);
arc(200,242,85,mouthSize,0,184);

//nose part#1
fill(204, 146, 66);
noStroke();
triangle(220,210,178,209,197,157);

//nose part#2
noStroke();
ellipse(183,207,10,12);
ellipse(215,208,10,12);

//nose part#3
noStroke();
rect(197,174,14,38,513);
ellipse(199,211,25,14);

}
