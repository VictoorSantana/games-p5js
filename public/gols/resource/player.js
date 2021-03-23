function Player(width, height) {



    this.image = loadImage('./sprites/player_top.png');


    this.sprites = [
        loadImage('./sprites/player_bottom.png'),
        loadImage('./sprites/player_top.png'),
        loadImage('./sprites/player_left.png'),
        loadImage('./sprites/player_right.png')
    ];

    this.x = 0;
    this.y = 0;
    this.w = 80;
    this.h = 46;
    this.speed = 5;

    this.hasBall == false;
    this.direction = 1; //1-top || 2-bottom || 3-left || 4-right

    this.forceKick = 7;

    this.rotateDegree = 0;
    this.rotateSpeed = 1;


    this.show = function () {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.w, this.h);
        imageMode(CORNER);
    }


    this.moveVertical = function (forward = true) {
        if (forward) {
            this.y += this.speed;
            this.direction = 2;
            this.image = this.sprites[0];
        } else {
            this.y -= this.speed;
            this.direction = 1;
            this.image = this.sprites[1];
        }

        this.w = 80;
        this.h = 46;
    }


    this.catchOrDropBall = function (ball) {

        if (this.hasBall) {
            this.hasBall = false;
            return;
        }

        if (this.x < ball.x + ball.w && ball.x < this.x + this.w &&
            this.y < ball.y + ball.h && ball.y < this.y + this.h) {
            this.hasBall = true;
            return;
        }

        this.hasBall = false;
        return;
    }


    this.playWithBall = function (ball) {
        if (this.hasBall) {
            ball.x = this.x;
            ball.y = this.y;
        }
    }


    this.kick = function (ball) {
        this.hasBall = false;
        ball.kick = true;
        ball.direction = this.direction;
        ball.speed = this.forceKick;

    }

    this.moveHorizontal = function (left = true) {
        if (left) {
            this.x -= this.speed;
            this.direction = 3;
            this.image = this.sprites[2];
        } else {
            this.x += this.speed;
            this.direction = 4;
            this.image = this.sprites[3];
        }

        this.w = 46;
        this.h = 80;

    }




}