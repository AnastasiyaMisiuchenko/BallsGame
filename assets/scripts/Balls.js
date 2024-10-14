class Balls extends Phaser.GameObjects.Graphics{
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.scene.add.existing(this);
    }
    createBall(x, y, radius, color){
        //const graphics = this.add.graphics();
        graphics.fillStyle(color, 1);
        graphics.fillCircle(x, y, radius);
    }
}