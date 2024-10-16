class Ball extends Phaser.GameObjects.Graphics{
    constructor(scene, vector = {x: 1, y: 2}, x, y, radius, color) {
        super(scene);
        this.scene = scene;
        this.scene.add.existing(this);
        this.vector = vector;
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.mass = 1;

        this.create(radius, color);

    }

    create(radius, color){
        let colorPicker = "#ffd400"
        this.fillStyle(color, 1);
        this.fillCircle(0, 0, radius);

    }
}

export default Ball;
