let bottleColor = 0;
let colorChange = 2;
let bgColor = 220;

function setup() {
  
  createCanvas(600, 600);
  
}

function draw() {
  
  background(bgColor);
  
    if (bottleColor < 0 || bottleColor > bgColor) {
      colorChange = -colorChange;
    }
    bottleColor = bottleColor - colorChange;
  
  strokeWeight(0)
  fill(bottleColor);
  rect(237, 250, 126, 309);
  rect(245, 558, 110, 8);
  ellipse(245, 558, 16, 16);
  ellipse(355, 558, 16, 16);
  ellipse(267, 250, 60, 60);
  ellipse(333, 250, 60, 60);
  rect(258, 197, 84, 24);
  
  fill(bottleColor);
  rect(258, 177, 84, 18);
  triangle(275, 221, 300, 270, 325, 221); //inside
  rect(257, 142, 86, 33);
  
  //handle
  rect(252, 112, 4, 60);
  rect(344, 112, 4, 60);
  arc(300, 115, 96, 96, PI, TWO_PI);
  rect(349, 142, 3, 27);
  rect(248, 142, 3, 27);
  fill(bgColor);
  arc(300, 115, 88, 88, PI, TWO_PI);
  
  fill(bottleColor);
  triangle(342, 216, 342, 225, 350, 225);
  triangle(259, 216, 259, 225, 250, 225);
  
  fill(bgColor);
  ellipse(350, 216, 16, 16);
  ellipse(250, 216, 16, 16);
    
}