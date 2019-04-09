function platform(){
  this.x = 0;
  this.y = h-20;
  this.width = w;
  this.height = h-20;
  this.show = function(){
    fill(color('green'));
    rect(this.x,this.y,this.width,this.height);
  }
}