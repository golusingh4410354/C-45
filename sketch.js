var car;
var carImage;
var bg;
var fuel;
var fuelImage;
var track;
var trackImage;
var speedracer;
var speedracerImage;
var restart;
var restartImage;

function preload(){
  carImage = loadImage("./assets/car.png");
  speedracerImage = loadImage("./assets/speed racer.png.png");
   trackImage = loadImage("./assets/track.jpg");
   fuelImage = loadImage("./assets/fuel.png.png");
   trackImage = loadImage("./assets/track.jpg");
   restartImage = loadImage("./assets/restart.png");
   
}
function setup(){
  createCanvas(1200,800);

   track = createSprite(600,400);
   track.addImage(trackImage);
   track.scale = 0.7;

   fuel = createSprite(150,200);
   fuel.addImage(fuelImage);
   fuel.scale = 0.4;

   restart = createSprite(950,29);
   restart.addImage(restartImage);
   restart.scale = 1;

   car = createSprite(600,500);
   car.addImage(carImage);
   car.scale = 0.1;

   speedracer = createSprite(300,85);
   speedracer.addImage(speedracerImage);
   speedracer.scale = 0.4;
  
   track.velocityY = 5;
   



   

}
function draw(){
  background("red");
  track.velocityY = 10;
  if (track.y>800){
    track.y = height/2;
    
  }
  if(keyDown(UP_ARROW)){
    car.velocityY = -6;
    
  }
  if(keyDown(LEFT_ARROW)){
     car.velocityX = -3;
  }
  if(keyDown(RIGHT_ARROW)){
    car.velocityX = 3;
  }

  drawSprites()
  
}