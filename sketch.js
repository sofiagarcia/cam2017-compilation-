var mic, music;

function preload() {
  music = loadSound('assets/Hialthaikn.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    rectMode(CENTER);
    angleMode(DEGREES);
    
    //create Audio output
    var mic = new p5.AudioIn();
    music.play();
}


