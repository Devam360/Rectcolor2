var frect,mrect,orect1,orect2,orect3;

function setup() {
  createCanvas(800,400);
 frect= createSprite(400,200,30,60);
 frect.shapeColor="red";
 mrect=createSprite(400,200,60,30);
 mrect.shapeColor="red";
 orect1=createSprite(200,200,30,60);
 orect1.shapeColor="red";
 orect2=createSprite(100,200,30,60);
 orect2.shapeColor="red";
 orect3=createSprite(300,200,30,60);
 orect3.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  console.log(mrect.y-frect.y);
if(IsTouching(mrect,orect2))
{
  mrect.shapeColor="blue";
  orect2.shapeColor="blue";
}
else if(IsTouching(mrect,orect3)){
  mrect.shapeColor="blue";
  orect3.shapeColor="blue";


}
else if(IsTouching(mrect,orect1)){
  mrect.shapeColor="blue";
  orect1.shapeColor="blue";
}
else{
  mrect.shapeColor="red";
  orect1.shapeColor="red";
  orect2.shapeColor="red";
  orect3.shapeColor="red";
}

drawSprites();
}
