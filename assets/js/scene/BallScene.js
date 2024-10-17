import Ball from "../obj/Balls.js";
import Line from "../obj/Line.js";

class BallScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BallScene' });
        this.balls = [];
        this.lines = [];
    }

    preload() {
        // Здесь можно было бы загружать ресурсы, но текстуры создаются динамически
    }

    create() {
        this.physics.world.setBoundsCollision(true, true, true, true);

        this.createBalls(15);
        // Добавляем линии
        this.createLines();


        this.physics.add.collider(this.balls);

        // Включаем коллизии между шариками и линиями
        this.physics.add.collider(this.balls, this.lines);
    }

    createBalls(numBalls) {
        for (let i = 0; i < numBalls; i++) {
            const radius = Phaser.Math.Between(10, 40);
            const x = Phaser.Math.Between(radius, this.sys.game.config.width - radius);
            const y = Phaser.Math.Between(radius, this.sys.game.config.height - radius);
            const color = Phaser.Display.Color.RandomRGB().color;  // Случайный цвет

            let ball = new Ball(this, x, y, radius, color);
            ball.setRandomVelocity(100, 300);

            this.balls.push(ball);
            this.add.existing(ball);
        }
    }

    createLines() {
        for (let i = 0; i < 3; i++){
            const x = Phaser.Math.Between(100, 1900);
            const y = Phaser.Math.Between(300, 1000);
            const width = Phaser.Math.Between(100, 600);
            const height = Phaser.Math.Between(5, 10);
            const color = Phaser.Display.Color.RandomRGB().color;

            let line = new Line(this, x, y, width, height, color);

            this.lines.push(line.getLine());
        }
        // const x = Phaser.Math.Between(100, 1900);
        // const y = Phaser.Math.Between(300, 1000);
        // const width = Phaser.Math.Between(100, 600);
        // const height = Phaser.Math.Between(5, 10);
        // const angle = Phaser.Math.Between(0, 360);
        // const color = Phaser.Display.Color.RandomRGB().color;
        // let line = new Line(this, x, y, width, height, color, angle);
        // this.lines.push(line.getLine());
    }

    update() {
        // Основная логика обновления, если требуется
    }
}
export default BallScene;