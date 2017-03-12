function sofia() {
    // mic.setInput();
    if(music.isPlaying){
      var blue = map(vol, 0, 1, 0, 255)
      background(10, 10, blue);

      var eyeSize = map(vol, 0, 1, 10, 100);
      var mouthSize = map(vol, 0, 1, 12, 125);
      var y = map(vol, 0, 1, 200, 400);

      // var eyeSize = 30;
      // var mouthSize = 50;
      // var y = 200;

      // make a thin black stroke
      stroke(0);
      strokeWeight(1);
      //hair
      fill(160, 115, 59);
      ellipse(125,y-50, 100, 100);
      ellipse(275, y-50, 100, 100);

      // head
      fill(244, 233, 200);
      ellipse(200, y, 200, 200);

      // front hair
      fill(160, 115, 59);
      arc(250, y - 90, 110, 100, 41, 196);
      arc(150, y - 90, 110, 100, -16, 139);

      //infront of the front hair
      arc(200, y-75, 150, 75, 180, 360);

      // eyes
      fill(122, 72, 11);
      ellipse(150, y - 25, eyeSize, eyeSize);
      ellipse(250, y - 25, eyeSize, eyeSize);

      // mouth
      fill(221, 67, 53);
      rect(200, y + 50, 2*mouthSize, mouthSize);

      // nose
      fill(244, 233, 200);
      triangle(190, y, 190, y + 20, 210, y + 20);
      // fat peach-color stroke
      stroke(244, 233, 200);
      strokeWeight(3);
      line(190, y, 190, y + 20);


    }



}
