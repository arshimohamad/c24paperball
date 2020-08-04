
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(750,650,400,20,ground_options);
    World.add(world,ground);

	Engine.run(engine);
	ball1 = new Ball(100,500,50)
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ball1.display();
  
  drawSprites();
}