var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];
//var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
 text("500",20,600,20,20);
 text("500",120,600,20,20);
 text("500",200,600,20,20);
 text("500",280,600,20,20);
 text("100",360,600,20,20);
 text("100",440,600,20,20);
 text("100",520,600,20,20);
 text("200",600,600,20,20);
 text("200",680,600,20,20);
 text("200",760,600,20,20);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles!=null){
     Particle.display();
     if(particles.body.position.y>760){
       if(particles.body.position.x<360){
         score = score+500;
         particles = null;
       }
       if(particles.body.position.x>360 && particles.body.position.x<600){
         score = score+100;
         particles = null;
       }
       if(particles.body.position.x>600 && particles.body.position.x<800){
         score = score+200;
         particles = null;
       }
     }
     if(count>=5){
       gameState = "end";
       text("GAME OVER",50,50,400,400);
       particles
     }
   }
}