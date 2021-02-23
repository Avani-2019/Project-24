
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	 
	
	engine = Engine.create();
	world = engine.world;

	Boxpart1 = new Dustbin(1240,610,20,100);
	Boxpart2 = new Dustbin(1350,650,200,20);
	Boxpart3 = new Dustbin(1460,610,20,100);

	paperball = new ball(200,450,40);

	platform=new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Boxpart1.display();
  Boxpart2.display();
  Boxpart3.display();

  paperball.display();

  platform.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperball.body,paperball.body.position,{x:100,y:-100});
  
	}
}

