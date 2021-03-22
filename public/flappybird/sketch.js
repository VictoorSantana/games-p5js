let scene;
let bird;
let score;
let pipeBottom;
let pipeTop;

let stopBird = false;

let gapSize = 70;
let offset = 110; // max 110 || min -110

function setup() {
  let widthCanvas = 600;
  let heightCanvas = 400;

  createCanvas(widthCanvas, heightCanvas);
  scene = new Scene(widthCanvas, heightCanvas);
  score = new Score(widthCanvas, heightCanvas);

  pipeBottom = new Pipe(widthCanvas, heightCanvas, true);
  pipeTop = new Pipe(widthCanvas, heightCanvas, false);

  pipeTop.setOffset(gapSize - 50);
  pipeBottom.setOffset(gapSize + 50);

  bird = new Bird(widthCanvas, heightCanvas);
}

function draw() {
  background(220);

  scene.show();  
  pipeBottom.show();
  pipeTop.show();
  bird.show();
  score.show();

  if (stopBird == false) {
    bird.applyGravity();
    pipeTop.startMove(4);
    pipeBottom.startMove(4);
  }

  if (pipeBottom.isEnded()) {    
    offset = Math.floor(Math.random() * -110) + 110;
    pipeTop.reset();
    score.add();
    pipeBottom.reset();
    pipeTop.setOffset(gapSize - offset);
    pipeBottom.setOffset(gapSize + offset);
  }

  if (pipeBottom.isCrashed(bird) || pipeTop.isCrashed(bird)) {
    stopBird = true;
  }

}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    bird.jump();
  }
}