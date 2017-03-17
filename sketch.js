var mic, logo, music, vol;
var time = 12;


function preload() {
  music = loadSound('assets/mask.mp3');
  logo = loadImage('assets/thumbnail.png');
}

function setup() {
    createCanvas(400, 400);

    rectMode(CENTER);
    angleMode(DEGREES);

    //create Audio output
    mic = new p5.Amplitude;
    mic.setInput(music);

    music.play();

}


function draw() {
    vol =  mic.getLevel();
    if(music.currentTime() > 0 && music.currentTime() < 10){
      image(logo,0,0);
    }
  if(music.currentTime() > 11 && music.currentTime() < 22){
    sofia();
  }
    if(music.currentTime() > 22 && music.currentTime() < 32){
        sophia();
      }
      if(music.currentTime() > 32 && music.currentTime() < 38){
          emma();
        }
        if(music.currentTime() > 38 && music.currentTime() < 48){
            jenna();
          }
    if(music.currentTime() > 48 && music.currentTime() < 55){
              kai();
            }

  if(music.currentTime() > 55 && music.currentTime() < 65){
      angelinne();
    }
    if(music.currentTime() > 65 && music.currentTime() < 72){
          sanitago();
      }
      if(music.currentTime() > 72 && music.currentTime() < 82){
            alexa();
        }
        if(music.currentTime() > 82 && music.currentTime() < 95){
              nidia();
          }



  // if(music.isPlaying()){
  //
  // }

}
