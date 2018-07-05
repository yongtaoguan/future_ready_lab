//setup is run oce at the beginning before we draw
function setup() {
  createCanvas(1000, 1000);
    frameRate(60);
}

//draws if mouse 1 is pressed, draw white or erase if mouse 2 is pressed
function draw() {
    if (mouseIsPressed) {
        if (mouseButton === LEFT){
            fill(0,255)
        var diameter1 = (5)
        ellipse(mouseX, mouseY, diameter1);
    }
        if (mouseButton === RIGHT) {
            fill(255, 255, 255)
                var diameter2 = 25
            ellipse(mouseX, mouseY, diameter2)
        }
  } 
    
//if mouse is not pressed do not put anything
    else {
        noStroke()
  }
