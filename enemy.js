function Enemy() {
  this.x = random(width)
  this.y = random(height)
  this.r = 20;
  this.show = function() {
    fill(255,0,255,100);
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
}
