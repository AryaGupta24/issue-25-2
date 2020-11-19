const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var paper1;
var dustbin1, dustbinImg, dustbin2, dustbin3;
var ground;

function preload(){
 // dustbinImg = loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
  ground = new Ground(400, 650, 800, 20);
  paper1 = new paper(150, 10);
  dustbin1 = new dustbin(660,630, 180, 20);
  /*dustbin1.addImage(dustbinImg)
  dustbin1.scale = 0.2;*/
  dustbin2 = new dustbin(560, 570, 20, 120);
  dustbin3 = new dustbin(760, 570, 20, 120);
} 


function draw() {
  //circleMode(CENTER);
  background(255);
  Engine.update(engine);
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.Position,{x:85, y:-85});
  }
}

