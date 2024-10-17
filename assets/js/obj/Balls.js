class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, radius, color) {
        let graphics = scene.make.graphics({ x: 0, y: 0, add: false });
        graphics.fillStyle(color, 1);
        graphics.fillCircle(radius, radius, radius);
        graphics.generateTexture('ballTexture_' + radius, radius * 2, radius * 2);

        super(scene, x, y, 'ballTexture_' + radius);
        this.radius = radius;

        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
        this.setCircle(radius);
    }

    setRandomVelocity(minSpeed, maxSpeed) {
        const randomX = Phaser.Math.Between(minSpeed, maxSpeed) * Phaser.Math.RND.sign();
        const randomY = Phaser.Math.Between(minSpeed, maxSpeed) * Phaser.Math.RND.sign();
        this.setVelocity(randomX, randomY);
    }
}
export default Ball;