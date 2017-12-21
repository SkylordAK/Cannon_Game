function Bullets() {
  this.x = cos(player.a)+width/2
  this.y = sin(player.a)+height/2
  this.xspeed = 10*cos(player.a);
  this.yspeed = 10*sin(player.a);
  this.r = 7.5
  this.show = function() {
    fill(255,255,0)
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }

  this.hit = function(enemy) {
    var d = dist(this.x,this.y,enemy.x,enemy.y);
    if (d < this.r+enemy.r) {
      score += 1
      return true;
    }
    else {
      return false;
    }
  }
  this.update = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;

    // if (this.x > width) {
    //   this.xspeed = -this.xspeed;
    // }
    // if (this.x < 0) {
    //   this.xspeed = -this.xspeed;
    // }
    // if (this.y > height) {
    //   this.yspeed = -this.yspeed;
    // }
    // if (this.y < 0) {
    //   this.yspeed = -this.yspeed;
    // }
  }
}
