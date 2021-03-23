function Ball(width, height) {


    this.image = loadImage('./sprites/ball.png');

    this.x = (width / 2);
    this.y = (height / 2);
    this.w = 46;
    this.h = 46;
    this.kick = false;

    this.direction = 1;
    this.speed = 0;

    this.show = function () {
        image(this.image, this.x, this.y, this.w, this.h);
    }



    this.kicked = function () {
        //1-top || 2-bottom || 3-left || 4-right

        if(this.kick) {
            switch (this.direction) {
                case 1:
                    this.y -= this.speed;    
                    break;
                case 2:
                    this.y += this.speed;
                    break;
                case 3:
                    this.x -= this.speed;
                    break;
                case 4:
                    this.x += this.speed;
                    break;
            }
        }        
    }



    
}