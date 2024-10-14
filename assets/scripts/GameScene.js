class GameScene extends Phaser.Scene{
    constructor() {
        super("Game");
    }
    create(){
        const ball1 = new Balls(this);
        ball1.createBall(400, 400, 40, 0xff0000);
    }
}