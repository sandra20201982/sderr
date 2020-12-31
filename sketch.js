const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Events=Matter.Events;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground;
var score=0;
var count=0;
var gameState="start";
var particle;

function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,800,800,20);

  for (var k = 0; k <=width; k = k + 80) 
  { divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); } 
  //plinkos green stationary balls for four rows on the top for 
  for (var j = 75; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,75)); } 
  for (var j = 100; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,175)); } 
  for (var j = 75; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,275)); }
  for (var j = 100; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,375)); }
}

function draw() {
  background(0);  
  textSize(35);
  text("Score:"+score,20,40);
  fill("white");
  textSize(35);
  text("500",15,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("100",330,550)
  text("200",730,550)
  Engine.update(engine);
  ground.display();

  if(gameState=="end"){
    textSize(50);
    text("Game Over",150,250)
  }
  for (var i = 0; i < plinkos.length; i++) 
  { 
    plinkos[i].display();
   } 

  if(particle!=null){
    
    particle.display();

    if(particle.body.position.y>760){


    
    if(particle.body.position.y<300){
      score=score+500;
      particle=null;
      if ( count>= 5) {
        gameState ="end"
      }
    }
      else if(particle.body.position.y<600 && particle.body.position.y>301){
        score=score+100;
        particle=null;
        if ( count>= 5) {
          gameState ="end"
      }
    }
      else if(particle.body.position.y<900 && particle.body.position.y>601){
        score=score+200;
        particle=null;
        if ( count>= 5) {
          gameState ="end"
        }
     }
    }
  }
  for (var j = 0; j < divisions.length; j++) 
  { divisions[j].display(); } 
//  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if(gameState!=="end") { 
      count++;
       particle = new Particle(mouseX, 10, 10, 10); 
   
    }
  }
}
/*
function mousePressed() { 
  
  } 
}
*/