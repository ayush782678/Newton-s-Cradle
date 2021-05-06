const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5,rope1, rope2, rope3, rope4, rope5;

var ropeStiffness,ropeLength;

function setup(){
    createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;

    engine.world.gravity.y =1;

    ropeLength = 300;

    ball1 = new Ball(260, 200, 35);
    ball2 = new Ball(330, 200, 35);
    ball3 = new Ball(400, 200, 35);
    ball4 = new Ball(470, 200, 35);
    ball5 = new Ball(590, 100, 35);
	rope1 = new String(ball1.body, {x: 260, y: 80}, ropeLength, ropeStiffness);
	rope2 = new String(ball2.body, {x: 330, y: 80}, ropeLength, ropeStiffness);
	rope3 = new String(ball3.body, {x: 400, y: 80}, ropeLength, ropeStiffness);
    rope4 = new String(ball4.body, {x: 470, y: 80}, ropeLength, ropeStiffness);
	rope5 = new String(ball5.body, {x: 540, y: 80}, ropeLength, ropeStiffness);



}

function draw(){
    background("black");
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

    rectMode(CENTER);
    fill("red");
    stroke("red");
    rect(400, 80, 400, 20);
}