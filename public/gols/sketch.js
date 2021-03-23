
let scene;
let player;
let ball;
let goal;

function setup() {
  let widthCanvas = 550;
  let heightCanvas = 800;

  createCanvas(widthCanvas, heightCanvas);
  scene = new Scene(widthCanvas, heightCanvas);
  player = new Player(widthCanvas, heightCanvas);
  ball = new Ball(widthCanvas, heightCanvas);
  goal = new Goal(widthCanvas, heightCanvas);
}

function draw() {
  background(220);


  scene.show();
  player.show();  
  ball.show();  
  goal.show();

  player.playWithBall(ball);
  ball.kicked();
  

  testKeyPressed();
}

function keyPressed() {
  if(keyCode === 90) { // Z
    player.catchOrDropBall(ball);
  }

  if(keyCode === 88) {  
    player.kick(ball);    
  }  

  
}

function testKeyPressed() {
  if(keyIsDown(UP_ARROW)) {
    player.moveVertical(false);
  } else if (keyIsDown(DOWN_ARROW)) {
    player.moveVertical(true);
  } 
  
  if (keyIsDown(LEFT_ARROW)) {
    player.moveHorizontal(true);
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.moveHorizontal(false);
  }
}