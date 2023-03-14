var garden,rabbit,appleGroup,redGroup,orangeGroup;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);


// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,200,200);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

appleGroup = new Group();
redGroup = new Group();
orangeGroup = new Group();

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;

  var select_sprite = Math.round(random(1,3));

if (frameCount % 40 === 0){
  if(select_sprite == 1) {
    createApples();
  } else if (select_sprite == 2) {
    createOrangeLeaf();
  } else {
    createRedLeaf();
  }
}

  if(appleGroup.isTouching(rabbit)) {
    apple.destroy();
  }

  if(orangeGroup.isTouching(rabbit)) {
    orange.destroy();
  }

  if(redGroup.isTouching(rabbit)){
    red.destroy();
  }

  edges = createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  
}

function createApples() {
  apple = createSprite(random(50,350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  appleGroup.add(apple);
}

function createRedLeaf () {
    red = createSprite(random(50,350), 40, 10, 10);
    red.addImage(redImg);
    red.scale = 0.08;
    red.velocityY = 3.5;
    red.lifetime = 150;
    redGroup.add(red);
}

function createOrangeLeaf () {
    orange = createSprite(random(50,350), 40, 10, 10);
    orange.addImage(orangeImg);
    orange.scale = 0.08;
    orange.velocityY = 2.5;
    orange.lifetime = 150;
    orangeGroup.add(orange);
}