var movingRectangle, fixedRectangle;


function setup() {
  createCanvas(400, 400);
  
  movingRectangle = createSprite(25, 25, 50, 50);
  movingRectangle.shapeColor = "blue";

  fixedRectangle = createSprite(200, 200, 50, 50);
  fixedRectangle.shapeColor = "blue";
}

function draw() {
  background(0);

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

  if (movingRectangle.x - fixedRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2 &&
  fixedRectangle.x - movingRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2 &&
  movingRectangle.y - fixedRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2 &&
  fixedRectangle.y - movingRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2) {
    movingRectangle.shapeColor = "purple";
  } else {
    movingRectangle.shapeColor = "blue";
  }

  drawSprites();
}