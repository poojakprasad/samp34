
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var mConstraint;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

	
	bob1 = new bob(340,575,"pink")
	bob2 = new bob(400,575,"red")
	bob3 = new bob(460,575,"yellow")
	bob4 = new bob (520,575,"orange")
	bob5 = new bob(580,575,"black")
	
	
	rope1=new rope(bob1.body,{ x: 340, y: 200 })
	rope2=new rope(bob2.body,{ x: 400, y: 200 })
	rope3 = new rope(bob3.body,{ x: 460, y: 200 })
	rope4 = new rope(bob4.body,{ x: 520, y: 200 })
	rope5 = new rope(bob5.body,{ x: 580, y: 200 })	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5 .display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 
}
function keyPressed(){
	Matter.Body.setPosition(bob.body, { x: mouseX, y: mouseY });	
}