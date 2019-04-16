function barrier(){
  this.gravity = 5;
  this.velocity = 14;
  this.height = 125;
  this.width = 125;
  //this.height = Math.floor((Math.random() * 201) + 60);
  //this.width = Math.floor((Math.random() * 201) + 60);
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) - this.height);
  this.show = function(){
    imageMode(CENTER);
    image(badGuy,this.x,this.y,125,125);
   //fill(color('blue'));
   //rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
    if (this.x < (0 - this.width)){
      this.height = 125;
      this.width = 125;
      this.x = w - this.width;
      this.y = Math.floor((Math.random() * h) - this.height);
      //this.width = Math.floor((Math.random() * 201) + 60);
      //this.height = Math.floor((Math.random() * 201) + 60);
      score += 1;
      document.getElementById("scoreID").innerHTML = "Your Score: " + score;
    }
    else if (score == 15){
      this.velocity = 20;
      this.gravity = 12;
    }
    else if (score == 50){
      this.velocity = 24;
      this.gravity = 15;
    }
    else if (score == 75){
      this.velocity = 28;
      this.gravity = 18;
    }
  }
}
function barrier2(){
  this.gravity = 3;
  this.velocity = 12;
  this.height = 125;
  this.width = 125;
  //this.height = Math.floor((Math.random() * 201) + 60);
  //this.width = Math.floor((Math.random() * 201) + 60);
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) - this.height);
  this.show = function(){
    imageMode(CENTER);
    image(badGuy,this.x,this.y,125,125);
   //fill(color('yellow'));
   //rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
    if (this.x < (0 - this.width)){
      this.x = w - this.width;
      this.y = Math.floor((Math.random() * h) - this.height);
      this.height = 125;
      this.width = 125;
      //this.width = Math.floor((Math.random() * 201) + 60);
      //this.height = Math.floor((Math.random() * 201) + 60);
      score += 1;
      document.getElementById("scoreID").innerHTML = "Your Score: " + score;
    }
    else if (score == 15){
      this.velocity = 16;
      this.gravity = 6;
    }
    else if (score == 50){
      this.velocity = 20;
      this.gravity = 9;
    }
    else if (score == 75){
      this.velocity = 24;
      this.gravity = 12;
    }
  }
}
function barrier3(){
  this.gravity = 1;
  this.velocity = 10;
  this.height = 125;
  this.width = 125;
  //this.height = Math.floor((Math.random() * 201) + 60);
  //this.width = Math.floor((Math.random() * 201) + 60);
  this.x = w - this.width;
  this.y = Math.floor((Math.random() * h) - this.height);
  this.show = function(){
    imageMode(CENTER);
    image(badGuy,this.x,this.y,125,125);
   //fill(color("orange"));
   //rect(this.x,this.y,this.width, this.height);
  }
  this.update = function(){
    //this.velocity += this.gravity; //continually speeds up object to the left
    this.x -= this.velocity;
    if (this.x < (0 - this.width)){
      this.x = w - this.width;
      this.y = Math.floor((Math.random() * h) - this.height);
      this.height = 125;
      this.width = 125;
      //this.width = Math.floor((Math.random() * 201) + 60);
      //this.height = Math.floor((Math.random() * 201) + 60);
      score += 1;
      document.getElementById("scoreID").innerHTML = "Your Score: " + score;
    }
    else if (score == 15){
      this.velocity = 12;
      this.gravity = 3;
    }
    else if (score == 50){
      this.velocity = 16;
      this.gravity = 6;
    }
    else if (score == 75){
      this.velocity = 20;
      this.gravity = 9;
    }
  }
}