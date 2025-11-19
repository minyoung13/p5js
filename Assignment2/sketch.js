function setup() {
  createCanvas(600, 400);
  background (210, 230, 255);
  
  // hair
  noStroke();
  fill(70, 30, 0);
  rect(195, 160, 210, 220);
  
  // body
  stroke(180);
  fill(245, 240, 210);
  arc(300, 400, 255, 189, PI, PI+PI);
  
  // cloth
  fill(255);
  quad(287, 345, 300, 340, 313, 345, 300, 360);
  line(300, 340, 300, 400);
  
  // button
  noFill();
  circle(287, 375, 8);
  circle(287, 395, 8);
 
  // neck
  fill(250, 230, 210);
  rect(275, 270, 50, 70);
  
  // collar
  fill(255);
  quad(255, 310, 275, 295, 300, 340, 275, 355);
  quad(345, 310, 325, 295, 300, 340, 325, 355);

  // ears
  fill(255, 225, 190);
  arc(212, 193, 25, 35, HALF_PI, PI+HALF_PI);
  arc(388, 193, 25, 35, PI+HALF_PI, HALF_PI);
  
  // face
  fill(255, 240, 226);
  ellipse(300, 170, 180, 220);
  
  // bang
  noStroke();
  fill(70, 30, 0);
  arc(300, 160, 210, 210, PI, PI+PI);
  fill(255, 240, 226);
  triangle(270, 125, 270, 160, 255, 160);
  triangle(325, 130, 325, 160, 340, 160);
  
  // side-bang
  noFill();
  stroke(70, 30, 0);
  strokeWeight(6);
  curve(245, 160, 213, 160, 230, 250, 300, 250);
  curve(355, 160, 387, 160, 370, 250, 300, 250);
  
  // eyebrows
  noFill();
  stroke(70, 30, 0);
  strokeWeight(6);
  curve(155, 182, 235, 159, 278, 159, 355, 182);
  curve(445, 182, 365, 159, 322, 159, 245, 182);
  
  // eyes
  stroke(70, 30, 0);
  strokeWeight(3);
  curve(200, 223, 240, 180, 273, 181, 315, 223);
  line(235, 178, 240, 180);
  curve(400, 223, 360, 180, 327, 181, 285, 223);
  line(365, 178, 360, 180);

  fill(70, 30, 0);
  ellipse(257, 183, 11, 13);
  ellipse(343, 183, 11, 13);
  
  stroke(255);
  strokeWeight(4);
  point(259, 181);
  point(345, 181);
  
  strokeWeight(2);
  point(257, 185);
  point(343, 185);

  // nose
  noStroke();
  fill(255, 225, 190); 
  triangle(300, 185, 300, 220, 290, 215);
  
  // mouth
  noFill();
  stroke(230, 160, 150);
  strokeWeight(3);
  curve(250, 210, 285, 240, 315, 240, 350, 210);
    
  // glasses
  noFill();
  stroke(255, 210);
  strokeWeight(4);
  rect(220, 162, 70, 60, 40);
  rect(310, 162, 70, 60, 40);
  line(290, 182, 310, 182);  
}
