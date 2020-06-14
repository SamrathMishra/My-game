var bg,bgimg,mbgimg;
var ccb,ccbimg;
var Background1,Background1img;
var lbgimg,garimg;
var bb,bbimg;
var track,trackimg;
//var Startbuttonimg, 
var car,car1img;
var gameState = "start";
var gameState = "play";
var gameState = "end";
var distance = 0;

function preload(){
bgimg = loadImage("Photo/Background1.png");
mbgimg = loadImage("Photo/Main background.png");
car1img = loadImage("Photo/car1.png");
car2img = loadImage("Photo/car2.png");
car3img = loadImage("Photo/car3.png");
car4img = loadImage("Photo/car4.png");
car5img = loadImage("Photo/car5.png");
Startbuttonimg = loadImage("Photo/Start button.png");
ccbimg = loadImage("Photo/ccb.png");
background1img = loadImage("Photo/Background1.png");
lbgimg = loadImage("Photo/loading image.png");
garimg = loadImage("Photo/gar.png");
bbimg = loadImage("Photo/back button.png");
trackimg = loadImage("Photo/track.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
 /* bg = createSprite(600,250,1200,500);
  bg.shapeColor = "red"; 
bg.addImage ("bg",bgimg);
bg.scale = 1.5;*/
car1 = createSprite(600,450);
car1.addImage ("car1",car1img);
car1.scale = 0.5;
car2 = createSprite(1110,440);
car2.addImage ("car2",car2img);
car2.scale = 1.0;
car3 = createSprite(860,450);
car3.addImage ("car3",car3img);
car3.scale = 0.5;
car4 = createSprite(360,450);
car4.addImage ("car4",car4img);
car4.scale = 0.5;
car5 = createSprite(130,450);
car5.addImage ("car5",car5img);
car5.scale = 0.5;

Startbutton = createSprite(1060,360,50,40);
Startbutton.addImage ("Start button.png",Startbuttonimg);
ccb = createSprite(1060,190,50,90);
ccb.addImage ("CCBIMG.png",ccbimg);
bb = createSprite(40,40,50,90);
bb.addImage ("bb.png",bbimg);
bb.scale = 0.2
}

function hide() {
if(gameState ("start")){
   

}
Startbutton.visible = false;
ccd.visible = false;
}

function draw() {

background(mbgimg);
 car5.visible = false;
  car1.visible = false;
 car2.visible = false;
 car3.visible = false;
  car4.visible = false;
  if (mousePressedOver(Startbutton)){
    //hide();
    background (lbgimg);
     playSound("click button sound.m4a",);
    //background (background1img);
  }
    if (mousePressedOver(ccb)){
    background (garimg);
    car1.visible =true;
    car2.visible =true;
    car3.visible =true;
    car4.visible =true;
    car5.visible =true;
   //playSound("click button sound.m4a",);
    }
     if (mousePressedOver(Startbutton)&&gameState==="start"){
    gameState="play";
    }
     if (mousePressedOver(bb)){
     background(mbg)
     }
  
  drawSprites();
  text (mouseX+";"+mouseY,30,30);
}
