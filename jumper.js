function jumper() {
        this.x = 50;
        this.y = 0;
        this.gravity = 0.8; //the force of gravity
        this.lift = -20; //opposing force
        this.velocity = 1; //speed of the gravity
        
        this.show = function(){
          imageMode(CENTER);
          image(gameChar,this.x,this.y,100,100);
          //fill(color('red'));
          //ellipse(this.x,this.y,75,75);
        }
        this.up = function(){
          this.velocity += this.lift;
        }
        this.update = function(){
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          if (this.y > h-50) { //stop on floor
            this.y = h-50;
            this.velocity = -10;
          }
          if (this.y < 50) { //stop on ceiling.
            this.y = 50;
            this.velocity = 0;
          }
          if ((keyIsDown(65)) && (this.x > 0)){
           this.x += -10;
         }
         if (keyIsDown(68) && (this.x < w-25)){
           this.x +=10;
         }
        };
      }
      function keyPressed(){
        if (keyCode == 32) {
          jumper.up();
      }
      }