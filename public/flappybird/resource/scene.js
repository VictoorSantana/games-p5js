function Scene(width, height) {

    this.image = loadImage('./sprites/scene.png');

    this.show = function() {

        image(this.image, 0, 0, width, height);        

    }
}