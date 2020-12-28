function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="green";
   moving=createSprite(200, 200, 50, 50);
  moving.shapeColor="green";
  gameobject1=createSprite(100,200,50,50);
  gameobject1.shapeColor="blue";
  gameobject2=createSprite(200,200,50,50);
  gameobject2.shapeColor="blue";
  gameobject3=createSprite(300,200,50,50);
  gameobject3.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  moving.x=mouseX;
   moving.y=mouseY;
  if(isTouching(moving,gameobject3)){
    gameobject3.shapeColor="red";
    moving.shapeColor="red";
  }
  else{
    gameobject3.shapeColor="green";
     moving.shapeColor="green";
  }
  
  drawSprites();
}


