import GameScene from "./scenes/GameScene.js";

let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 949,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: true
        }
    },
    scene: GameScene
};

var Game = new Phaser.Game(config);
