
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var rope, platform, ball;
var ball_con;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  rope = new Rope(7,{x:200,y:30});
  platform = new Platform(200,690,400,20);
  
  ball = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,ball);

  ball_con = new Link(rope,ball);

  platform.velocityX = 4;

  rectMode(CENTER);
  ellipseMode(RADIUS);
 

}


function draw() 
{
  background(51);
  Engine.update(engine);

rope.show();
ground.show();

if (ball.isTouching(platform)) {

  text ("You Win!", 200, 200)
}

else {

  text ("Game Over...", 200, 200 )
}
 
  
}

function drop()
{
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
 
}
function mousePressed () {

  if (ball.mousePressed) {
    drop();
  }
}