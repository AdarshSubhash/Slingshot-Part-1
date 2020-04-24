const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var block;
var ball, slingshot;



function setup() {
createCanvas(600,400);
engine = Engine.create();
 world = engine.world;

platform=new Platform(450,350,120,10);
platform1=new Platform(250,370,80,10);

platform3=new Platform(300,250,90,10);

block=new Block(450,340,10,10);
block1=new Block(460,340,10,10);
block2=new Block(470,340,10,10);
block3=new Block(480,340,10,10);
block4=new Block(490,340,10,10);
block5=new Block(500,340,10,10);
block6=new Block(450,330,30,10);
block7=new Block(513,340,40,10);
block8=new Block(250,330,30,30);
block9=new Block(280,330,30,30);
block10=new Block(265,300,30,30);
block11=new Block(310,225,60,30);
block12=new Block(330,215,20,20);
ball=new Ball(50,350,20);
slingshot = new SlingShot(ball.body,{x:50, y:300});
}

function draw() {
 background("green");  
 Engine.update(engine);
platform.display();
platform1.display();

platform3.display();
block.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
ball.display();
slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
 
