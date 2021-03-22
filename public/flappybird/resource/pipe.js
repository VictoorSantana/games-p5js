function Pipe(width, height, bottom = true) {

    this.h = 200;
    this.w = 90;
    this.speed = 5;
    this.x = width;
    this.y = bottom ? (height / 2) : 0;

    this.image = loadImage(`./sprites/pipe${bottom ? '' : '_top'}.png`);

    this.show = function () {
        image(this.image, this.x, this.y, this.w, this.h);
    }

    this.startMove = function (offset) {
        this.x -= this.speed;
    }

    this.reset = function () {
        this.x = width;
        this.y = bottom ? (height / 2) : 0;
    }

    this.setOffset = function (offset) {
        if (bottom) {
            this.y += offset;
        } else {
            this.y -= offset;
        }
    }

    this.isEnded = function () {
        if (this.x < - this.w) {
            return true;
        } else {
            return false;
        }
    }

    this.isCrashed = function (other) {
        // if(bird.x >= this.x && bird.x <= this.x + this.w) {
        //     if(bird.y >= this.h && bird.y <= this.y + this.h) {                
        //         rect(this.x, this.y, this.w, this.h);
        //         return true;
        //     }
        // }


        if (this.x < other.x + other.w && other.x < this.x + this.w &&
            this.y < other.y + other.h && other.y < this.y + this.h) {
            //   print("collision")
            return true;
        } else {
            return false;
        }


        return false;
    }
}