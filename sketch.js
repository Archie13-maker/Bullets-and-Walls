var bullet, wall;
var speed, weight,thickness;
var bulletRightEdge, wallLeftEdge;
function setup() {
  createCanvas(1600,400);
 
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,30,10);
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0); 
  bullet.velocityX=speed;

  if(collide(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage<10){
      bullet.shapeColor="green";
    }

    if(damage>10){
      bullet.shapeColor="red";
    }
  }
  drawSprites();
}

function collide(lbullet,lwall){
bulletRightEdge=lbullet.x+ lwall.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}