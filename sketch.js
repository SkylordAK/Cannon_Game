var player;
var bullets = [];
var enemy;
var score = 0;
life = 5
function setup() {
  createCanvas(500,500)
  player = new Player();
  for (var i=0; i<bullets.length; i++) {
    bullets[i] = new Bullets();
  }
  enemy = new Enemy();
  angleMode(DEGREES);
}

function draw() {
  background(0);
  textSize(30);
  textAlign(CENTER);
  fill(0,0,255,100)
  //text("Life "+life,250,40)
  textSize(300);
  //textAlign(CENTER);
  //fill(0,0,255,100)
  text(score,250,350)
  /*if (bullets.length > 1) {
    life -= 1;
    bullets.length = 0
  }
  if (life == 0) {
    score = 0
    life = 5
  }*/
  player.show();
  for (var i=0; i<bullets.length; i++) {
    bullets[i].show();
    bullets[i].update();

  //   if (bullets.length >= 5) {
  //     if (bullets[i].x > width || bullets[i].y > height || bullets[i].x < 0 || bullets[i].y < 0) {
  //     //bullets.pop();
  //     bullets.length=1;
  //   }
  // }

    if (bullets[i].hit(enemy)) {
      bullets.splice(i,1)
      enemy = new Enemy();
    }
  }
  enemy.show();
}
function keyReleased() {
  player.rboost = false;
  player.lboost = false;
}

function keyPressed() {
  if (key == ' ') {
    bullets.push(new Bullets())
  }
  if (keyCode == RIGHT_ARROW) {
    player.rboost = true;
    player.turn = false;
  }
  if (keyCode == LEFT_ARROW) {
    player.lboost = true
    player.turn = true;
  }
}
