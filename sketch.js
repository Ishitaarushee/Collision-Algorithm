var movingrect;
var fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(300, 200, 100, 50);
  movingrect.shapeColor = "white";
  movingrect.debug = true;

  fixedrect = createSprite(600, 200, 50, 100);
  fixedrect.shapeColor = "white";
  fixedrect.debug = true;
}

function draw() {
  background("black"); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 && 
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {

    movingrect.shapeColor = "pink";
    fixedrect.shapeColor = "pink";
  }
  else {
    movingrect.shapeColor = "white";
    fixedrect.shapeColor = "white";
  }

  drawSprites();
}