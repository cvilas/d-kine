function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(255);
  
  // Set up positioning
  let centerX = 150;
  let centerY = 200;

  // Draw the large circle
  strokeWeight(3);
  stroke(0);
  noFill();
  circle(centerX, centerY, 100);
  
  // line
  strokeWeight(2);
  stroke(127)
  line(centerX, centerY, centerX+260, centerY)

  // Draw the small circle
  fill(0);
  noStroke();
  circle(centerX, centerY, 20);

  // Draw the hyperbola (shockwave)
  // Hyperbola equation: x^2/a^2 - y^2/b^2 = 1
  // We'll draw the right branch of the hyperbola
  stroke(0);
  strokeWeight(2);
  noFill();
  
  let a = centerX -15;  // semi-major axis
  let b = 40;  // semi-minor axis
  
  beginShape();
  for (let y = -37; y <= 37; y += 1) {
    let x = a * sqrt(1 + (y / b) * (y / b));
    vertex(x, centerY + y);
  }
  endShape();
  
  // Draw text
  fill(0);
  noStroke();
  textSize(40);
  textFont('Courier');
  textStyle(BOLD);
  text("DIRECTED", centerX+60, centerY - 5);
  text("KINETICS", centerX+60, centerY + 28);

}
