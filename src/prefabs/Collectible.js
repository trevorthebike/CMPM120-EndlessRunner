// Rocket prefab
class Collectible extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, frame);
        scene.physics.add.existing(this); 
        this.body.setCollideWorldBounds(true);
        this.setPosition(this.y, game.config.height-100);
}

update() {
    if(this.y > game.config.height){ 
        this.y = 0;
        this.x = Math.random() * 500 + 100;
    }
    this.body.setVelocityY(200);
}

reset(){
    this.y = 0;
    this.x = Math.random() * 500 + 100;
}
}
