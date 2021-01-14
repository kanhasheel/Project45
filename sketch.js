var backgroundImg;
var Ron, RonImg
var hunter,hunter1Img,hunter2Img,hunter3Img,hunter4Img
var bird1,bird1Img
var bird2,bird2Img
var bird3,bird3Img
var bird4,bird5Img


function preload(){
  backgroundImg = loadImage("background.jpg")
  RonImg = loadImage("JungleRon.png")
  bird1Img = loadImage("Bird1Img.png")
  bird2Img = loadImage("Bird2Img.png")
  bird3Img = loadImage("Bird3Img.png")
  bird4Img = loadImage("Bird4Img.png")
  hunter1Img = loadImage("HunterImg1.png")
  hunter2Img = loadImage("HunterImg2.png")
  hunter3Img = loadImage("HunterImg3.png")
  hunter4Img = loadImage("HunterImg4.png") 
}
function setup() {
  createCanvas(1000,600);

  Ron = createSprite(800,400,50,100)
  Ron.addImage(RonImg)
  Ron.scale = 0.8

  bird1 = createSprite(250,70,50,50)
  bird1.addImage(bird1Img)
  bird1.scale = 0.15

  bird2 = createSprite(470,40,50,50)
  bird2.addImage(bird2Img)
  bird2.scale = 0.15

  bird3 = createSprite(900,50,50,50)
  bird3.addImage(bird3Img)
  bird3.scale = 0.15
  
  bird4 = createSprite(600,45,50,50)
  bird4.addImage(bird4Img)
  bird4.scale = 0.2
}


function draw() {
  background(backgroundImg);  
  
  if(keyDown(UP_ARROW)){
    Ron.y = Ron.y-4;
  }
  if(keyDown(DOWN_ARROW)){
    Ron.y = Ron.y+4;
  }

  spawnHunters()
  drawSprites()
}

function spawnHunters(){
  if(frameCount%100===0){
    hunter = createSprite(0,400,100,100)
    hunter.y = random(200,400)
    hunter.velocityX = 4;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: hunter.addImage(hunter1Img);
              break;
      case 2: hunter.addImage(hunter2Img);
              break;
      case 3: hunter.addImage(hunter3Img);
              break;
      case 4: hunter.addImage(hunter4Img);
              break;
      default: break;
    }
  }
}