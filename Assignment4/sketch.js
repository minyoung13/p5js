let diam = 0;
let angle = 0;
let c1 = 0;
let c2 = 0;
let t = 0;

function setup() {
  createCanvas(600, 400);
  
  c1 = color(44, 77, 115);
  c2 = color(255, 204, 204);
}

function draw() {
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
  if(frameCount % 100 < 50) {
    fill(255,165,0);
  } else {
    fill(255, 225, 0);
  }
  circle(100,100,320);
  
  // 작은 원
  fill(178,45,34);
  circle(180,40,40);
  
  // 가운데 원
  if(frameCount % 330 < 165) {
    fill(178, 45, 34);
  } else {
    fill(102, 0, 215, 70);
  }
  circle(320,270,diam);
  diam += 3;
  diam %= 160;
  
  // 오른쪽 원
  stroke(0);
  strokeWeight(5);
  fill(256,215,0);
  circle(510,250,260);
  
  // 왼쪽 점
  strokeWeight(25);
  point(200,300);
  
  // 오른쪽 점
  let cx = 510;
  let cy = 250;
  let r = 110;
  let x = cx + r * cos(angle);
  let y = cy + r * sin(angle);
  strokeWeight(15);
  point(x, y);
  angle += 0.06;
  
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
  let amt = (sin(t)+1)/2;
  let triColor = lerpColor(c1, c2, amt);
  fill(triColor);
  t += 0.03;
  triangle(120,200,50,370,220,370);
  
  fill(255,150);
  triangle(450,20,580,20,580,180);
}

function keyPressed() {
  if (key === 's') {
    saveGif('20231726_HW4', 9.5);
  }
}