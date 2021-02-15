const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var ground_options;
var maxDrops = 100;
var drops = [];


function setup(){
    var canvas = createCanvas(500,700);

    engine = Engine.create();
    world  = engine.world;
  
    if(frameCount%100===0){
      for(var i=0; i<maxDrops;i++){
        drops.push(new createDrops(random(0,400),random(0,400),3,10));
       }
      }
  
  }

  function draw(){

    background(0);
    Engine.update(engine);


    for(var i=0; i<maxDrops;i++){
      drops[i].display();
      drops[i].update();
    }

  }

