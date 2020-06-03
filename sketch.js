const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var ball;
var Box1;
var Box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(0,380,800,100)
    Box1 = new Box(200,100,50,50)
    Box2 = new Box(215,120,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ground1.display();
    Box1.display();
    Box2.display();
}