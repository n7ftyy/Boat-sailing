var ship, shipImg;
var sea, seaImg;
function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png")
  seaImg = loadImage("sea.png")


}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200);
  sea.addImage(seaImg)
  sea.velocityX = -4


  ship = createSprite(300, 300);
  ship.addAnimation("ship", shipImg)
  ship.scale = 0.2

  
}

function draw() {
  background("blue");

 if(sea.x < 0){
   sea.x = sea. width/2
 }


 drawSprites();
}