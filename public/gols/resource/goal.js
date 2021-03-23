function Goal(width, height) {



    this.image = loadImage('./sprites/goal.png');
    this.w = 185;
    this.h = 33;
    this.x = (width / 2) - (this.w / 2);
    this.y = 0;    

    this.show = function() {
        image(this.image, this.x, this.y, this.w, this.h);
    }
}