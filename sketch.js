var mic, music, vol;

function preload() {
  music = loadSound('assets/Hialthaikn.mp3');
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
  if(music.currentTime() > 0 && music.currentTime() < 5){
    sofia();
  }
  if(music.currentTime() > 5 && music.currentTime() < 10){
      sophia();
    }
    if(music.currentTime() > 10 && music.currentTime() < 15){
        angelinne();
      }
      if(music.currentTime() > 15 && music.currentTime() < 20){
          emma();
        }
        if(music.currentTime() > 20 && music.currentTime() < 25){
            jenna();
          }
    if(music.currentTime() > 25 && music.currentTime() < 30){
              kai();
            }

  if(music.currentTime() > 30 && music.currentTime() < 35){
        nidia();
    }
    if(music.currentTime() > 35 && music.currentTime() < 40){
          sanitago();
      }
  


  // if(music.isPlaying()){
  //
  // }

}
