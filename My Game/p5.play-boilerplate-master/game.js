class Game {
  constructor(){

  async start(){
    if(gameState === 0){
      player = new Player();
      }
    }
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
    cars = [car1, car2, car3, car4,car5];
  }

  play(){
   
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      var index = 0;

      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }

      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4000){
      gameState = end;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}
}
   