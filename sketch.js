var tom , jerry , garden;
var tomImage, jerryImage , gardenImage;
function preload() {
    tomImage1 = loadAnimation("cat1.png");
    tomImage2 = loadAnimation("cat2.png","cat3.png","cat4.png");
    jerryImage1 = loadAnimation("mouse1.png");
    jerryImage2 = loadAnimation("mouse2.png","mouse3.png","mouse4.png");
    gardenImage = laodImage("garden.png");
  }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(width/2,height);
    garden.addImage(gardenImage);
    garden.scale = 2.5;
  
    tom = createSprite(750, 750, 50,50);
    tom  .addImage(tomImage);
    tom.scale = 2.5; 

    jerry = createSprite(450,750,50,50);
    jerry.addImage(jerryImage);
    jerry.scale = 2.5;
  
}

function draw() {
    background(255);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        jerry.addAnimation("mouseTeasing",jerryImage1);
        jerry.changeAnimation("mouseTeasing");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("mouseTeasing",jerryImage2);
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 25;
    }

    if(keyCode === LEFT_ARROW){
        tom.addAnimation("tomTeasing",tomImage2);
        tom.changeAnimation("tomTeasing");
        tom.frameDelay = 25;
    }



}
