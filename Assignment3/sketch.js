function setup() {
  createCanvas(600, 400);
  background (210, 230, 255);
}

function draw(){
  stroke(180);
  strokeWeight(1);
  
  // hair
  noStroke();
  fill(70, 30, 0);
  rect(195, 160, 210, 220);

  // change body color
  bColor = color(245, 240, 210);
  if(keyIsPressed){
    if(key.toUpperCase()=='P'){ // pink
      bColor = color(255, 225, 225);
    }
    else if(key.toUpperCase()=='G'){ // gray
      bColor = color(128, 128, 128);
    }
  }
  // body
  stroke(180);
  fill(bColor);
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

  // nose
  noStroke();
  fill(255, 225, 190); 
  triangle(300, 185, 300, 220, 290, 215);
  
  noFill();
  // smile
  if(keyIsPressed && key.toUpperCase()=='S'){
    // eyes
    stroke(70, 30, 0);
    strokeWeight(3);
    curve(200, 223, 240, 185, 273, 185, 315, 223);
    line(235, 182, 239, 185);
    curve(400, 223, 360, 185, 327, 185, 285, 223);
    line(365, 182, 361, 185);

    // mouth
    noStroke();
    fill(255, 115, 85);
    arc(300, 238, 35, 20, 0, PI);
  }
  else{
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
  
    // mouth
    noFill();
    stroke(230, 160, 150);
    strokeWeight(3);
    curve(250, 210, 285, 240, 315, 240, 350, 210);
  }
  
  // move glasses
  if(keyIsPressed && key.toUpperCase()=='M'){
    glassesY = constrain(mouseY, 80, 220);
  }
  else{
    glassesY = 162;
  }

  // glasses
  noFill();
  stroke(255, 210);
  strokeWeight(4);
  rect(220, glassesY, 70, 60, 40);
  rect(310, glassesY, 70, 60, 40);
  line(290, glassesY+20, 310, glassesY+20);  
}

// draw a star
function mousePressed(){
  stroke(random(230, 255), random(200, 255), random(0, 150));
  strokeWeight(3);
  fill(255);

  let outerR = random(15, 35);
  let innerR = outerR*(3/7);

  let angle = TWO_PI / 5;
  let halfAngle = angle / 2;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = mouseX + cos(a) * outerR;
    let sy = mouseY + sin(a) * outerR;
    vertex(sx, sy);
    sx = mouseX + cos(a + halfAngle) * innerR;
    sy = mouseY + sin(a + halfAngle) * innerR;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed(){
  if(key.toUpperCase() === 'Q'){
    saveGif('20231726_HW3', 10);
  }
}