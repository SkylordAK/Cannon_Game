/*
	for (i = 0; i < 12; i++) {
    stroke(0)
    textSize(20)
    v = p5.Vector.fromAngle((i + 1) / 12.0 * TAU - HALF_PI);
    v.mult(180);
    text(i + 1, v.x+240, v.y+250);
  }
*/
function Player() {
  this.x = width/2;
  this.y = height/2;
  this.turn = false;
  this.rboost = false;
  this.lboost = false;
  this.a = 0;
  this.show = function() {
    push();
    strokeWeight(8)
    stroke(0,255,0)
    translate(this.x,this.y)
    rotate(this.a)
    line(0,0,5,0)
    pop();
    if (!this.turn) {
      this.a += 1
    }
    if (this.turn) {
      this.a -= 1
    }
    if (this.rboost) {
      this.a += 4;
    }
    if (this.lboost) {
      this.a -= 4;
    }
    if (this.a > 360 || this.a < -360) {
      this.a = 0;
    }
  }
}
