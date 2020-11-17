var car, wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  car=createSprite(100,200,50,50) 
  car.shapeColor="white"
  speed=random(50,90);
  weight=random(400,1500);
  car.velocityX=speed
  wall=createSprite(650,200,50,height/2)
}

function draw() {
  background(0); 
  
 
 
car.depth=wall.depth+1
if(wall.x-car.x<car.width/2+wall.width/2){
car.velocityX=0
var deformation=0.5*speed*speed*weight/22509

if(deformation>180){
  car.shapeColor="red"
}

if(deformation<180 && deformation>100){
  car.shapeColor="yellow"
}
if(deformation<100){
  car.shapeColor="green"
}
}
  drawSprites();
}