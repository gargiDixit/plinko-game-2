const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var division=[];
var ground;
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var count=0;
var particle;
var gamestate=start;
var start;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",80)
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>700){
        
          if(particle.body.position.y<300){
            score=score+500;
            
          }
          
          if(particle.body.position.x>301&&particle.body.x<600){
            score=score+100;
            
          }
          if(particle.body.position.x<601&&particle.body.x>900){
            score=score+200;
            
          }
        }
        }
  

  
}



function mousePressed()
{
  if(gamestate!=="end")
  {
    particle=new Particle(mouseX,10,10,10);
    
  }

}

