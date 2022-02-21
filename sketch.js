function setup() {
  createCanvas(800, 600);
  box = createSprite(200,200,50,50)
}

function draw() {
  background("cyan");
  if(keyDown("right")){
    box.x = box.x + 5
  }
  drawSprites()
}
