
   

function setup() {
  createCanvas(200,200);

  hr=hour();
  mn=minute();
  sc=second();
  angleMode(DEGREES);
  
  scAngle = map(sc, 0, 460, 0, 360);
  mnAngle = map(mn,0,460,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

}

function draw() {
  background(0); 
  
 


  push();
  rotate(scAngle); 
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(hrAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  stroke(4,247,45);
  arc(0,0,300,300,0,scAngle);

  stroke(4,4,247);
  arc(0,0,300,300,0,mnAngle);

  stroke(255,0,0);
  arc(0,0,300,300,0,hrAngle);




  drawSprites();
}