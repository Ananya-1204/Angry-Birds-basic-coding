const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var ground1;
var pig1, pig2, pig3;
var log1, log2, log3, log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,320);
    box2 = new Box(800, 320);
    box3 = new Box(1000, 250);
    box4 = new Box(800, 250);
    ground1 = new ground(600, 790, 1200, 20);

    pig1 = new Pig(900, 320);
    pig2 = new Pig(900, 250);
    pig3 = new Pig(900, 180);
    log1 = new Log(900, 280, 300, PI/2);
    log2 = new Log(900, 220, 300, PI/2);
    log3 = new Log(850, 150, 150, PI/7);
    log4 = new Log(950, 150, 150, -PI/7);
    bird1 = new Bird(70, 200);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig2.display();
    pig1.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground1.show();
}