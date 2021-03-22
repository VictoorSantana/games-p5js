function Score(width, height) {
    
    this.song = loadSound('./song/point.mp3');
    this.point = 1;

    this.show = function () {
        fill(0, 0, 0);
        textSize(30);
        textFont('Cuprum');
        text(`Score ${this.point}`, 20, height - 20);
    }


    this.add = function() {
        this.song.play();
        this.point++;
    }
}