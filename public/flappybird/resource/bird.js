function Bird(width, height) {
    this.image = loadImage('./sprites/bird.png');
    this.song = loadSound('./song/wing.mp3');

    this.gravity = 4;
    this.jumpForce = 16;
    this.jumpInterval = 50;    
    this.jumpEnd = 0;
    this.isJumpin = false;
        

    this.w = 50;
    this.h = 40;
    this.x = (width / 3) - (this.w / 2);
    this.y = (height / 2) - (this.h / 2);

    this.show = function() {          
        image(this.image, this.x, this.y, this.w, this.h);
    }

    this.applyGravity = function() {
        if(this.isJumpin == false) {
            this.y += this.gravity;
        } else {            
            if(this.jumpEnd > this.y) {
                this.isJumpin = false;
                this.jumpEnd = 0;
            } else {
                this.y -= this.jumpForce;
            }            
        }    
    }

    this.jump = function() {
        this.song.play();        
        this.isJumpin = true;        
        this.jumpEnd = this.y - this.jumpInterval;
    }




}