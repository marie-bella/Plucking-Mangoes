const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,boyImg;
var ground;
var tree,treeImg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){

boyImg = loadImage("boy.png");
treeImg = loadImage("tree.png");

}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	stone = new Stone(100,460,45);
	mango1 = new Mango(600,290,34);
	mango2 = new Mango(855,325,35);
    mango3 = new Mango(670,260,35);
	mango4 = new Mango(730,200,35);
	mango5 = new Mango(710,320,36);
	mango6 = new Mango(780,250,35);
	mango7 = new Mango(825,170,35);
	mango8 = new Mango(880,260,36);
	mango9 = new Mango(940,220,35);
	mango10 = new Mango(980,305,36);

	attach = new Throw(stone.body,{x:100,y:465});

	tree = createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale = 0.42;

	boy = createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale = 0.125;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);

  
  
  drawSprites();

  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 
  detectCollison(stone,mango1);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);
  detectCollison(stone,mango6);
  detectCollison(stone,mango7);
  detectCollison(stone,mango8);
  detectCollison(stone,mango9);
  detectCollison(stone,mango10);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
	attach.fly();
}

function detectCollison(lstone,lmango){

if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
	&& lmango.body.position.x- lstone.body.position.x <lmango.diametre + lstone.diametre
	&& lstone.body.position.y- lmango.body.position.y <lmango.diametre + lstone.diametre
	&& lmango.body.position.y- lstone.body.position.y <lmango.diametre + lstone.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
	

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.attach(stone.body);
	}
}