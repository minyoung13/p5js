function setup() {
  createCanvas(600, 400);
  background(250, 235, 215);

    
  // 선분
  strokeWeight(3);
  line(420,0,420,399);
  
  // 왼쪽 원
  stroke(0);
  strokeWeight(3);
  
  noFill();
  circle(100,100,340);
  noStroke();
  fill(255,165,0);
  circle(100,100,320);
  
  // 작은 원
  fill(178,45,34);
  circle(180,40,40);
  
  // 가운데 원
  circle(320,270,160);
  
  // 오른쪽 원
  stroke(0);
  strokeWeight(5);
  fill(256,215,0);
  circle(510,250,260);
  
  // 왼쪽 점
  strokeWeight(25);
  point(200,300);
  
  // 오른쪽 점
  strokeWeight(15);
  point(480,170);
  
  // 사각형
  noStroke(0);
  fill(0,100,110);
  rect(90,70,140,60);
  
  fill(178,45,34,120);
  square(40,20,70);
  
  fill(178,45,34,170);
  rect(30,150,80,90);
  
  fill(255,165,0);
  rect(0,350,100,50);
  
  stroke(0);
  strokeWeight(3);
  noFill();
  rect(10,340,100,50);
  
  fill(0,60,35,200);
  rect(330,100,120,70);
  
  // 호
  fill(0);
  arc(419,100,140,140,PI,PI+HALF_PI);
  fill(250, 235, 215);
  arc(418,99,90,90,PI,PI+HALF_PI);
  
  // 삼각형
  fill(44,77,115);
  triangle(120,200,50,370,220,370);
  
  fill(255,150);
  triangle(450,20,580,20,580,180);
}

  