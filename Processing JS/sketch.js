//define an object that describes a circle
var circle = {
    diameter:80,
    xCoor: 320,
    yCoor: 240,
    color: [255.0,0], //color is red
    xSpeed: 8,
    ySpeed: 21
    }

//setup is run oce at the beginning before we draw
function setup() {
    createCanvas(1000, 1000);
    background(255, 255, 255)
    frameRate(60);
}
  
function draw(){
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
    
    // if xCoor of circle is greater than or less than length of canvas
    if(circle.xCoor > 1000 || circle.xCoor < 0){
        circle.color = [random(255), random(255), random(255)], //color is randomized
            circle.xSpeed = -circle.xSpeed;// bounces back
    }
    
    //if not greater than or less than length of canvas
      else if(circle.xCoor < 0){  
        circle.xSpeed = -circle.xSpeed; //keep going
    }
    circle.xCoor += circle.xSpeed;
    
    //if yCoor of circle is greater than or less than length of canvas bounce back
    if(circle.yCoor > 1000 || circle.yCoor <0){
        circle.diameter = (random(150, 50)),
            circle.ySpeed = -circle.ySpeed
    }
    else if(circle.yCoor < 0){
        circle.ySpeed = -circle.ySpeed;
    }
    circle.yCoor += circle.ySpeed;
}

