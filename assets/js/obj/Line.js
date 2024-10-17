class Line {
    constructor(scene, x, y, width, height, color, angle = 0) {
        this.scene = scene;

        // Создаем прямоугольник как графический элемент
        this.line = scene.add.rectangle(x, y, width, height, color).setOrigin(0.5);

        // Превращаем его в статический физический объект
        scene.physics.add.existing(this.line, true); // true - статическое тело

        this.line.setRotation(Phaser.Math.DegToRad(angle));
    }

    // Функция для получения объекта линии
    getLine() {
        return this.line;
    }

}
export default Line;