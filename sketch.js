const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1,rubber2;
var stone1,rubber2;
var iron1,iron2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(600,200,100,100);
   stone1 = new Stone(600,200,100,100);
   iron1 = new Iron(900,200,100,100);
   rubber2 = new Rubber(500,200,100,100);
   stone2 = new Stone(350,200,100,100);
   iron2 = new Iron(750,200,100,100)
  
console.log()

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    rubber2.display();
    stone2.display();
    iron2.display();
}