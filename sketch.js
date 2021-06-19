//name spacing
//constant means fixed.
const Engine = Matter.Engine;//create physics engine
const World = Matter.World;//create physical world
const Bodies = Matter.Bodies; // create bodies

var engine, world;
var ground;
var ball;

function setup() {
 var canvas= createCanvas(400,400);
 engine = Engine.create();  //created the engine
 world = engine.world; // linking the engine and world
 var ball_options={
restitution: 1.0
 }
 ball= Bodies.circle(200,100,50,ball_options);
 World.add(world,ball)
 

var ground_options = {
  isStatic : true, //additional property 
}

 ground = Bodies.rectangle(200,390,200,20,ground_options); //creating the object
 World.add(world,ground); //adding it to the world
}

function draw() {
  background("orange");
  Engine.update(engine); // updating the engine
  rectMode(CENTER) ; // 
  rect(ground.position.x,ground.position.y,400,20); //
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
  
  
}