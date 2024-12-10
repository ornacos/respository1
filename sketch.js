function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#74db9c');


  if (mouseIsPressed === true){
    blink()
    fly();
    tongUe();
  } else {
    frogE();
    tongUe();
    fly();
  }

}

function frogE(){
  push();
  fill('black');
  ellipse(180, 200, 200);
  pop();

  
  push();
  fill('#feffe3');
  ellipse(200, 200, 200);
  pop();
  
  push();
  let ex = constrain(mouseX, 100, 150);
  let wy = constrain(mouseY, 125, 250);
  fill ('black');
  rect(ex, wy, 150, 20, 20);
  pop();
}

function tongUe(){

  //frogmouth
  push();
  fill('black');
  square(350, 300, 10, 3);
  rect(20, 390, 400, 5, 10);
  pop();

  push();
  fill('#ff8170');
  ellipse(200, 330, 120, 20);
  pop();
  
  //tongue
  push();
  let ty = constrain(mouseY, 300, 400);
  fill('pink');
  rect(mouseX, 30 + ty, 100, 200, 30);
  pop();

  
}

function blink(){

  push();
  fill('black');
  ellipse(180, 200, 200);
  pop();


  push();
  fill('black')
  ellipse(200, 200, 200);
  pop();
}

function fly(){
  textSize(60);
  text('🦋', mouseX, 10 + mouseY);
}