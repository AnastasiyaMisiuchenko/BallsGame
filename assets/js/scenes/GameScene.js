import Ball from "../obj/Ball.js";
import Random from "../utils/Random.js";
import BallPhysics from "../physics/BallPhysics.js";
class GameScene extends Phaser.Scene{
    constructor() {
        super("Game");
        this.balls = [];
        this.speed = 0.2
    }

    update(){
        BallPhysics.processCollision(this.balls);
        this.balls.forEach( ball => {
            BallPhysics.checkCollisionWithWalls(ball, this.game.config);
            ball.setPosition(ball.x + ball.vector.x * this.speed, ball.y + ball.vector.y * this.speed);
        });

    }

    create(){
        let countBalls = Random.getRandom(3, 10);
        for (let i = 0; i < countBalls; i++) {
            this.balls.push(new Ball(this, {x: Random.getRandom(-5, 5), y: Random.getRandom(-5, 5)}, Random.getRandom(50, 400), Random.getRandom(50, 400), Random.getRandom(5, 20), Math.floor(Math.random() * 0xFFFFFF)));
        }

    }


}

export default GameScene;
