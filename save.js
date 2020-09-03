const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roofObj;
var string1, string2, string3, string4, string5;

function setup(){
    var canvas = createCanvas(1000,750);
    engine = Engine.create();
    world = engine.world;
    
    bob1 = new Bob(190, 650, 40);
    bob2 = new Bob(270, 650, 40);
    bob3 = new Bob(350, 650, 40);
    bob4 = new Bob(430, 650, 40);
    bob5 = new Bob(510, 650, 40);
        
    roofObj = new Roof(350, 200, 450, 20)

    string1 = new Chain(bob1.body, roofObj.body, -40*3.99, 410);
    string2 = new Chain(bob2.body, roofObj.body, -40*2, 410);
    string3 = new Chain(bob3.body, roofObj.body, -40*0.11, 410);
    string4 = new Chain(bob4.body, roofObj.body,  40*1.88, 410);
    string5 = new Chain(bob5.body, roofObj.body,  40*4, 410);
}

function draw(){
    background(250,128,114);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();
    
    roofObj.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x:0.1, y:-0.1});
    }
}