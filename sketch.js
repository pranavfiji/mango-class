
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5;
var tree1;
var boy1;
var ground1;
var constraint1,constraint2,constraint3,constraint4,constraint5,constraint6;
var rock1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	Engine.run(engine);
  
	mango1= new Mango(400,100,0,0);
	mango2=new Mango(425,100,0,0);
	mango3=new Mango(430,100,0,0);
	mango4=new Mango(450,160,0,0);
	mango5=new Mango(430,100,0,0);
	tree1=new Tree(500,650,20,20);
	boy1=new Boy(200,671,20,20);
	ground1=new Ground(600,height,800,20);
	stone1= new Stone(200,400,20,20);	
	constraint1=new SlingShot(stone1.body,{x:200,y:671});
	constraint2=new SlingShot(mango1.body,{x:400,y:100});
	constraint3=new SlingShot(mango2.body,{x:425,y:100});
	constraint4=new SlingShot(mango3.body,{x:430,y:100});
	constraint5=new SlingShot(mango4.body,{x:450,y:160});
	constraint6=new SlingShot(mango4.body,{x:430,y:100});
	
	
	


}


function draw(){
  rectMode(CENTER);
  background(270);
  
  drawSprites();
  mango1.display();
  tree1.display();
  mango4.display();
  mango2.display();
  mango3.display();
  mango5.display();
  mango1.display();
  boy1.display();
  groundn1.display();
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();
  constraint6.display();

 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
		constraint1.swingShot();
	}


